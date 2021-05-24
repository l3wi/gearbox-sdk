import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { WETHGateway } from "../WETHGateway";
export declare class WETHGateway__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(addressProvider: string, overrides?: Overrides): Promise<WETHGateway>;
    getDeployTransaction(addressProvider: string, overrides?: Overrides): TransactionRequest;
    attach(address: string): WETHGateway;
    connect(signer: Signer): WETHGateway__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): WETHGateway;
}