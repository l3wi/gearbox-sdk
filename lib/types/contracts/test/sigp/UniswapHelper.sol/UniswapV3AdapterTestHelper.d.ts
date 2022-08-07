import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../../../common";
export interface UniswapV3AdapterTestHelperInterface extends utils.Interface {
    functions: {
        "decodeFirstPool(bytes)": FunctionFragment;
        "encodePathMalicious(address,uint24,address,address)": FunctionFragment;
        "encodePathSingle(address,uint24,address)": FunctionFragment;
        "extractTokens(bytes)": FunctionFragment;
        "extractTokensNew(bytes)": FunctionFragment;
        "hasMultiplePools(bytes)": FunctionFragment;
        "skipToken(bytes)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "decodeFirstPool" | "encodePathMalicious" | "encodePathSingle" | "extractTokens" | "extractTokensNew" | "hasMultiplePools" | "skipToken"): FunctionFragment;
    encodeFunctionData(functionFragment: "decodeFirstPool", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "encodePathMalicious", values: [string, BigNumberish, string, string]): string;
    encodeFunctionData(functionFragment: "encodePathSingle", values: [string, BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "extractTokens", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "extractTokensNew", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "hasMultiplePools", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "skipToken", values: [BytesLike]): string;
    decodeFunctionResult(functionFragment: "decodeFirstPool", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "encodePathMalicious", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "encodePathSingle", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "extractTokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "extractTokensNew", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "hasMultiplePools", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "skipToken", data: BytesLike): Result;
    events: {};
}
export interface UniswapV3AdapterTestHelper extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: UniswapV3AdapterTestHelperInterface;
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
        decodeFirstPool(v3path: BytesLike, overrides?: CallOverrides): Promise<[string, string, number]>;
        encodePathMalicious(token1: string, fee: BigNumberish, token2: string, token3: string, overrides?: CallOverrides): Promise<[string]>;
        encodePathSingle(token1: string, fee: BigNumberish, token2: string, overrides?: CallOverrides): Promise<[string]>;
        extractTokens(path: BytesLike, overrides?: CallOverrides): Promise<[string, string] & {
            tokenA: string;
            tokenB: string;
        }>;
        extractTokensNew(path: BytesLike, overrides?: CallOverrides): Promise<[string, string] & {
            tokenA: string;
            tokenB: string;
        }>;
        hasMultiplePools(path: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
        skipToken(v3path: BytesLike, overrides?: CallOverrides): Promise<[string]>;
    };
    decodeFirstPool(v3path: BytesLike, overrides?: CallOverrides): Promise<[string, string, number]>;
    encodePathMalicious(token1: string, fee: BigNumberish, token2: string, token3: string, overrides?: CallOverrides): Promise<string>;
    encodePathSingle(token1: string, fee: BigNumberish, token2: string, overrides?: CallOverrides): Promise<string>;
    extractTokens(path: BytesLike, overrides?: CallOverrides): Promise<[string, string] & {
        tokenA: string;
        tokenB: string;
    }>;
    extractTokensNew(path: BytesLike, overrides?: CallOverrides): Promise<[string, string] & {
        tokenA: string;
        tokenB: string;
    }>;
    hasMultiplePools(path: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    skipToken(v3path: BytesLike, overrides?: CallOverrides): Promise<string>;
    callStatic: {
        decodeFirstPool(v3path: BytesLike, overrides?: CallOverrides): Promise<[string, string, number]>;
        encodePathMalicious(token1: string, fee: BigNumberish, token2: string, token3: string, overrides?: CallOverrides): Promise<string>;
        encodePathSingle(token1: string, fee: BigNumberish, token2: string, overrides?: CallOverrides): Promise<string>;
        extractTokens(path: BytesLike, overrides?: CallOverrides): Promise<[string, string] & {
            tokenA: string;
            tokenB: string;
        }>;
        extractTokensNew(path: BytesLike, overrides?: CallOverrides): Promise<[string, string] & {
            tokenA: string;
            tokenB: string;
        }>;
        hasMultiplePools(path: BytesLike, overrides?: CallOverrides): Promise<boolean>;
        skipToken(v3path: BytesLike, overrides?: CallOverrides): Promise<string>;
    };
    filters: {};
    estimateGas: {
        decodeFirstPool(v3path: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        encodePathMalicious(token1: string, fee: BigNumberish, token2: string, token3: string, overrides?: CallOverrides): Promise<BigNumber>;
        encodePathSingle(token1: string, fee: BigNumberish, token2: string, overrides?: CallOverrides): Promise<BigNumber>;
        extractTokens(path: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        extractTokensNew(path: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        hasMultiplePools(path: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        skipToken(v3path: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        decodeFirstPool(v3path: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        encodePathMalicious(token1: string, fee: BigNumberish, token2: string, token3: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        encodePathSingle(token1: string, fee: BigNumberish, token2: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        extractTokens(path: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        extractTokensNew(path: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        hasMultiplePools(path: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        skipToken(v3path: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
