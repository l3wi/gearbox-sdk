/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IPathFinderComponent,
  IPathFinderComponentInterface,
} from "../../../../contracts/pathfinder/interfaces/IPathFinderComponent";

const _abi = [
  {
    inputs: [],
    name: "getComponentId",
    outputs: [
      {
        internalType: "enum PathFinderComponent",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "version",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class IPathFinderComponent__factory {
  static readonly abi = _abi;
  static createInterface(): IPathFinderComponentInterface {
    return new utils.Interface(_abi) as IPathFinderComponentInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IPathFinderComponent {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as IPathFinderComponent;
  }
}
