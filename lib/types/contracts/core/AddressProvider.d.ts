import type { BaseContract, BigNumber, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../common";
export interface AddressProviderInterface extends utils.Interface {
    functions: {
        "addresses(bytes32)": FunctionFragment;
        "getACL()": FunctionFragment;
        "getAccountFactory()": FunctionFragment;
        "getContractsRegister()": FunctionFragment;
        "getDataCompressor()": FunctionFragment;
        "getGearToken()": FunctionFragment;
        "getPriceOracle()": FunctionFragment;
        "getTreasuryContract()": FunctionFragment;
        "getWETHGateway()": FunctionFragment;
        "getWethToken()": FunctionFragment;
        "owner()": FunctionFragment;
        "renounceOwnership()": FunctionFragment;
        "setACL(address)": FunctionFragment;
        "setAccountFactory(address)": FunctionFragment;
        "setContractsRegister(address)": FunctionFragment;
        "setDataCompressor(address)": FunctionFragment;
        "setGearToken(address)": FunctionFragment;
        "setPriceOracle(address)": FunctionFragment;
        "setTreasuryContract(address)": FunctionFragment;
        "setWETHGateway(address)": FunctionFragment;
        "setWethToken(address)": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
        "version()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "addresses" | "getACL" | "getAccountFactory" | "getContractsRegister" | "getDataCompressor" | "getGearToken" | "getPriceOracle" | "getTreasuryContract" | "getWETHGateway" | "getWethToken" | "owner" | "renounceOwnership" | "setACL" | "setAccountFactory" | "setContractsRegister" | "setDataCompressor" | "setGearToken" | "setPriceOracle" | "setTreasuryContract" | "setWETHGateway" | "setWethToken" | "transferOwnership" | "version"): FunctionFragment;
    encodeFunctionData(functionFragment: "addresses", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "getACL", values?: undefined): string;
    encodeFunctionData(functionFragment: "getAccountFactory", values?: undefined): string;
    encodeFunctionData(functionFragment: "getContractsRegister", values?: undefined): string;
    encodeFunctionData(functionFragment: "getDataCompressor", values?: undefined): string;
    encodeFunctionData(functionFragment: "getGearToken", values?: undefined): string;
    encodeFunctionData(functionFragment: "getPriceOracle", values?: undefined): string;
    encodeFunctionData(functionFragment: "getTreasuryContract", values?: undefined): string;
    encodeFunctionData(functionFragment: "getWETHGateway", values?: undefined): string;
    encodeFunctionData(functionFragment: "getWethToken", values?: undefined): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "setACL", values: [string]): string;
    encodeFunctionData(functionFragment: "setAccountFactory", values: [string]): string;
    encodeFunctionData(functionFragment: "setContractsRegister", values: [string]): string;
    encodeFunctionData(functionFragment: "setDataCompressor", values: [string]): string;
    encodeFunctionData(functionFragment: "setGearToken", values: [string]): string;
    encodeFunctionData(functionFragment: "setPriceOracle", values: [string]): string;
    encodeFunctionData(functionFragment: "setTreasuryContract", values: [string]): string;
    encodeFunctionData(functionFragment: "setWETHGateway", values: [string]): string;
    encodeFunctionData(functionFragment: "setWethToken", values: [string]): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [string]): string;
    encodeFunctionData(functionFragment: "version", values?: undefined): string;
    decodeFunctionResult(functionFragment: "addresses", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getACL", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAccountFactory", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getContractsRegister", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getDataCompressor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getGearToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPriceOracle", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getTreasuryContract", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getWETHGateway", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getWethToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setACL", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setAccountFactory", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setContractsRegister", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setDataCompressor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setGearToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setPriceOracle", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setTreasuryContract", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setWETHGateway", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setWethToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "version", data: BytesLike): Result;
    events: {
        "AddressSet(bytes32,address)": EventFragment;
        "OwnershipTransferred(address,address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "AddressSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}
export interface AddressSetEventObject {
    service: string;
    newAddress: string;
}
export declare type AddressSetEvent = TypedEvent<[
    string,
    string
], AddressSetEventObject>;
export declare type AddressSetEventFilter = TypedEventFilter<AddressSetEvent>;
export interface OwnershipTransferredEventObject {
    previousOwner: string;
    newOwner: string;
}
export declare type OwnershipTransferredEvent = TypedEvent<[
    string,
    string
], OwnershipTransferredEventObject>;
export declare type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;
export interface AddressProvider extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: AddressProviderInterface;
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
        addresses(arg0: BytesLike, overrides?: CallOverrides): Promise<[string]>;
        getACL(overrides?: CallOverrides): Promise<[string]>;
        getAccountFactory(overrides?: CallOverrides): Promise<[string]>;
        getContractsRegister(overrides?: CallOverrides): Promise<[string]>;
        getDataCompressor(overrides?: CallOverrides): Promise<[string]>;
        getGearToken(overrides?: CallOverrides): Promise<[string]>;
        getPriceOracle(overrides?: CallOverrides): Promise<[string]>;
        getTreasuryContract(overrides?: CallOverrides): Promise<[string]>;
        getWETHGateway(overrides?: CallOverrides): Promise<[string]>;
        getWethToken(overrides?: CallOverrides): Promise<[string]>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        renounceOwnership(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setACL(_address: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setAccountFactory(_address: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setContractsRegister(_address: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setDataCompressor(_address: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setGearToken(_address: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setPriceOracle(_address: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setTreasuryContract(_address: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setWETHGateway(_address: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setWethToken(_address: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        version(overrides?: CallOverrides): Promise<[BigNumber]>;
    };
    addresses(arg0: BytesLike, overrides?: CallOverrides): Promise<string>;
    getACL(overrides?: CallOverrides): Promise<string>;
    getAccountFactory(overrides?: CallOverrides): Promise<string>;
    getContractsRegister(overrides?: CallOverrides): Promise<string>;
    getDataCompressor(overrides?: CallOverrides): Promise<string>;
    getGearToken(overrides?: CallOverrides): Promise<string>;
    getPriceOracle(overrides?: CallOverrides): Promise<string>;
    getTreasuryContract(overrides?: CallOverrides): Promise<string>;
    getWETHGateway(overrides?: CallOverrides): Promise<string>;
    getWethToken(overrides?: CallOverrides): Promise<string>;
    owner(overrides?: CallOverrides): Promise<string>;
    renounceOwnership(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setACL(_address: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setAccountFactory(_address: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setContractsRegister(_address: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setDataCompressor(_address: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setGearToken(_address: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setPriceOracle(_address: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setTreasuryContract(_address: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setWETHGateway(_address: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setWethToken(_address: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    transferOwnership(newOwner: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    version(overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        addresses(arg0: BytesLike, overrides?: CallOverrides): Promise<string>;
        getACL(overrides?: CallOverrides): Promise<string>;
        getAccountFactory(overrides?: CallOverrides): Promise<string>;
        getContractsRegister(overrides?: CallOverrides): Promise<string>;
        getDataCompressor(overrides?: CallOverrides): Promise<string>;
        getGearToken(overrides?: CallOverrides): Promise<string>;
        getPriceOracle(overrides?: CallOverrides): Promise<string>;
        getTreasuryContract(overrides?: CallOverrides): Promise<string>;
        getWETHGateway(overrides?: CallOverrides): Promise<string>;
        getWethToken(overrides?: CallOverrides): Promise<string>;
        owner(overrides?: CallOverrides): Promise<string>;
        renounceOwnership(overrides?: CallOverrides): Promise<void>;
        setACL(_address: string, overrides?: CallOverrides): Promise<void>;
        setAccountFactory(_address: string, overrides?: CallOverrides): Promise<void>;
        setContractsRegister(_address: string, overrides?: CallOverrides): Promise<void>;
        setDataCompressor(_address: string, overrides?: CallOverrides): Promise<void>;
        setGearToken(_address: string, overrides?: CallOverrides): Promise<void>;
        setPriceOracle(_address: string, overrides?: CallOverrides): Promise<void>;
        setTreasuryContract(_address: string, overrides?: CallOverrides): Promise<void>;
        setWETHGateway(_address: string, overrides?: CallOverrides): Promise<void>;
        setWethToken(_address: string, overrides?: CallOverrides): Promise<void>;
        transferOwnership(newOwner: string, overrides?: CallOverrides): Promise<void>;
        version(overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {
        "AddressSet(bytes32,address)"(service?: BytesLike | null, newAddress?: string | null): AddressSetEventFilter;
        AddressSet(service?: BytesLike | null, newAddress?: string | null): AddressSetEventFilter;
        "OwnershipTransferred(address,address)"(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;
        OwnershipTransferred(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;
    };
    estimateGas: {
        addresses(arg0: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        getACL(overrides?: CallOverrides): Promise<BigNumber>;
        getAccountFactory(overrides?: CallOverrides): Promise<BigNumber>;
        getContractsRegister(overrides?: CallOverrides): Promise<BigNumber>;
        getDataCompressor(overrides?: CallOverrides): Promise<BigNumber>;
        getGearToken(overrides?: CallOverrides): Promise<BigNumber>;
        getPriceOracle(overrides?: CallOverrides): Promise<BigNumber>;
        getTreasuryContract(overrides?: CallOverrides): Promise<BigNumber>;
        getWETHGateway(overrides?: CallOverrides): Promise<BigNumber>;
        getWethToken(overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        renounceOwnership(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setACL(_address: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setAccountFactory(_address: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setContractsRegister(_address: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setDataCompressor(_address: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setGearToken(_address: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setPriceOracle(_address: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setTreasuryContract(_address: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setWETHGateway(_address: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setWethToken(_address: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        version(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        addresses(arg0: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getACL(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getAccountFactory(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getContractsRegister(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getDataCompressor(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getGearToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getPriceOracle(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getTreasuryContract(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getWETHGateway(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getWethToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setACL(_address: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setAccountFactory(_address: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setContractsRegister(_address: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setDataCompressor(_address: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setGearToken(_address: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setPriceOracle(_address: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setTreasuryContract(_address: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setWETHGateway(_address: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setWethToken(_address: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        version(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
