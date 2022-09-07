/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "../../../common";

export type SwapTaskStruct = {
  swapOperation: BigNumberish;
  creditAccount: string;
  tokenIn: string;
  tokenOut: string;
  connectors: string[];
  amount: BigNumberish;
  slippage: BigNumberish;
  externalSlippage: boolean;
};

export type SwapTaskStructOutput = [
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

export type MultiCallStruct = { target: string; callData: BytesLike };

export type MultiCallStructOutput = [string, string] & {
  target: string;
  callData: string;
};

export type SwapQuoteStruct = {
  multiCall: MultiCallStruct;
  amount: BigNumberish;
  found: boolean;
  gasUsage: BigNumberish;
};

export type SwapQuoteStructOutput = [
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

export interface ISwapperInterface extends utils.Interface {
  functions: {
    "getBestConnectorSwap((uint8,address,address,address,address[],uint256,uint256,bool),address)": FunctionFragment;
    "getBestDirectPairSwap((uint8,address,address,address,address[],uint256,uint256,bool),address)": FunctionFragment;
    "getComponentId()": FunctionFragment;
    "version()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "getBestConnectorSwap"
      | "getBestDirectPairSwap"
      | "getComponentId"
      | "version"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "getBestConnectorSwap",
    values: [SwapTaskStruct, string]
  ): string;
  encodeFunctionData(
    functionFragment: "getBestDirectPairSwap",
    values: [SwapTaskStruct, string]
  ): string;
  encodeFunctionData(
    functionFragment: "getComponentId",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "version", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "getBestConnectorSwap",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getBestDirectPairSwap",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getComponentId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "version", data: BytesLike): Result;

  events: {};
}

export interface ISwapper extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ISwapperInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    getBestConnectorSwap(
      swapTask: SwapTaskStruct,
      adapter: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getBestDirectPairSwap(
      swapTask: SwapTaskStruct,
      adapter: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getComponentId(overrides?: CallOverrides): Promise<[number]>;

    version(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  getBestConnectorSwap(
    swapTask: SwapTaskStruct,
    adapter: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getBestDirectPairSwap(
    swapTask: SwapTaskStruct,
    adapter: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getComponentId(overrides?: CallOverrides): Promise<number>;

  version(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    getBestConnectorSwap(
      swapTask: SwapTaskStruct,
      adapter: string,
      overrides?: CallOverrides
    ): Promise<SwapQuoteStructOutput>;

    getBestDirectPairSwap(
      swapTask: SwapTaskStruct,
      adapter: string,
      overrides?: CallOverrides
    ): Promise<SwapQuoteStructOutput>;

    getComponentId(overrides?: CallOverrides): Promise<number>;

    version(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    getBestConnectorSwap(
      swapTask: SwapTaskStruct,
      adapter: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getBestDirectPairSwap(
      swapTask: SwapTaskStruct,
      adapter: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getComponentId(overrides?: CallOverrides): Promise<BigNumber>;

    version(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    getBestConnectorSwap(
      swapTask: SwapTaskStruct,
      adapter: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getBestDirectPairSwap(
      swapTask: SwapTaskStruct,
      adapter: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getComponentId(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    version(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
