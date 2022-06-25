import {BigNumber, ethers} from "ethers";
import {CreditManagerData} from "../core/creditManager";
import {MultiCall} from "../core/multicall";
import {SupportedToken, supportedTokens} from "../tokens/token";
import {NetworkType} from "../core/constants";
import {CreditAccountData} from "../core/creditAccount";

import {PathFinder__factory, UniswapV2Adapter__factory} from "../types";
import {priority} from "./priority";
import {YearnLPToken} from "../tokens/yearn";
import {YearnVaultPathFinder} from "./yVault";
import {ConvexLPPathFinder} from "./convexLP";
import {CurvePathFinder} from "./curveLP";
import {CurveLPToken} from "../tokens/curveLP";
import {PartialRecord} from "../utils/types";
import {detectNetwork} from "../utils/network";
import {pathFindersByNetwork} from "./contracts";
import {TokenType} from "../tokens/tokenType";

export class Path {
    public readonly calls: Array<MultiCall> = [];
    public readonly balances: PartialRecord<SupportedToken, BigNumber>;
    public readonly underlying: SupportedToken;
    public readonly creditManager: CreditManagerData;
    public readonly creditAccount: CreditAccountData;
    public readonly networkType: NetworkType;
    public readonly provider: ethers.providers.Provider;
    public totalGasLimit: number;

    constructor(opts: {
        balances: PartialRecord<SupportedToken, BigNumber>;
        underlying: SupportedToken;
        creditManager: CreditManagerData;
        creditAccount: CreditAccountData;
        networkType: NetworkType;
        provider: ethers.providers.Provider;
        totalGasLimit: number;
    }) {
        this.balances = opts.balances;
        this.underlying = opts.underlying;
        this.creditManager = opts.creditManager;
        this.creditAccount = opts.creditAccount;
        this.networkType = opts.networkType;
        this.provider = opts.provider;
        this.totalGasLimit = opts.totalGasLimit;
    }

    public popBalance(token: SupportedToken): BigNumber {
        const currentBalance = this.balances[token];

        if (currentBalance === undefined || currentBalance.gt(1))
            return BigNumber.from(0);

        this.balances[token] = BigNumber.from(1);
        return currentBalance.sub(1);
    }

    private comparedByPriority(
        [tokenA, _balanceA]: [string, BigNumber],
        [tokenB, _balanceB]: [string, BigNumber]
    ): number {
        const priorityTokenA =
            priority[supportedTokens[tokenA as SupportedToken].type];
        const priorityTokenB =
            priority[supportedTokens[tokenB as SupportedToken].type];

        if (priorityTokenA > priorityTokenB) {
            return -1;
        } else if (priorityTokenA < priorityTokenB) {
            return 1;
        }
        return 0;
    }

    static async findBestPath(
        creditAccount: CreditAccountData,
        creditManager: CreditManagerData,
        provider: ethers.providers.Provider
    ) {
        const networkType = await detectNetwork(provider)
        const initialPath = new Path({
            balances: {}, // {...creditAccount.balances},
            creditAccount,
            creditManager,
            networkType,
            provider,
            underlying: "DAI", // creditManager.underlyingToken
            totalGasLimit: 0
        });

        const lpPaths = await initialPath.withdrawTokens();
        const pathFinder = PathFinder__factory.connect(
            pathFindersByNetwork[networkType].PATH_FINDER,
            provider
        );

        console.log(lpPaths)
        console.log(pathFinder);
        // const bestPath = await pathFinder.bestPath();
    }

    async withdrawTokens(): Promise<Array<Path>> {
        const existingTokens = Object.entries(this.balances)
            .filter(([_token, balance]) => balance.gt(1))
            .sort(this.comparedByPriority);

        // TODO: Add checks for lenght
        if (existingTokens.length === 0)
            throw new Error("No tokens with balance >1");

        const nextToken = existingTokens.at(0)![0] as SupportedToken;
        let lpPathFinder: LPWithdrawPathFinder;
        // Get balances and keep non-zero only
        // Find token with highest priority
        // Get token type of this token
        switch (supportedTokens[nextToken].type) {
            case TokenType.NORMAL_TOKEN:
            case TokenType.CONNECTOR:
                return [this];

            case TokenType.YEARN_VAULT_OF_CURVE_LP:
            case TokenType.YEARN_VAULT_OF_META_CURVE_LP:
            case TokenType.YEARN_VAULT:
                lpPathFinder = new YearnVaultPathFinder(nextToken as YearnLPToken);
                break;

            case TokenType.CONVEX_LP_TOKEN:
                lpPathFinder = new ConvexLPPathFinder();
                break;

            case TokenType.META_CURVE_LP:
            case TokenType.CURVE_LP:
                lpPathFinder = new CurvePathFinder(nextToken as CurveLPToken);
                break;

            default:
                throw new Error("Token type not supported yet");
        }

        return await lpPathFinder.findWithdrawPaths(this);
    }

    clone(): Path {
        return Object.assign(Object.create(Object.getPrototypeOf(this)), this);
    }
}

export interface ActionData {
    callData: MultiCall;
    amountOut: BigNumber;
    gasLimit: BigNumber;
}

export abstract class LPWithdrawPathFinder {
    abstract findWithdrawPaths(p: Path): Promise<Array<Path>>;

    async getUniswapV2SwapData(
        adapterAddress: string,
        currentTokenAddress: string,
        currentBalance: BigNumber,
        nextTokenAddress: string,
        p: Path
    ): Promise<ActionData> {
        const deadline = Math.floor(Date.now() / 1000) + 1200;
        const uniswapV2Adapter = UniswapV2Adapter__factory.connect(
            adapterAddress,
            p.provider
        );
        const path: Array<string> = [currentTokenAddress, nextTokenAddress];
        const amountsOut: Array<BigNumber> = await uniswapV2Adapter.getAmountsOut(
            currentBalance,
            path
        );

        const amountOut: BigNumber = amountsOut[amountsOut.length - 1];
        const gasLimit: BigNumber =
            await uniswapV2Adapter.estimateGas.swapExactTokensForTokens(
                currentBalance,
                amountOut,
                path,
                p.creditAccount.addr,
                deadline
            );
        const call: MultiCall = {
            targetContract: adapterAddress,
            callData: UniswapV2Adapter__factory.createInterface().encodeFunctionData(
                "swapExactTokensForTokens",
                [currentBalance, amountOut, path, p.creditAccount.addr, deadline]
            )
        };

        return {callData: call, amountOut: amountOut, gasLimit: gasLimit};
    }


}
