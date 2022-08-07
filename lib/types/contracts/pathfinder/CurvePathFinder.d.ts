import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../common";
export declare type SwapTaskStruct = {
    swapOperation: BigNumberish;
    creditAccount: string;
    tokenIn: string;
    tokenOut: string;
    connectors: string[];
    amount: BigNumberish;
    slippage: BigNumberish;
    externalSlippage: boolean;
};
export declare type SwapTaskStructOutput = [
    number,
    string,
    string,
    string,
    string[],
    BigNumber,
    BigNumber,
    boolean
] & {
    swapOperation: number;
    creditAccount: string;
    tokenIn: string;
    tokenOut: string;
    connectors: string[];
    amount: BigNumber;
    slippage: BigNumber;
    externalSlippage: boolean;
};
export declare type MultiCallStruct = {
    target: string;
    callData: BytesLike;
};
export declare type MultiCallStructOutput = [string, string] & {
    target: string;
    callData: string;
};
export declare type SwapQuoteStruct = {
    multiCall: MultiCallStruct;
    amount: BigNumberish;
    found: boolean;
    gasUsage: BigNumberish;
};
export declare type SwapQuoteStructOutput = [
    MultiCallStructOutput,
    BigNumber,
    boolean,
    BigNumber
] & {
    multiCall: MultiCallStructOutput;
    amount: BigNumber;
    found: boolean;
    gasUsage: BigNumber;
};
export interface CurvePathFinderInterface extends utils.Interface {
    functions: {
        "addPool(address)": FunctionFragment;
        "gasUsage(address,address,address)": FunctionFragment;
        "getBestConnectorSwap((uint8,address,address,address,address[],uint256,uint256,bool),address)": FunctionFragment;
        "getBestDirectPairSwap((uint8,address,address,address,address[],uint256,uint256,bool),address)": FunctionFragment;
        "owner()": FunctionFragment;
        "renounceOwnership()": FunctionFragment;
        "setGasUsage(address,address,address,uint256)": FunctionFragment;
        "tokenToCoin(address,address)": FunctionFragment;
        "tokenToUnderlyingCoin(address,address)": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "addPool" | "gasUsage" | "getBestConnectorSwap" | "getBestDirectPairSwap" | "owner" | "renounceOwnership" | "setGasUsage" | "tokenToCoin" | "tokenToUnderlyingCoin" | "transferOwnership"): FunctionFragment;
    encodeFunctionData(functionFragment: "addPool", values: [string]): string;
    encodeFunctionData(functionFragment: "gasUsage", values: [string, string, string]): string;
    encodeFunctionData(functionFragment: "getBestConnectorSwap", values: [SwapTaskStruct, string]): string;
    encodeFunctionData(functionFragment: "getBestDirectPairSwap", values: [SwapTaskStruct, string]): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "setGasUsage", values: [string, string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "tokenToCoin", values: [string, string]): string;
    encodeFunctionData(functionFragment: "tokenToUnderlyingCoin", values: [string, string]): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [string]): string;
    decodeFunctionResult(functionFragment: "addPool", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "gasUsage", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getBestConnectorSwap", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getBestDirectPairSwap", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setGasUsage", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "tokenToCoin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "tokenToUnderlyingCoin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    events: {
        "OwnershipTransferred(address,address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}
export interface OwnershipTransferredEventObject {
    previousOwner: string;
    newOwner: string;
}
export declare type OwnershipTransferredEvent = TypedEvent<[
    string,
    string
], OwnershipTransferredEventObject>;
export declare type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;
export interface CurvePathFinder extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: CurvePathFinderInterface;
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
        addPool(curvePool: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        gasUsage(arg0: string, arg1: string, arg2: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        getBestConnectorSwap(swapTask: SwapTaskStruct, adapter: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        getBestDirectPairSwap(swapTask: SwapTaskStruct, adapter: string, overrides?: CallOverrides): Promise<[SwapQuoteStructOutput] & {
            quote: SwapQuoteStructOutput;
        }>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        renounceOwnership(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setGasUsage(pool: string, token0: string, token1: string, usage: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        tokenToCoin(arg0: string, arg1: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        tokenToUnderlyingCoin(arg0: string, arg1: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    addPool(curvePool: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    gasUsage(arg0: string, arg1: string, arg2: string, overrides?: CallOverrides): Promise<BigNumber>;
    getBestConnectorSwap(swapTask: SwapTaskStruct, adapter: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    getBestDirectPairSwap(swapTask: SwapTaskStruct, adapter: string, overrides?: CallOverrides): Promise<SwapQuoteStructOutput>;
    owner(overrides?: CallOverrides): Promise<string>;
    renounceOwnership(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setGasUsage(pool: string, token0: string, token1: string, usage: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    tokenToCoin(arg0: string, arg1: string, overrides?: CallOverrides): Promise<BigNumber>;
    tokenToUnderlyingCoin(arg0: string, arg1: string, overrides?: CallOverrides): Promise<BigNumber>;
    transferOwnership(newOwner: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        addPool(curvePool: string, overrides?: CallOverrides): Promise<void>;
        gasUsage(arg0: string, arg1: string, arg2: string, overrides?: CallOverrides): Promise<BigNumber>;
        getBestConnectorSwap(swapTask: SwapTaskStruct, adapter: string, overrides?: CallOverrides): Promise<SwapQuoteStructOutput>;
        getBestDirectPairSwap(swapTask: SwapTaskStruct, adapter: string, overrides?: CallOverrides): Promise<SwapQuoteStructOutput>;
        owner(overrides?: CallOverrides): Promise<string>;
        renounceOwnership(overrides?: CallOverrides): Promise<void>;
        setGasUsage(pool: string, token0: string, token1: string, usage: BigNumberish, overrides?: CallOverrides): Promise<void>;
        tokenToCoin(arg0: string, arg1: string, overrides?: CallOverrides): Promise<BigNumber>;
        tokenToUnderlyingCoin(arg0: string, arg1: string, overrides?: CallOverrides): Promise<BigNumber>;
        transferOwnership(newOwner: string, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "OwnershipTransferred(address,address)"(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;
        OwnershipTransferred(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;
    };
    estimateGas: {
        addPool(curvePool: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        gasUsage(arg0: string, arg1: string, arg2: string, overrides?: CallOverrides): Promise<BigNumber>;
        getBestConnectorSwap(swapTask: SwapTaskStruct, adapter: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        getBestDirectPairSwap(swapTask: SwapTaskStruct, adapter: string, overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        renounceOwnership(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setGasUsage(pool: string, token0: string, token1: string, usage: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        tokenToCoin(arg0: string, arg1: string, overrides?: CallOverrides): Promise<BigNumber>;
        tokenToUnderlyingCoin(arg0: string, arg1: string, overrides?: CallOverrides): Promise<BigNumber>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        addPool(curvePool: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        gasUsage(arg0: string, arg1: string, arg2: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getBestConnectorSwap(swapTask: SwapTaskStruct, adapter: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        getBestDirectPairSwap(swapTask: SwapTaskStruct, adapter: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setGasUsage(pool: string, token0: string, token1: string, usage: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        tokenToCoin(arg0: string, arg1: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        tokenToUnderlyingCoin(arg0: string, arg1: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
