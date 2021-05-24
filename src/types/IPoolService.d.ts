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
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface IPoolServiceInterface extends ethers.utils.Interface {
  functions: {
    "addLiquidity(uint256,address,uint256)": FunctionFragment;
    "availableLiquidity()": FunctionFragment;
    "borrowAPY_RAY()": FunctionFragment;
    "calcLinearCumulative_RAY()": FunctionFragment;
    "creditManagers(uint256)": FunctionFragment;
    "creditManagersCanBorrow(address)": FunctionFragment;
    "creditManagersCount()": FunctionFragment;
    "dieselToken()": FunctionFragment;
    "expectedLiquidity()": FunctionFragment;
    "fromDiesel(uint256)": FunctionFragment;
    "getDieselRate_RAY()": FunctionFragment;
    "lendCreditAccount(uint256,address)": FunctionFragment;
    "removeLiquidity(uint256,address)": FunctionFragment;
    "repayCreditAccount(uint256,uint256,uint256)": FunctionFragment;
    "toDiesel(uint256)": FunctionFragment;
    "totalBorrowed()": FunctionFragment;
    "underlyingToken()": FunctionFragment;
    "withdrawFee()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "addLiquidity",
    values: [BigNumberish, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "availableLiquidity",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "borrowAPY_RAY",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "calcLinearCumulative_RAY",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "creditManagers",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "creditManagersCanBorrow",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "creditManagersCount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "dieselToken",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "expectedLiquidity",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "fromDiesel",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getDieselRate_RAY",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "lendCreditAccount",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "removeLiquidity",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "repayCreditAccount",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "toDiesel",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "totalBorrowed",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "underlyingToken",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawFee",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "addLiquidity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "availableLiquidity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "borrowAPY_RAY",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "calcLinearCumulative_RAY",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "creditManagers",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "creditManagersCanBorrow",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "creditManagersCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "dieselToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "expectedLiquidity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "fromDiesel", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getDieselRate_RAY",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "lendCreditAccount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeLiquidity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "repayCreditAccount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "toDiesel", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "totalBorrowed",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "underlyingToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawFee",
    data: BytesLike
  ): Result;

  events: {
    "AddLiquidity(address,address,uint256,uint256)": EventFragment;
    "Borrow(address,address,uint256)": EventFragment;
    "BorrowForbidden(address)": EventFragment;
    "NewCreditManagerConnected(address)": EventFragment;
    "NewExpectedLiquidityLimit(uint256)": EventFragment;
    "NewInterestRateModel(address)": EventFragment;
    "RemoveLiquidity(address,address,uint256)": EventFragment;
    "Repay(address,uint256,uint256,uint256)": EventFragment;
    "UncoveredLoss(address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AddLiquidity"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Borrow"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "BorrowForbidden"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NewCreditManagerConnected"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NewExpectedLiquidityLimit"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NewInterestRateModel"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RemoveLiquidity"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Repay"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "UncoveredLoss"): EventFragment;
}

export class IPoolService extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: IPoolServiceInterface;

  functions: {
    addLiquidity(
      amount: BigNumberish,
      onBehalfOf: string,
      referralCode: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "addLiquidity(uint256,address,uint256)"(
      amount: BigNumberish,
      onBehalfOf: string,
      referralCode: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    availableLiquidity(overrides?: CallOverrides): Promise<[BigNumber]>;

    "availableLiquidity()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    borrowAPY_RAY(overrides?: CallOverrides): Promise<[BigNumber]>;

    "borrowAPY_RAY()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    calcLinearCumulative_RAY(overrides?: CallOverrides): Promise<[BigNumber]>;

    "calcLinearCumulative_RAY()"(
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    creditManagers(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    "creditManagers(uint256)"(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    creditManagersCanBorrow(
      id: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    "creditManagersCanBorrow(address)"(
      id: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    creditManagersCount(overrides?: CallOverrides): Promise<[BigNumber]>;

    "creditManagersCount()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    dieselToken(overrides?: CallOverrides): Promise<[string]>;

    "dieselToken()"(overrides?: CallOverrides): Promise<[string]>;

    expectedLiquidity(overrides?: CallOverrides): Promise<[BigNumber]>;

    "expectedLiquidity()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    fromDiesel(
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "fromDiesel(uint256)"(
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getDieselRate_RAY(overrides?: CallOverrides): Promise<[BigNumber]>;

    "getDieselRate_RAY()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    lendCreditAccount(
      borrowedAmount: BigNumberish,
      creditAccount: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "lendCreditAccount(uint256,address)"(
      borrowedAmount: BigNumberish,
      creditAccount: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    removeLiquidity(
      amount: BigNumberish,
      to: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "removeLiquidity(uint256,address)"(
      amount: BigNumberish,
      to: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    repayCreditAccount(
      borrowedAmount: BigNumberish,
      profit: BigNumberish,
      loss: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "repayCreditAccount(uint256,uint256,uint256)"(
      borrowedAmount: BigNumberish,
      profit: BigNumberish,
      loss: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    toDiesel(
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "toDiesel(uint256)"(
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    totalBorrowed(overrides?: CallOverrides): Promise<[BigNumber]>;

    "totalBorrowed()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    underlyingToken(overrides?: CallOverrides): Promise<[string]>;

    "underlyingToken()"(overrides?: CallOverrides): Promise<[string]>;

    withdrawFee(overrides?: CallOverrides): Promise<[BigNumber]>;

    "withdrawFee()"(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  addLiquidity(
    amount: BigNumberish,
    onBehalfOf: string,
    referralCode: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "addLiquidity(uint256,address,uint256)"(
    amount: BigNumberish,
    onBehalfOf: string,
    referralCode: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  availableLiquidity(overrides?: CallOverrides): Promise<BigNumber>;

  "availableLiquidity()"(overrides?: CallOverrides): Promise<BigNumber>;

  borrowAPY_RAY(overrides?: CallOverrides): Promise<BigNumber>;

  "borrowAPY_RAY()"(overrides?: CallOverrides): Promise<BigNumber>;

  calcLinearCumulative_RAY(overrides?: CallOverrides): Promise<BigNumber>;

  "calcLinearCumulative_RAY()"(overrides?: CallOverrides): Promise<BigNumber>;

  creditManagers(id: BigNumberish, overrides?: CallOverrides): Promise<string>;

  "creditManagers(uint256)"(
    id: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  creditManagersCanBorrow(
    id: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  "creditManagersCanBorrow(address)"(
    id: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  creditManagersCount(overrides?: CallOverrides): Promise<BigNumber>;

  "creditManagersCount()"(overrides?: CallOverrides): Promise<BigNumber>;

  dieselToken(overrides?: CallOverrides): Promise<string>;

  "dieselToken()"(overrides?: CallOverrides): Promise<string>;

  expectedLiquidity(overrides?: CallOverrides): Promise<BigNumber>;

  "expectedLiquidity()"(overrides?: CallOverrides): Promise<BigNumber>;

  fromDiesel(
    amount: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "fromDiesel(uint256)"(
    amount: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getDieselRate_RAY(overrides?: CallOverrides): Promise<BigNumber>;

  "getDieselRate_RAY()"(overrides?: CallOverrides): Promise<BigNumber>;

  lendCreditAccount(
    borrowedAmount: BigNumberish,
    creditAccount: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "lendCreditAccount(uint256,address)"(
    borrowedAmount: BigNumberish,
    creditAccount: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  removeLiquidity(
    amount: BigNumberish,
    to: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "removeLiquidity(uint256,address)"(
    amount: BigNumberish,
    to: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  repayCreditAccount(
    borrowedAmount: BigNumberish,
    profit: BigNumberish,
    loss: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "repayCreditAccount(uint256,uint256,uint256)"(
    borrowedAmount: BigNumberish,
    profit: BigNumberish,
    loss: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  toDiesel(amount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

  "toDiesel(uint256)"(
    amount: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  totalBorrowed(overrides?: CallOverrides): Promise<BigNumber>;

  "totalBorrowed()"(overrides?: CallOverrides): Promise<BigNumber>;

  underlyingToken(overrides?: CallOverrides): Promise<string>;

  "underlyingToken()"(overrides?: CallOverrides): Promise<string>;

  withdrawFee(overrides?: CallOverrides): Promise<BigNumber>;

  "withdrawFee()"(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    addLiquidity(
      amount: BigNumberish,
      onBehalfOf: string,
      referralCode: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "addLiquidity(uint256,address,uint256)"(
      amount: BigNumberish,
      onBehalfOf: string,
      referralCode: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    availableLiquidity(overrides?: CallOverrides): Promise<BigNumber>;

    "availableLiquidity()"(overrides?: CallOverrides): Promise<BigNumber>;

    borrowAPY_RAY(overrides?: CallOverrides): Promise<BigNumber>;

    "borrowAPY_RAY()"(overrides?: CallOverrides): Promise<BigNumber>;

    calcLinearCumulative_RAY(overrides?: CallOverrides): Promise<BigNumber>;

    "calcLinearCumulative_RAY()"(overrides?: CallOverrides): Promise<BigNumber>;

    creditManagers(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    "creditManagers(uint256)"(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    creditManagersCanBorrow(
      id: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "creditManagersCanBorrow(address)"(
      id: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    creditManagersCount(overrides?: CallOverrides): Promise<BigNumber>;

    "creditManagersCount()"(overrides?: CallOverrides): Promise<BigNumber>;

    dieselToken(overrides?: CallOverrides): Promise<string>;

    "dieselToken()"(overrides?: CallOverrides): Promise<string>;

    expectedLiquidity(overrides?: CallOverrides): Promise<BigNumber>;

    "expectedLiquidity()"(overrides?: CallOverrides): Promise<BigNumber>;

    fromDiesel(
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "fromDiesel(uint256)"(
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getDieselRate_RAY(overrides?: CallOverrides): Promise<BigNumber>;

    "getDieselRate_RAY()"(overrides?: CallOverrides): Promise<BigNumber>;

    lendCreditAccount(
      borrowedAmount: BigNumberish,
      creditAccount: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "lendCreditAccount(uint256,address)"(
      borrowedAmount: BigNumberish,
      creditAccount: string,
      overrides?: CallOverrides
    ): Promise<void>;

    removeLiquidity(
      amount: BigNumberish,
      to: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "removeLiquidity(uint256,address)"(
      amount: BigNumberish,
      to: string,
      overrides?: CallOverrides
    ): Promise<void>;

    repayCreditAccount(
      borrowedAmount: BigNumberish,
      profit: BigNumberish,
      loss: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "repayCreditAccount(uint256,uint256,uint256)"(
      borrowedAmount: BigNumberish,
      profit: BigNumberish,
      loss: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    toDiesel(
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "toDiesel(uint256)"(
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    totalBorrowed(overrides?: CallOverrides): Promise<BigNumber>;

    "totalBorrowed()"(overrides?: CallOverrides): Promise<BigNumber>;

    underlyingToken(overrides?: CallOverrides): Promise<string>;

    "underlyingToken()"(overrides?: CallOverrides): Promise<string>;

    withdrawFee(overrides?: CallOverrides): Promise<BigNumber>;

    "withdrawFee()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {
    AddLiquidity(
      sender: string | null,
      onBehalfOf: string | null,
      amount: null,
      referralCode: null
    ): EventFilter;

    Borrow(
      creditManager: string | null,
      creditAccount: null,
      amount: null
    ): EventFilter;

    BorrowForbidden(creditManager: string | null): EventFilter;

    NewCreditManagerConnected(creditManager: string | null): EventFilter;

    NewExpectedLiquidityLimit(newLimit: null): EventFilter;

    NewInterestRateModel(newInterestRateModel: string | null): EventFilter;

    RemoveLiquidity(
      sender: string | null,
      to: string | null,
      amount: null
    ): EventFilter;

    Repay(
      creditManager: string | null,
      borrowedAmount: null,
      profit: null,
      loss: null
    ): EventFilter;

    UncoveredLoss(creditManager: string | null, loss: null): EventFilter;
  };

  estimateGas: {
    addLiquidity(
      amount: BigNumberish,
      onBehalfOf: string,
      referralCode: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "addLiquidity(uint256,address,uint256)"(
      amount: BigNumberish,
      onBehalfOf: string,
      referralCode: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    availableLiquidity(overrides?: CallOverrides): Promise<BigNumber>;

    "availableLiquidity()"(overrides?: CallOverrides): Promise<BigNumber>;

    borrowAPY_RAY(overrides?: CallOverrides): Promise<BigNumber>;

    "borrowAPY_RAY()"(overrides?: CallOverrides): Promise<BigNumber>;

    calcLinearCumulative_RAY(overrides?: CallOverrides): Promise<BigNumber>;

    "calcLinearCumulative_RAY()"(overrides?: CallOverrides): Promise<BigNumber>;

    creditManagers(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "creditManagers(uint256)"(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    creditManagersCanBorrow(
      id: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "creditManagersCanBorrow(address)"(
      id: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    creditManagersCount(overrides?: CallOverrides): Promise<BigNumber>;

    "creditManagersCount()"(overrides?: CallOverrides): Promise<BigNumber>;

    dieselToken(overrides?: CallOverrides): Promise<BigNumber>;

    "dieselToken()"(overrides?: CallOverrides): Promise<BigNumber>;

    expectedLiquidity(overrides?: CallOverrides): Promise<BigNumber>;

    "expectedLiquidity()"(overrides?: CallOverrides): Promise<BigNumber>;

    fromDiesel(
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "fromDiesel(uint256)"(
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getDieselRate_RAY(overrides?: CallOverrides): Promise<BigNumber>;

    "getDieselRate_RAY()"(overrides?: CallOverrides): Promise<BigNumber>;

    lendCreditAccount(
      borrowedAmount: BigNumberish,
      creditAccount: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "lendCreditAccount(uint256,address)"(
      borrowedAmount: BigNumberish,
      creditAccount: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    removeLiquidity(
      amount: BigNumberish,
      to: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "removeLiquidity(uint256,address)"(
      amount: BigNumberish,
      to: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    repayCreditAccount(
      borrowedAmount: BigNumberish,
      profit: BigNumberish,
      loss: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "repayCreditAccount(uint256,uint256,uint256)"(
      borrowedAmount: BigNumberish,
      profit: BigNumberish,
      loss: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    toDiesel(
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "toDiesel(uint256)"(
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    totalBorrowed(overrides?: CallOverrides): Promise<BigNumber>;

    "totalBorrowed()"(overrides?: CallOverrides): Promise<BigNumber>;

    underlyingToken(overrides?: CallOverrides): Promise<BigNumber>;

    "underlyingToken()"(overrides?: CallOverrides): Promise<BigNumber>;

    withdrawFee(overrides?: CallOverrides): Promise<BigNumber>;

    "withdrawFee()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    addLiquidity(
      amount: BigNumberish,
      onBehalfOf: string,
      referralCode: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "addLiquidity(uint256,address,uint256)"(
      amount: BigNumberish,
      onBehalfOf: string,
      referralCode: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    availableLiquidity(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "availableLiquidity()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    borrowAPY_RAY(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "borrowAPY_RAY()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    calcLinearCumulative_RAY(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "calcLinearCumulative_RAY()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    creditManagers(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "creditManagers(uint256)"(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    creditManagersCanBorrow(
      id: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "creditManagersCanBorrow(address)"(
      id: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    creditManagersCount(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "creditManagersCount()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    dieselToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "dieselToken()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    expectedLiquidity(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "expectedLiquidity()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    fromDiesel(
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "fromDiesel(uint256)"(
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getDieselRate_RAY(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "getDieselRate_RAY()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    lendCreditAccount(
      borrowedAmount: BigNumberish,
      creditAccount: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "lendCreditAccount(uint256,address)"(
      borrowedAmount: BigNumberish,
      creditAccount: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    removeLiquidity(
      amount: BigNumberish,
      to: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "removeLiquidity(uint256,address)"(
      amount: BigNumberish,
      to: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    repayCreditAccount(
      borrowedAmount: BigNumberish,
      profit: BigNumberish,
      loss: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "repayCreditAccount(uint256,uint256,uint256)"(
      borrowedAmount: BigNumberish,
      profit: BigNumberish,
      loss: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    toDiesel(
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "toDiesel(uint256)"(
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    totalBorrowed(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "totalBorrowed()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    underlyingToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "underlyingToken()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    withdrawFee(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "withdrawFee()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}