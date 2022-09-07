/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
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
} from "../../../../common";

export type BalanceStruct = { token: string; balance: BigNumberish };

export type BalanceStructOutput = [string, BigNumber] & {
  token: string;
  balance: BigNumber;
};

export type TokenAdaptersStruct = {
  token: string;
  depositAdapter: string;
  withdrawAdapter: string;
};

export type TokenAdaptersStructOutput = [string, string, string] & {
  token: string;
  depositAdapter: string;
  withdrawAdapter: string;
};

export type MultiCallStruct = { target: string; callData: BytesLike };

export type MultiCallStructOutput = [string, string] & {
  target: string;
  callData: string;
};

export type StrategyPathTaskStruct = {
  creditAccount: string;
  balances: BalanceStruct[];
  target: string;
  connectors: string[];
  adapters: string[];
  slippagePerStep: BigNumberish;
  targetType: BigNumberish;
  foundAdapters: TokenAdaptersStruct[];
  gasPriceTargetRAY: BigNumberish;
  gasUsage: BigNumberish;
  slippageMultiplier: BigNumberish;
  initTargetBalance: BigNumberish;
  calls: MultiCallStruct[];
};

export type StrategyPathTaskStructOutput = [
  string,
  BalanceStructOutput[],
  string,
  string[],
  string[],
  BigNumber,
  number,
  TokenAdaptersStructOutput[],
  BigNumber,
  BigNumber,
  BigNumber,
  BigNumber,
  MultiCallStructOutput[]
] & {
  creditAccount: string;
  balances: BalanceStructOutput[];
  target: string;
  connectors: string[];
  adapters: string[];
  slippagePerStep: BigNumber;
  targetType: number;
  foundAdapters: TokenAdaptersStructOutput[];
  gasPriceTargetRAY: BigNumber;
  gasUsage: BigNumber;
  slippageMultiplier: BigNumber;
  initTargetBalance: BigNumber;
  calls: MultiCallStructOutput[];
};

export interface IDepositorInterface extends utils.Interface {
  functions: {
    "deposit(uint256,address,(address,(address,uint256)[],address,address[],address[],uint256,uint8,(address,address,address)[],uint256,uint256,uint256,uint256,(address,bytes)[]))": FunctionFragment;
    "depositAll(address,(address,(address,uint256)[],address,address[],address[],uint256,uint8,(address,address,address)[],uint256,uint256,uint256,uint256,(address,bytes)[]))": FunctionFragment;
    "getComponentId()": FunctionFragment;
    "getUnderlying(address,(address,(address,uint256)[],address,address[],address[],uint256,uint8,(address,address,address)[],uint256,uint256,uint256,uint256,(address,bytes)[]))": FunctionFragment;
    "version()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "deposit"
      | "depositAll"
      | "getComponentId"
      | "getUnderlying"
      | "version"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "deposit",
    values: [BigNumberish, string, StrategyPathTaskStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "depositAll",
    values: [string, StrategyPathTaskStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "getComponentId",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getUnderlying",
    values: [string, StrategyPathTaskStruct]
  ): string;
  encodeFunctionData(functionFragment: "version", values?: undefined): string;

  decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "depositAll", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getComponentId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getUnderlying",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "version", data: BytesLike): Result;

  events: {};
}

export interface IDepositor extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IDepositorInterface;

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
    deposit(
      amountIn: BigNumberish,
      tokenOut: string,
      task: StrategyPathTaskStruct,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, StrategyPathTaskStructOutput] & { amountOut: BigNumber }
    >;

    depositAll(
      tokenOut: string,
      task: StrategyPathTaskStruct,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, StrategyPathTaskStructOutput] & { amountOut: BigNumber }
    >;

    getComponentId(overrides?: CallOverrides): Promise<[number]>;

    getUnderlying(
      tokenOut: string,
      task: StrategyPathTaskStruct,
      overrides?: CallOverrides
    ): Promise<[string, StrategyPathTaskStructOutput] & { tokenIn: string }>;

    version(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  deposit(
    amountIn: BigNumberish,
    tokenOut: string,
    task: StrategyPathTaskStruct,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, StrategyPathTaskStructOutput] & { amountOut: BigNumber }
  >;

  depositAll(
    tokenOut: string,
    task: StrategyPathTaskStruct,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, StrategyPathTaskStructOutput] & { amountOut: BigNumber }
  >;

  getComponentId(overrides?: CallOverrides): Promise<number>;

  getUnderlying(
    tokenOut: string,
    task: StrategyPathTaskStruct,
    overrides?: CallOverrides
  ): Promise<[string, StrategyPathTaskStructOutput] & { tokenIn: string }>;

  version(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    deposit(
      amountIn: BigNumberish,
      tokenOut: string,
      task: StrategyPathTaskStruct,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, StrategyPathTaskStructOutput] & { amountOut: BigNumber }
    >;

    depositAll(
      tokenOut: string,
      task: StrategyPathTaskStruct,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, StrategyPathTaskStructOutput] & { amountOut: BigNumber }
    >;

    getComponentId(overrides?: CallOverrides): Promise<number>;

    getUnderlying(
      tokenOut: string,
      task: StrategyPathTaskStruct,
      overrides?: CallOverrides
    ): Promise<[string, StrategyPathTaskStructOutput] & { tokenIn: string }>;

    version(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    deposit(
      amountIn: BigNumberish,
      tokenOut: string,
      task: StrategyPathTaskStruct,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    depositAll(
      tokenOut: string,
      task: StrategyPathTaskStruct,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getComponentId(overrides?: CallOverrides): Promise<BigNumber>;

    getUnderlying(
      tokenOut: string,
      task: StrategyPathTaskStruct,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    version(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    deposit(
      amountIn: BigNumberish,
      tokenOut: string,
      task: StrategyPathTaskStruct,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    depositAll(
      tokenOut: string,
      task: StrategyPathTaskStruct,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getComponentId(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getUnderlying(
      tokenOut: string,
      task: StrategyPathTaskStruct,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    version(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
