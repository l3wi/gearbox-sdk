/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface AccountMinerNonReceivableTestInterface
  extends ethers.utils.Interface {
  functions: {
    "placeBid()": FunctionFragment;
    "takeBid()": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "placeBid", values?: undefined): string;
  encodeFunctionData(functionFragment: "takeBid", values?: undefined): string;

  decodeFunctionResult(functionFragment: "placeBid", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "takeBid", data: BytesLike): Result;

  events: {};
}

export class AccountMinerNonReceivableTest extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: AccountMinerNonReceivableTestInterface;

  functions: {
    placeBid(overrides?: PayableOverrides): Promise<ContractTransaction>;

    "placeBid()"(overrides?: PayableOverrides): Promise<ContractTransaction>;

    takeBid(overrides?: Overrides): Promise<ContractTransaction>;

    "takeBid()"(overrides?: Overrides): Promise<ContractTransaction>;
  };

  placeBid(overrides?: PayableOverrides): Promise<ContractTransaction>;

  "placeBid()"(overrides?: PayableOverrides): Promise<ContractTransaction>;

  takeBid(overrides?: Overrides): Promise<ContractTransaction>;

  "takeBid()"(overrides?: Overrides): Promise<ContractTransaction>;

  callStatic: {
    placeBid(overrides?: CallOverrides): Promise<void>;

    "placeBid()"(overrides?: CallOverrides): Promise<void>;

    takeBid(overrides?: CallOverrides): Promise<void>;

    "takeBid()"(overrides?: CallOverrides): Promise<void>;
  };

  filters: {};

  estimateGas: {
    placeBid(overrides?: PayableOverrides): Promise<BigNumber>;

    "placeBid()"(overrides?: PayableOverrides): Promise<BigNumber>;

    takeBid(overrides?: Overrides): Promise<BigNumber>;

    "takeBid()"(overrides?: Overrides): Promise<BigNumber>;
  };

  populateTransaction: {
    placeBid(overrides?: PayableOverrides): Promise<PopulatedTransaction>;

    "placeBid()"(overrides?: PayableOverrides): Promise<PopulatedTransaction>;

    takeBid(overrides?: Overrides): Promise<PopulatedTransaction>;

    "takeBid()"(overrides?: Overrides): Promise<PopulatedTransaction>;
  };
}