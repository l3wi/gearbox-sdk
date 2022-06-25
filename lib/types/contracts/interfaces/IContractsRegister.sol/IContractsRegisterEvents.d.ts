import type { BaseContract, Signer, utils } from "ethers";
import type { EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../../common";
export interface IContractsRegisterEventsInterface extends utils.Interface {
    functions: {};
    events: {
        "NewCreditManagerAdded(address)": EventFragment;
        "NewPoolAdded(address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "NewCreditManagerAdded"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "NewPoolAdded"): EventFragment;
}
export interface NewCreditManagerAddedEventObject {
    creditManager: string;
}
export declare type NewCreditManagerAddedEvent = TypedEvent<[
    string
], NewCreditManagerAddedEventObject>;
export declare type NewCreditManagerAddedEventFilter = TypedEventFilter<NewCreditManagerAddedEvent>;
export interface NewPoolAddedEventObject {
    pool: string;
}
export declare type NewPoolAddedEvent = TypedEvent<[string], NewPoolAddedEventObject>;
export declare type NewPoolAddedEventFilter = TypedEventFilter<NewPoolAddedEvent>;
export interface IContractsRegisterEvents extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IContractsRegisterEventsInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {};
    callStatic: {};
    filters: {
        "NewCreditManagerAdded(address)"(creditManager?: string | null): NewCreditManagerAddedEventFilter;
        NewCreditManagerAdded(creditManager?: string | null): NewCreditManagerAddedEventFilter;
        "NewPoolAdded(address)"(pool?: string | null): NewPoolAddedEventFilter;
        NewPoolAdded(pool?: string | null): NewPoolAddedEventFilter;
    };
    estimateGas: {};
    populateTransaction: {};
}
