import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../../../common";
export interface CreditManagerInternalInterface extends utils.Interface {
    functions: {
        "_accountFactory()": FunctionFragment;
        "_acl()": FunctionFragment;
        "adapterToContract(address)": FunctionFragment;
        "addCollateral(address,address,address,uint256)": FunctionFragment;
        "addToken(address)": FunctionFragment;
        "approveCreditAccount(address,address,address,uint256)": FunctionFragment;
        "calcClosePayments(uint256,bool,uint256,uint256)": FunctionFragment;
        "calcClosePaymentsPure(uint256,bool,uint256,uint256)": FunctionFragment;
        "calcCreditAccountAccruedInterest(address)": FunctionFragment;
        "changeContractAllowance(address,address)": FunctionFragment;
        "checkAndEnableToken(address,address)": FunctionFragment;
        "closeCreditAccount(address,bool,uint256,address,address,uint256,bool)": FunctionFragment;
        "collateralTokens(uint256)": FunctionFragment;
        "collateralTokensByMask(uint256)": FunctionFragment;
        "collateralTokensCount()": FunctionFragment;
        "collateralTokensInternal()": FunctionFragment;
        "contractToAdapter(address)": FunctionFragment;
        "creditAccounts(address)": FunctionFragment;
        "creditConfigurator()": FunctionFragment;
        "creditFacade()": FunctionFragment;
        "cumulativeDropAtFastCheck(address)": FunctionFragment;
        "disableToken(address,address)": FunctionFragment;
        "enabledTokensMap(address)": FunctionFragment;
        "executeOrder(address,address,bytes)": FunctionFragment;
        "fastCollateralCheck(address,address,address,uint256,uint256,bool)": FunctionFragment;
        "fees()": FunctionFragment;
        "forbiddenTokenMask()": FunctionFragment;
        "fullCollateralCheck(address)": FunctionFragment;
        "getCreditAccountOrRevert(address)": FunctionFragment;
        "getCreditAccountParameters(address)": FunctionFragment;
        "getMaxIndex(uint256)": FunctionFragment;
        "liquidationThresholds(address)": FunctionFragment;
        "manageDebt(address,uint256,bool)": FunctionFragment;
        "openCreditAccount(uint256,address)": FunctionFragment;
        "pause()": FunctionFragment;
        "paused()": FunctionFragment;
        "pool()": FunctionFragment;
        "poolService()": FunctionFragment;
        "priceOracle()": FunctionFragment;
        "safeTokenTransfer(address,address,address,uint256,bool)": FunctionFragment;
        "setConfigurator(address)": FunctionFragment;
        "setCumulativeDropAtFastCheck(address,uint16)": FunctionFragment;
        "setForbidMask(uint256)": FunctionFragment;
        "setLiquidationThreshold(address,uint16)": FunctionFragment;
        "setParams(uint16,uint16,uint16)": FunctionFragment;
        "tokenMasksMap(address)": FunctionFragment;
        "transferAccountOwnership(address,address)": FunctionFragment;
        "transferAssetsTo(address,address,bool,uint256)": FunctionFragment;
        "underlying()": FunctionFragment;
        "universalAdapter()": FunctionFragment;
        "unpause()": FunctionFragment;
        "upgradeContracts(address,address)": FunctionFragment;
        "version()": FunctionFragment;
        "wethAddress()": FunctionFragment;
        "wethGateway()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "_accountFactory" | "_acl" | "adapterToContract" | "addCollateral" | "addToken" | "approveCreditAccount" | "calcClosePayments" | "calcClosePaymentsPure" | "calcCreditAccountAccruedInterest" | "changeContractAllowance" | "checkAndEnableToken" | "closeCreditAccount" | "collateralTokens" | "collateralTokensByMask" | "collateralTokensCount" | "collateralTokensInternal" | "contractToAdapter" | "creditAccounts" | "creditConfigurator" | "creditFacade" | "cumulativeDropAtFastCheck" | "disableToken" | "enabledTokensMap" | "executeOrder" | "fastCollateralCheck" | "fees" | "forbiddenTokenMask" | "fullCollateralCheck" | "getCreditAccountOrRevert" | "getCreditAccountParameters" | "getMaxIndex" | "liquidationThresholds" | "manageDebt" | "openCreditAccount" | "pause" | "paused" | "pool" | "poolService" | "priceOracle" | "safeTokenTransfer" | "setConfigurator" | "setCumulativeDropAtFastCheck" | "setForbidMask" | "setLiquidationThreshold" | "setParams" | "tokenMasksMap" | "transferAccountOwnership" | "transferAssetsTo" | "underlying" | "universalAdapter" | "unpause" | "upgradeContracts" | "version" | "wethAddress" | "wethGateway"): FunctionFragment;
    encodeFunctionData(functionFragment: "_accountFactory", values?: undefined): string;
    encodeFunctionData(functionFragment: "_acl", values?: undefined): string;
    encodeFunctionData(functionFragment: "adapterToContract", values: [string]): string;
    encodeFunctionData(functionFragment: "addCollateral", values: [string, string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "addToken", values: [string]): string;
    encodeFunctionData(functionFragment: "approveCreditAccount", values: [string, string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "calcClosePayments", values: [BigNumberish, boolean, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "calcClosePaymentsPure", values: [BigNumberish, boolean, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "calcCreditAccountAccruedInterest", values: [string]): string;
    encodeFunctionData(functionFragment: "changeContractAllowance", values: [string, string]): string;
    encodeFunctionData(functionFragment: "checkAndEnableToken", values: [string, string]): string;
    encodeFunctionData(functionFragment: "closeCreditAccount", values: [
        string,
        boolean,
        BigNumberish,
        string,
        string,
        BigNumberish,
        boolean
    ]): string;
    encodeFunctionData(functionFragment: "collateralTokens", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "collateralTokensByMask", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "collateralTokensCount", values?: undefined): string;
    encodeFunctionData(functionFragment: "collateralTokensInternal", values?: undefined): string;
    encodeFunctionData(functionFragment: "contractToAdapter", values: [string]): string;
    encodeFunctionData(functionFragment: "creditAccounts", values: [string]): string;
    encodeFunctionData(functionFragment: "creditConfigurator", values?: undefined): string;
    encodeFunctionData(functionFragment: "creditFacade", values?: undefined): string;
    encodeFunctionData(functionFragment: "cumulativeDropAtFastCheck", values: [string]): string;
    encodeFunctionData(functionFragment: "disableToken", values: [string, string]): string;
    encodeFunctionData(functionFragment: "enabledTokensMap", values: [string]): string;
    encodeFunctionData(functionFragment: "executeOrder", values: [string, string, BytesLike]): string;
    encodeFunctionData(functionFragment: "fastCollateralCheck", values: [string, string, string, BigNumberish, BigNumberish, boolean]): string;
    encodeFunctionData(functionFragment: "fees", values?: undefined): string;
    encodeFunctionData(functionFragment: "forbiddenTokenMask", values?: undefined): string;
    encodeFunctionData(functionFragment: "fullCollateralCheck", values: [string]): string;
    encodeFunctionData(functionFragment: "getCreditAccountOrRevert", values: [string]): string;
    encodeFunctionData(functionFragment: "getCreditAccountParameters", values: [string]): string;
    encodeFunctionData(functionFragment: "getMaxIndex", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "liquidationThresholds", values: [string]): string;
    encodeFunctionData(functionFragment: "manageDebt", values: [string, BigNumberish, boolean]): string;
    encodeFunctionData(functionFragment: "openCreditAccount", values: [BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "pause", values?: undefined): string;
    encodeFunctionData(functionFragment: "paused", values?: undefined): string;
    encodeFunctionData(functionFragment: "pool", values?: undefined): string;
    encodeFunctionData(functionFragment: "poolService", values?: undefined): string;
    encodeFunctionData(functionFragment: "priceOracle", values?: undefined): string;
    encodeFunctionData(functionFragment: "safeTokenTransfer", values: [string, string, string, BigNumberish, boolean]): string;
    encodeFunctionData(functionFragment: "setConfigurator", values: [string]): string;
    encodeFunctionData(functionFragment: "setCumulativeDropAtFastCheck", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "setForbidMask", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "setLiquidationThreshold", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "setParams", values: [BigNumberish, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "tokenMasksMap", values: [string]): string;
    encodeFunctionData(functionFragment: "transferAccountOwnership", values: [string, string]): string;
    encodeFunctionData(functionFragment: "transferAssetsTo", values: [string, string, boolean, BigNumberish]): string;
    encodeFunctionData(functionFragment: "underlying", values?: undefined): string;
    encodeFunctionData(functionFragment: "universalAdapter", values?: undefined): string;
    encodeFunctionData(functionFragment: "unpause", values?: undefined): string;
    encodeFunctionData(functionFragment: "upgradeContracts", values: [string, string]): string;
    encodeFunctionData(functionFragment: "version", values?: undefined): string;
    encodeFunctionData(functionFragment: "wethAddress", values?: undefined): string;
    encodeFunctionData(functionFragment: "wethGateway", values?: undefined): string;
    decodeFunctionResult(functionFragment: "_accountFactory", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_acl", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "adapterToContract", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addCollateral", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "approveCreditAccount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "calcClosePayments", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "calcClosePaymentsPure", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "calcCreditAccountAccruedInterest", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "changeContractAllowance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "checkAndEnableToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "closeCreditAccount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "collateralTokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "collateralTokensByMask", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "collateralTokensCount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "collateralTokensInternal", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "contractToAdapter", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "creditAccounts", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "creditConfigurator", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "creditFacade", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "cumulativeDropAtFastCheck", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "disableToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "enabledTokensMap", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "executeOrder", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "fastCollateralCheck", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "fees", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "forbiddenTokenMask", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "fullCollateralCheck", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getCreditAccountOrRevert", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getCreditAccountParameters", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getMaxIndex", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "liquidationThresholds", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "manageDebt", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "openCreditAccount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pause", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pool", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "poolService", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "priceOracle", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "safeTokenTransfer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setConfigurator", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setCumulativeDropAtFastCheck", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setForbidMask", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setLiquidationThreshold", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setParams", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "tokenMasksMap", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferAccountOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferAssetsTo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "underlying", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "universalAdapter", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unpause", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "upgradeContracts", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "version", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "wethAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "wethGateway", data: BytesLike): Result;
    events: {
        "ExecuteOrder(address,address)": EventFragment;
        "NewConfigurator(address)": EventFragment;
        "Paused(address)": EventFragment;
        "Unpaused(address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "ExecuteOrder"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "NewConfigurator"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Paused"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Unpaused"): EventFragment;
}
export interface ExecuteOrderEventObject {
    borrower: string;
    target: string;
}
export declare type ExecuteOrderEvent = TypedEvent<[
    string,
    string
], ExecuteOrderEventObject>;
export declare type ExecuteOrderEventFilter = TypedEventFilter<ExecuteOrderEvent>;
export interface NewConfiguratorEventObject {
    newConfigurator: string;
}
export declare type NewConfiguratorEvent = TypedEvent<[
    string
], NewConfiguratorEventObject>;
export declare type NewConfiguratorEventFilter = TypedEventFilter<NewConfiguratorEvent>;
export interface PausedEventObject {
    account: string;
}
export declare type PausedEvent = TypedEvent<[string], PausedEventObject>;
export declare type PausedEventFilter = TypedEventFilter<PausedEvent>;
export interface UnpausedEventObject {
    account: string;
}
export declare type UnpausedEvent = TypedEvent<[string], UnpausedEventObject>;
export declare type UnpausedEventFilter = TypedEventFilter<UnpausedEvent>;
export interface CreditManagerInternal extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: CreditManagerInternalInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        _accountFactory(overrides?: CallOverrides): Promise<[string]>;
        _acl(overrides?: CallOverrides): Promise<[string]>;
        adapterToContract(arg0: string, overrides?: CallOverrides): Promise<[string]>;
        addCollateral(payer: string, creditAccount: string, token: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        addToken(token: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        approveCreditAccount(borrower: string, targetContract: string, token: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        calcClosePayments(totalValue: BigNumberish, isLiquidated: boolean, borrowedAmount: BigNumberish, borrowedAmountWithInterest: BigNumberish, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            amountToPool: BigNumber;
            remainingFunds: BigNumber;
            profit: BigNumber;
            loss: BigNumber;
        }>;
        calcClosePaymentsPure(totalValue: BigNumberish, isLiquidated: boolean, borrowedAmount: BigNumberish, borrowedAmountWithInterest: BigNumberish, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            amountToPool: BigNumber;
            remainingFunds: BigNumber;
            profit: BigNumber;
            loss: BigNumber;
        }>;
        calcCreditAccountAccruedInterest(creditAccount: string, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            borrowedAmount: BigNumber;
            borrowedAmountWithInterest: BigNumber;
        }>;
        changeContractAllowance(adapter: string, targetContract: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        checkAndEnableToken(creditAccount: string, tokenOut: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        closeCreditAccount(borrower: string, isLiquidated: boolean, totalValue: BigNumberish, payer: string, to: string, skipTokenMask: BigNumberish, convertWETH: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        collateralTokens(id: BigNumberish, overrides?: CallOverrides): Promise<[
            string,
            number
        ] & {
            token: string;
            liquidationThreshold: number;
        }>;
        collateralTokensByMask(tokenMask: BigNumberish, overrides?: CallOverrides): Promise<[
            string,
            number
        ] & {
            token: string;
            liquidationThreshold: number;
        }>;
        collateralTokensCount(overrides?: CallOverrides): Promise<[BigNumber]>;
        collateralTokensInternal(overrides?: CallOverrides): Promise<[string[]] & {
            collateralTokensAddr: string[];
        }>;
        contractToAdapter(arg0: string, overrides?: CallOverrides): Promise<[string]>;
        creditAccounts(arg0: string, overrides?: CallOverrides): Promise<[string]>;
        creditConfigurator(overrides?: CallOverrides): Promise<[string]>;
        creditFacade(overrides?: CallOverrides): Promise<[string]>;
        cumulativeDropAtFastCheck(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        disableToken(creditAccount: string, token: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        enabledTokensMap(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        executeOrder(borrower: string, targetContract: string, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        fastCollateralCheck(creditAccount: string, tokenIn: string, tokenOut: string, balanceInBefore: BigNumberish, balanceOutBefore: BigNumberish, ltNotEqual: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        fees(overrides?: CallOverrides): Promise<[
            number,
            number,
            number
        ] & {
            feeInterest: number;
            feeLiquidation: number;
            liquidationDiscount: number;
        }>;
        forbiddenTokenMask(overrides?: CallOverrides): Promise<[BigNumber]>;
        fullCollateralCheck(creditAccount: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        getCreditAccountOrRevert(borrower: string, overrides?: CallOverrides): Promise<[string] & {
            result: string;
        }>;
        getCreditAccountParameters(creditAccount: string, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            borrowedAmount: BigNumber;
            cumulativeIndexAtOpen: BigNumber;
            cumulativeIndexNow: BigNumber;
        }>;
        getMaxIndex(mask: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber] & {
            index: BigNumber;
        }>;
        liquidationThresholds(token: string, overrides?: CallOverrides): Promise<[number] & {
            lt: number;
        }>;
        manageDebt(creditAccount: string, amount: BigNumberish, increase: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        openCreditAccount(borrowedAmount: BigNumberish, onBehalfOf: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        pause(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        paused(overrides?: CallOverrides): Promise<[boolean]>;
        pool(overrides?: CallOverrides): Promise<[string]>;
        poolService(overrides?: CallOverrides): Promise<[string]>;
        priceOracle(overrides?: CallOverrides): Promise<[string]>;
        safeTokenTransfer(creditAccount: string, token: string, to: string, amount: BigNumberish, convertToETH: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setConfigurator(_creditConfigurator: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setCumulativeDropAtFastCheck(creditAccount: string, value: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setForbidMask(_forbidMask: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setLiquidationThreshold(token: string, liquidationThreshold: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setParams(_feeInterest: BigNumberish, _feeLiquidation: BigNumberish, _liquidationDiscount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        tokenMasksMap(token: string, overrides?: CallOverrides): Promise<[BigNumber] & {
            mask: BigNumber;
        }>;
        transferAccountOwnership(from: string, to: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        transferAssetsTo(creditAccount: string, to: string, convertWETH: boolean, enabledTokenMask: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        underlying(overrides?: CallOverrides): Promise<[string]>;
        universalAdapter(overrides?: CallOverrides): Promise<[string]>;
        unpause(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        upgradeContracts(_creditFacade: string, _priceOracle: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        version(overrides?: CallOverrides): Promise<[BigNumber]>;
        wethAddress(overrides?: CallOverrides): Promise<[string]>;
        wethGateway(overrides?: CallOverrides): Promise<[string]>;
    };
    _accountFactory(overrides?: CallOverrides): Promise<string>;
    _acl(overrides?: CallOverrides): Promise<string>;
    adapterToContract(arg0: string, overrides?: CallOverrides): Promise<string>;
    addCollateral(payer: string, creditAccount: string, token: string, amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    addToken(token: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    approveCreditAccount(borrower: string, targetContract: string, token: string, amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    calcClosePayments(totalValue: BigNumberish, isLiquidated: boolean, borrowedAmount: BigNumberish, borrowedAmountWithInterest: BigNumberish, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        amountToPool: BigNumber;
        remainingFunds: BigNumber;
        profit: BigNumber;
        loss: BigNumber;
    }>;
    calcClosePaymentsPure(totalValue: BigNumberish, isLiquidated: boolean, borrowedAmount: BigNumberish, borrowedAmountWithInterest: BigNumberish, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        amountToPool: BigNumber;
        remainingFunds: BigNumber;
        profit: BigNumber;
        loss: BigNumber;
    }>;
    calcCreditAccountAccruedInterest(creditAccount: string, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber
    ] & {
        borrowedAmount: BigNumber;
        borrowedAmountWithInterest: BigNumber;
    }>;
    changeContractAllowance(adapter: string, targetContract: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    checkAndEnableToken(creditAccount: string, tokenOut: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    closeCreditAccount(borrower: string, isLiquidated: boolean, totalValue: BigNumberish, payer: string, to: string, skipTokenMask: BigNumberish, convertWETH: boolean, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    collateralTokens(id: BigNumberish, overrides?: CallOverrides): Promise<[
        string,
        number
    ] & {
        token: string;
        liquidationThreshold: number;
    }>;
    collateralTokensByMask(tokenMask: BigNumberish, overrides?: CallOverrides): Promise<[
        string,
        number
    ] & {
        token: string;
        liquidationThreshold: number;
    }>;
    collateralTokensCount(overrides?: CallOverrides): Promise<BigNumber>;
    collateralTokensInternal(overrides?: CallOverrides): Promise<string[]>;
    contractToAdapter(arg0: string, overrides?: CallOverrides): Promise<string>;
    creditAccounts(arg0: string, overrides?: CallOverrides): Promise<string>;
    creditConfigurator(overrides?: CallOverrides): Promise<string>;
    creditFacade(overrides?: CallOverrides): Promise<string>;
    cumulativeDropAtFastCheck(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
    disableToken(creditAccount: string, token: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    enabledTokensMap(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
    executeOrder(borrower: string, targetContract: string, data: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    fastCollateralCheck(creditAccount: string, tokenIn: string, tokenOut: string, balanceInBefore: BigNumberish, balanceOutBefore: BigNumberish, ltNotEqual: boolean, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    fees(overrides?: CallOverrides): Promise<[
        number,
        number,
        number
    ] & {
        feeInterest: number;
        feeLiquidation: number;
        liquidationDiscount: number;
    }>;
    forbiddenTokenMask(overrides?: CallOverrides): Promise<BigNumber>;
    fullCollateralCheck(creditAccount: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    getCreditAccountOrRevert(borrower: string, overrides?: CallOverrides): Promise<string>;
    getCreditAccountParameters(creditAccount: string, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        borrowedAmount: BigNumber;
        cumulativeIndexAtOpen: BigNumber;
        cumulativeIndexNow: BigNumber;
    }>;
    getMaxIndex(mask: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    liquidationThresholds(token: string, overrides?: CallOverrides): Promise<number>;
    manageDebt(creditAccount: string, amount: BigNumberish, increase: boolean, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    openCreditAccount(borrowedAmount: BigNumberish, onBehalfOf: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    pause(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    paused(overrides?: CallOverrides): Promise<boolean>;
    pool(overrides?: CallOverrides): Promise<string>;
    poolService(overrides?: CallOverrides): Promise<string>;
    priceOracle(overrides?: CallOverrides): Promise<string>;
    safeTokenTransfer(creditAccount: string, token: string, to: string, amount: BigNumberish, convertToETH: boolean, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setConfigurator(_creditConfigurator: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setCumulativeDropAtFastCheck(creditAccount: string, value: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setForbidMask(_forbidMask: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setLiquidationThreshold(token: string, liquidationThreshold: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setParams(_feeInterest: BigNumberish, _feeLiquidation: BigNumberish, _liquidationDiscount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    tokenMasksMap(token: string, overrides?: CallOverrides): Promise<BigNumber>;
    transferAccountOwnership(from: string, to: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    transferAssetsTo(creditAccount: string, to: string, convertWETH: boolean, enabledTokenMask: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    underlying(overrides?: CallOverrides): Promise<string>;
    universalAdapter(overrides?: CallOverrides): Promise<string>;
    unpause(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    upgradeContracts(_creditFacade: string, _priceOracle: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    version(overrides?: CallOverrides): Promise<BigNumber>;
    wethAddress(overrides?: CallOverrides): Promise<string>;
    wethGateway(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        _accountFactory(overrides?: CallOverrides): Promise<string>;
        _acl(overrides?: CallOverrides): Promise<string>;
        adapterToContract(arg0: string, overrides?: CallOverrides): Promise<string>;
        addCollateral(payer: string, creditAccount: string, token: string, amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        addToken(token: string, overrides?: CallOverrides): Promise<void>;
        approveCreditAccount(borrower: string, targetContract: string, token: string, amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        calcClosePayments(totalValue: BigNumberish, isLiquidated: boolean, borrowedAmount: BigNumberish, borrowedAmountWithInterest: BigNumberish, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            amountToPool: BigNumber;
            remainingFunds: BigNumber;
            profit: BigNumber;
            loss: BigNumber;
        }>;
        calcClosePaymentsPure(totalValue: BigNumberish, isLiquidated: boolean, borrowedAmount: BigNumberish, borrowedAmountWithInterest: BigNumberish, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            amountToPool: BigNumber;
            remainingFunds: BigNumber;
            profit: BigNumber;
            loss: BigNumber;
        }>;
        calcCreditAccountAccruedInterest(creditAccount: string, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            borrowedAmount: BigNumber;
            borrowedAmountWithInterest: BigNumber;
        }>;
        changeContractAllowance(adapter: string, targetContract: string, overrides?: CallOverrides): Promise<void>;
        checkAndEnableToken(creditAccount: string, tokenOut: string, overrides?: CallOverrides): Promise<void>;
        closeCreditAccount(borrower: string, isLiquidated: boolean, totalValue: BigNumberish, payer: string, to: string, skipTokenMask: BigNumberish, convertWETH: boolean, overrides?: CallOverrides): Promise<BigNumber>;
        collateralTokens(id: BigNumberish, overrides?: CallOverrides): Promise<[
            string,
            number
        ] & {
            token: string;
            liquidationThreshold: number;
        }>;
        collateralTokensByMask(tokenMask: BigNumberish, overrides?: CallOverrides): Promise<[
            string,
            number
        ] & {
            token: string;
            liquidationThreshold: number;
        }>;
        collateralTokensCount(overrides?: CallOverrides): Promise<BigNumber>;
        collateralTokensInternal(overrides?: CallOverrides): Promise<string[]>;
        contractToAdapter(arg0: string, overrides?: CallOverrides): Promise<string>;
        creditAccounts(arg0: string, overrides?: CallOverrides): Promise<string>;
        creditConfigurator(overrides?: CallOverrides): Promise<string>;
        creditFacade(overrides?: CallOverrides): Promise<string>;
        cumulativeDropAtFastCheck(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        disableToken(creditAccount: string, token: string, overrides?: CallOverrides): Promise<void>;
        enabledTokensMap(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        executeOrder(borrower: string, targetContract: string, data: BytesLike, overrides?: CallOverrides): Promise<string>;
        fastCollateralCheck(creditAccount: string, tokenIn: string, tokenOut: string, balanceInBefore: BigNumberish, balanceOutBefore: BigNumberish, ltNotEqual: boolean, overrides?: CallOverrides): Promise<void>;
        fees(overrides?: CallOverrides): Promise<[
            number,
            number,
            number
        ] & {
            feeInterest: number;
            feeLiquidation: number;
            liquidationDiscount: number;
        }>;
        forbiddenTokenMask(overrides?: CallOverrides): Promise<BigNumber>;
        fullCollateralCheck(creditAccount: string, overrides?: CallOverrides): Promise<void>;
        getCreditAccountOrRevert(borrower: string, overrides?: CallOverrides): Promise<string>;
        getCreditAccountParameters(creditAccount: string, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            borrowedAmount: BigNumber;
            cumulativeIndexAtOpen: BigNumber;
            cumulativeIndexNow: BigNumber;
        }>;
        getMaxIndex(mask: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        liquidationThresholds(token: string, overrides?: CallOverrides): Promise<number>;
        manageDebt(creditAccount: string, amount: BigNumberish, increase: boolean, overrides?: CallOverrides): Promise<BigNumber>;
        openCreditAccount(borrowedAmount: BigNumberish, onBehalfOf: string, overrides?: CallOverrides): Promise<string>;
        pause(overrides?: CallOverrides): Promise<void>;
        paused(overrides?: CallOverrides): Promise<boolean>;
        pool(overrides?: CallOverrides): Promise<string>;
        poolService(overrides?: CallOverrides): Promise<string>;
        priceOracle(overrides?: CallOverrides): Promise<string>;
        safeTokenTransfer(creditAccount: string, token: string, to: string, amount: BigNumberish, convertToETH: boolean, overrides?: CallOverrides): Promise<void>;
        setConfigurator(_creditConfigurator: string, overrides?: CallOverrides): Promise<void>;
        setCumulativeDropAtFastCheck(creditAccount: string, value: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setForbidMask(_forbidMask: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setLiquidationThreshold(token: string, liquidationThreshold: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setParams(_feeInterest: BigNumberish, _feeLiquidation: BigNumberish, _liquidationDiscount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        tokenMasksMap(token: string, overrides?: CallOverrides): Promise<BigNumber>;
        transferAccountOwnership(from: string, to: string, overrides?: CallOverrides): Promise<void>;
        transferAssetsTo(creditAccount: string, to: string, convertWETH: boolean, enabledTokenMask: BigNumberish, overrides?: CallOverrides): Promise<void>;
        underlying(overrides?: CallOverrides): Promise<string>;
        universalAdapter(overrides?: CallOverrides): Promise<string>;
        unpause(overrides?: CallOverrides): Promise<void>;
        upgradeContracts(_creditFacade: string, _priceOracle: string, overrides?: CallOverrides): Promise<void>;
        version(overrides?: CallOverrides): Promise<BigNumber>;
        wethAddress(overrides?: CallOverrides): Promise<string>;
        wethGateway(overrides?: CallOverrides): Promise<string>;
    };
    filters: {
        "ExecuteOrder(address,address)"(borrower?: string | null, target?: string | null): ExecuteOrderEventFilter;
        ExecuteOrder(borrower?: string | null, target?: string | null): ExecuteOrderEventFilter;
        "NewConfigurator(address)"(newConfigurator?: string | null): NewConfiguratorEventFilter;
        NewConfigurator(newConfigurator?: string | null): NewConfiguratorEventFilter;
        "Paused(address)"(account?: null): PausedEventFilter;
        Paused(account?: null): PausedEventFilter;
        "Unpaused(address)"(account?: null): UnpausedEventFilter;
        Unpaused(account?: null): UnpausedEventFilter;
    };
    estimateGas: {
        _accountFactory(overrides?: CallOverrides): Promise<BigNumber>;
        _acl(overrides?: CallOverrides): Promise<BigNumber>;
        adapterToContract(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        addCollateral(payer: string, creditAccount: string, token: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        addToken(token: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        approveCreditAccount(borrower: string, targetContract: string, token: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        calcClosePayments(totalValue: BigNumberish, isLiquidated: boolean, borrowedAmount: BigNumberish, borrowedAmountWithInterest: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        calcClosePaymentsPure(totalValue: BigNumberish, isLiquidated: boolean, borrowedAmount: BigNumberish, borrowedAmountWithInterest: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        calcCreditAccountAccruedInterest(creditAccount: string, overrides?: CallOverrides): Promise<BigNumber>;
        changeContractAllowance(adapter: string, targetContract: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        checkAndEnableToken(creditAccount: string, tokenOut: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        closeCreditAccount(borrower: string, isLiquidated: boolean, totalValue: BigNumberish, payer: string, to: string, skipTokenMask: BigNumberish, convertWETH: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        collateralTokens(id: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        collateralTokensByMask(tokenMask: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        collateralTokensCount(overrides?: CallOverrides): Promise<BigNumber>;
        collateralTokensInternal(overrides?: CallOverrides): Promise<BigNumber>;
        contractToAdapter(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        creditAccounts(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        creditConfigurator(overrides?: CallOverrides): Promise<BigNumber>;
        creditFacade(overrides?: CallOverrides): Promise<BigNumber>;
        cumulativeDropAtFastCheck(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        disableToken(creditAccount: string, token: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        enabledTokensMap(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        executeOrder(borrower: string, targetContract: string, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        fastCollateralCheck(creditAccount: string, tokenIn: string, tokenOut: string, balanceInBefore: BigNumberish, balanceOutBefore: BigNumberish, ltNotEqual: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        fees(overrides?: CallOverrides): Promise<BigNumber>;
        forbiddenTokenMask(overrides?: CallOverrides): Promise<BigNumber>;
        fullCollateralCheck(creditAccount: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        getCreditAccountOrRevert(borrower: string, overrides?: CallOverrides): Promise<BigNumber>;
        getCreditAccountParameters(creditAccount: string, overrides?: CallOverrides): Promise<BigNumber>;
        getMaxIndex(mask: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        liquidationThresholds(token: string, overrides?: CallOverrides): Promise<BigNumber>;
        manageDebt(creditAccount: string, amount: BigNumberish, increase: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        openCreditAccount(borrowedAmount: BigNumberish, onBehalfOf: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        pause(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        paused(overrides?: CallOverrides): Promise<BigNumber>;
        pool(overrides?: CallOverrides): Promise<BigNumber>;
        poolService(overrides?: CallOverrides): Promise<BigNumber>;
        priceOracle(overrides?: CallOverrides): Promise<BigNumber>;
        safeTokenTransfer(creditAccount: string, token: string, to: string, amount: BigNumberish, convertToETH: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setConfigurator(_creditConfigurator: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setCumulativeDropAtFastCheck(creditAccount: string, value: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setForbidMask(_forbidMask: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setLiquidationThreshold(token: string, liquidationThreshold: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setParams(_feeInterest: BigNumberish, _feeLiquidation: BigNumberish, _liquidationDiscount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        tokenMasksMap(token: string, overrides?: CallOverrides): Promise<BigNumber>;
        transferAccountOwnership(from: string, to: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        transferAssetsTo(creditAccount: string, to: string, convertWETH: boolean, enabledTokenMask: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        underlying(overrides?: CallOverrides): Promise<BigNumber>;
        universalAdapter(overrides?: CallOverrides): Promise<BigNumber>;
        unpause(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        upgradeContracts(_creditFacade: string, _priceOracle: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        version(overrides?: CallOverrides): Promise<BigNumber>;
        wethAddress(overrides?: CallOverrides): Promise<BigNumber>;
        wethGateway(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        _accountFactory(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        _acl(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        adapterToContract(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        addCollateral(payer: string, creditAccount: string, token: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        addToken(token: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        approveCreditAccount(borrower: string, targetContract: string, token: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        calcClosePayments(totalValue: BigNumberish, isLiquidated: boolean, borrowedAmount: BigNumberish, borrowedAmountWithInterest: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        calcClosePaymentsPure(totalValue: BigNumberish, isLiquidated: boolean, borrowedAmount: BigNumberish, borrowedAmountWithInterest: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        calcCreditAccountAccruedInterest(creditAccount: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        changeContractAllowance(adapter: string, targetContract: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        checkAndEnableToken(creditAccount: string, tokenOut: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        closeCreditAccount(borrower: string, isLiquidated: boolean, totalValue: BigNumberish, payer: string, to: string, skipTokenMask: BigNumberish, convertWETH: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        collateralTokens(id: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        collateralTokensByMask(tokenMask: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        collateralTokensCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        collateralTokensInternal(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        contractToAdapter(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        creditAccounts(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        creditConfigurator(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        creditFacade(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        cumulativeDropAtFastCheck(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        disableToken(creditAccount: string, token: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        enabledTokensMap(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        executeOrder(borrower: string, targetContract: string, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        fastCollateralCheck(creditAccount: string, tokenIn: string, tokenOut: string, balanceInBefore: BigNumberish, balanceOutBefore: BigNumberish, ltNotEqual: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        fees(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        forbiddenTokenMask(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        fullCollateralCheck(creditAccount: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        getCreditAccountOrRevert(borrower: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getCreditAccountParameters(creditAccount: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getMaxIndex(mask: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        liquidationThresholds(token: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        manageDebt(creditAccount: string, amount: BigNumberish, increase: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        openCreditAccount(borrowedAmount: BigNumberish, onBehalfOf: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        pause(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        paused(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pool(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        poolService(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        priceOracle(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        safeTokenTransfer(creditAccount: string, token: string, to: string, amount: BigNumberish, convertToETH: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setConfigurator(_creditConfigurator: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setCumulativeDropAtFastCheck(creditAccount: string, value: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setForbidMask(_forbidMask: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setLiquidationThreshold(token: string, liquidationThreshold: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setParams(_feeInterest: BigNumberish, _feeLiquidation: BigNumberish, _liquidationDiscount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        tokenMasksMap(token: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transferAccountOwnership(from: string, to: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        transferAssetsTo(creditAccount: string, to: string, convertWETH: boolean, enabledTokenMask: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        underlying(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        universalAdapter(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        unpause(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        upgradeContracts(_creditFacade: string, _priceOracle: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        version(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        wethAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        wethGateway(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
