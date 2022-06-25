import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../../../common";
export interface CreditManagerMockForPoolTestInterface extends utils.Interface {
    functions: {
        "changePoolService(address)": FunctionFragment;
        "creditAccount()": FunctionFragment;
        "getCreditAccountOrRevert(address)": FunctionFragment;
        "lendCreditAccount(uint256,address)": FunctionFragment;
        "poolService()": FunctionFragment;
        "repayCreditAccount(uint256,uint256,uint256)": FunctionFragment;
        "underlying()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "changePoolService" | "creditAccount" | "getCreditAccountOrRevert" | "lendCreditAccount" | "poolService" | "repayCreditAccount" | "underlying"): FunctionFragment;
    encodeFunctionData(functionFragment: "changePoolService", values: [string]): string;
    encodeFunctionData(functionFragment: "creditAccount", values?: undefined): string;
    encodeFunctionData(functionFragment: "getCreditAccountOrRevert", values: [string]): string;
    encodeFunctionData(functionFragment: "lendCreditAccount", values: [BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "poolService", values?: undefined): string;
    encodeFunctionData(functionFragment: "repayCreditAccount", values: [BigNumberish, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "underlying", values?: undefined): string;
    decodeFunctionResult(functionFragment: "changePoolService", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "creditAccount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getCreditAccountOrRevert", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lendCreditAccount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "poolService", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "repayCreditAccount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "underlying", data: BytesLike): Result;
    events: {};
}
export interface CreditManagerMockForPoolTest extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: CreditManagerMockForPoolTestInterface;
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
        changePoolService(newPool: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        creditAccount(overrides?: CallOverrides): Promise<[string]>;
        getCreditAccountOrRevert(arg0: string, overrides?: CallOverrides): Promise<[string] & {
            result: string;
        }>;
        lendCreditAccount(borrowedAmount: BigNumberish, ca: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        poolService(overrides?: CallOverrides): Promise<[string]>;
        repayCreditAccount(borrowedAmount: BigNumberish, profit: BigNumberish, loss: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        underlying(overrides?: CallOverrides): Promise<[string]>;
    };
    changePoolService(newPool: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    creditAccount(overrides?: CallOverrides): Promise<string>;
    getCreditAccountOrRevert(arg0: string, overrides?: CallOverrides): Promise<string>;
    lendCreditAccount(borrowedAmount: BigNumberish, ca: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    poolService(overrides?: CallOverrides): Promise<string>;
    repayCreditAccount(borrowedAmount: BigNumberish, profit: BigNumberish, loss: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    underlying(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        changePoolService(newPool: string, overrides?: CallOverrides): Promise<void>;
        creditAccount(overrides?: CallOverrides): Promise<string>;
        getCreditAccountOrRevert(arg0: string, overrides?: CallOverrides): Promise<string>;
        lendCreditAccount(borrowedAmount: BigNumberish, ca: string, overrides?: CallOverrides): Promise<void>;
        poolService(overrides?: CallOverrides): Promise<string>;
        repayCreditAccount(borrowedAmount: BigNumberish, profit: BigNumberish, loss: BigNumberish, overrides?: CallOverrides): Promise<void>;
        underlying(overrides?: CallOverrides): Promise<string>;
    };
    filters: {};
    estimateGas: {
        changePoolService(newPool: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        creditAccount(overrides?: CallOverrides): Promise<BigNumber>;
        getCreditAccountOrRevert(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        lendCreditAccount(borrowedAmount: BigNumberish, ca: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        poolService(overrides?: CallOverrides): Promise<BigNumber>;
        repayCreditAccount(borrowedAmount: BigNumberish, profit: BigNumberish, loss: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        underlying(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        changePoolService(newPool: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        creditAccount(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getCreditAccountOrRevert(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        lendCreditAccount(borrowedAmount: BigNumberish, ca: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        poolService(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        repayCreditAccount(borrowedAmount: BigNumberish, profit: BigNumberish, loss: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        underlying(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
