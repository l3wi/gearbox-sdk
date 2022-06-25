import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { ICreditFilter, ICreditFilterInterface } from "../../../../contracts/interfaces/V1/ICreditFilter";
export declare class ICreditFilter__factory {
    static readonly abi: ({
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        outputs?: undefined;
        stateMutability?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[];
    static createInterface(): ICreditFilterInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ICreditFilter;
}
