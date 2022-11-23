/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
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
} from "../../common";

export interface IOffchainOracleInterface extends utils.Interface {
  functions: {
    "getRate(address,address,bool)": FunctionFragment;
    "getRateToEth(address,bool)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "getRate" | "getRateToEth"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "getRate",
    values: [string, string, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "getRateToEth",
    values: [string, boolean]
  ): string;

  decodeFunctionResult(functionFragment: "getRate", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getRateToEth",
    data: BytesLike
  ): Result;

  events: {};
}

export interface IOffchainOracle extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IOffchainOracleInterface;

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
    getRate(
      srcToken: string,
      dstToken: string,
      useWrappers: boolean,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { weightedRate: BigNumber }>;

    getRateToEth(
      srcToken: string,
      useSrcWrappers: boolean,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { weightedRate: BigNumber }>;
  };

  getRate(
    srcToken: string,
    dstToken: string,
    useWrappers: boolean,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getRateToEth(
    srcToken: string,
    useSrcWrappers: boolean,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  callStatic: {
    getRate(
      srcToken: string,
      dstToken: string,
      useWrappers: boolean,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRateToEth(
      srcToken: string,
      useSrcWrappers: boolean,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    getRate(
      srcToken: string,
      dstToken: string,
      useWrappers: boolean,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRateToEth(
      srcToken: string,
      useSrcWrappers: boolean,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getRate(
      srcToken: string,
      dstToken: string,
      useWrappers: boolean,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getRateToEth(
      srcToken: string,
      useSrcWrappers: boolean,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
