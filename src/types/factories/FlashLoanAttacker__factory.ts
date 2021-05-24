/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { FlashLoanAttacker } from "../FlashLoanAttacker";

export class FlashLoanAttacker__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    creditManageranager: string,
    overrides?: Overrides
  ): Promise<FlashLoanAttacker> {
    return super.deploy(
      creditManageranager,
      overrides || {}
    ) as Promise<FlashLoanAttacker>;
  }
  getDeployTransaction(
    creditManageranager: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(creditManageranager, overrides || {});
  }
  attach(address: string): FlashLoanAttacker {
    return super.attach(address) as FlashLoanAttacker;
  }
  connect(signer: Signer): FlashLoanAttacker__factory {
    return super.connect(signer) as FlashLoanAttacker__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): FlashLoanAttacker {
    return new Contract(address, _abi, signerOrProvider) as FlashLoanAttacker;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "creditManageranager",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "leverage",
        type: "uint256",
      },
    ],
    name: "attackClose",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "leverage",
        type: "uint256",
      },
    ],
    name: "attackRepay",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506040516107653803806107658339818101604052602081101561003357600080fd5b8101908080519060200190929190505050806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550506106d1806100946000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c80632e91d5981461003b578063e6b8925a14610073575b600080fd5b6100716004803603604081101561005157600080fd5b8101908080359060200190929190803590602001909291905050506100ab565b005b6100a96004803603604081101561008957600080fd5b8101908080359060200190929190803590602001909291905050506103a8565b005b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16632495a5996040518163ffffffff1660e01b815260040160206040518083038186803b15801561011457600080fd5b505afa158015610128573d6000803e3d6000fd5b505050506040513d602081101561013e57600080fd5b810190808051906020019092919050505090508073ffffffffffffffffffffffffffffffffffffffff1663095ea7b360008054906101000a900473ffffffffffffffffffffffffffffffffffffffff167fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b15801561020257600080fd5b505af1158015610216573d6000803e3d6000fd5b505050506040513d602081101561022c57600080fd5b81019080805190602001909291905050505060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16635288ba4b84308560006040518563ffffffff1660e01b8152600401808581526020018473ffffffffffffffffffffffffffffffffffffffff168152602001838152602001828152602001945050505050600060405180830381600087803b1580156102e057600080fd5b505af11580156102f4573d6000803e3d6000fd5b5050505060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663dd33359e306127106040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050600060405180830381600087803b15801561038b57600080fd5b505af115801561039f573d6000803e3d6000fd5b50505050505050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16632495a5996040518163ffffffff1660e01b815260040160206040518083038186803b15801561041157600080fd5b505afa158015610425573d6000803e3d6000fd5b505050506040513d602081101561043b57600080fd5b810190808051906020019092919050505090508073ffffffffffffffffffffffffffffffffffffffff1663095ea7b360008054906101000a900473ffffffffffffffffffffffffffffffffffffffff167fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b1580156104ff57600080fd5b505af1158015610513573d6000803e3d6000fd5b505050506040513d602081101561052957600080fd5b81019080805190602001909291905050505060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16635288ba4b84308560006040518563ffffffff1660e01b8152600401808581526020018473ffffffffffffffffffffffffffffffffffffffff168152602001838152602001828152602001945050505050600060405180830381600087803b1580156105dd57600080fd5b505af11580156105f1573d6000803e3d6000fd5b5050505060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663d692ba33306040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff168152602001915050600060405180830381600087803b15801561067e57600080fd5b505af1158015610692573d6000803e3d6000fd5b5050505050505056fea26469706673582212205d9a07ffa776c4b8538b2157798b437c04f0f6b8860b4438cfa50319f6cbed2364736f6c63430007060033";