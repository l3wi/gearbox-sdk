/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { AddressProvider } from "../AddressProvider";

export class AddressProvider__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<AddressProvider> {
    return super.deploy(overrides || {}) as Promise<AddressProvider>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): AddressProvider {
    return super.attach(address) as AddressProvider;
  }
  connect(signer: Signer): AddressProvider__factory {
    return super.connect(signer) as AddressProvider__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): AddressProvider {
    return new Contract(address, _abi, signerOrProvider) as AddressProvider;
  }
}

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "service",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newAddress",
        type: "address",
      },
    ],
    name: "AddressSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [],
    name: "ACCOUNT_MINER",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "ACL",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "CONTRACTS_REGISTER",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "DATA_COMPRESSOR",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "FARMING_ACCOUNT_FACTORY",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "GEAR_TOKEN",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "PRICE_ORACLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "TRADER_ACCOUNT_FACTORY",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "TREASURY_CONTRACT",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "VANILLA_ACCOUNT_FACTORY",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "WETH_GATEWAY",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "WETH_TOKEN",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "addresses",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getACL",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getAccountMiner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getContractsRegister",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getDataCompressor",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getFarmingAccountFactory",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getGearToken",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getPriceOracle",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getTraderAccountFactory",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getTreasuryContract",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getVanillaAccountFactory",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getWETHGateway",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getWethToken",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_address",
        type: "address",
      },
    ],
    name: "setACL",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_address",
        type: "address",
      },
    ],
    name: "setAccountMiner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_address",
        type: "address",
      },
    ],
    name: "setContractsRegister",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_address",
        type: "address",
      },
    ],
    name: "setDataCompressor",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_address",
        type: "address",
      },
    ],
    name: "setFarmingAccountFactory",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_address",
        type: "address",
      },
    ],
    name: "setGearToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_address",
        type: "address",
      },
    ],
    name: "setPriceOracle",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_address",
        type: "address",
      },
    ],
    name: "setTraderAccountFactory",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_address",
        type: "address",
      },
    ],
    name: "setTreasuryContract",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_address",
        type: "address",
      },
    ],
    name: "setVanillaAccountFactory",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_address",
        type: "address",
      },
    ],
    name: "setWETHGateway",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_address",
        type: "address",
      },
    ],
    name: "setWethToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50600061002161012860201b60201c565b9050806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508073ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3503073ffffffffffffffffffffffffffffffffffffffff167f414444524553535f50524f5649444552000000000000000000000000000000007fb37614c7d254ea8d16eb81fa11dddaeb266aa8ba4917980859c7740aff30c69160405160405180910390a3610130565b600033905090565b611e7c8061013f6000396000f3fe608060405234801561001057600080fd5b50600436106102485760003560e01c806386e09c081161013b578063c5120b39116100b8578063e2d611951161007c578063e2d6119514610937578063f2fde38b14610955578063f37ea93f14610999578063f9366f47146109dd578063fca513a8146109fb57610248565b8063c5120b3914610803578063c513c9bb14610847578063ce3c4ae41461087b578063d1c2d5fb146108bf578063d203345e146108f357610248565b8063a3d0764b116100ff578063a3d0764b14610731578063ae5a98ba1461074f578063affd92431461076d578063bcaead98146107a1578063c0e53d6e146107e557610248565b806386e09c08146106135780638978d480146106575780638da5cb5b1461069b5780639d88d33e146106cf5780639e9df2b91461071357610248565b806337d277d4116101c957806372788be71161018d57806372788be71461054157806372a4ce651461055f57806376aad6051461057d57806377532ed9146105c15780637af53532146105f557610248565b806337d277d4146104495780634c252f9114610467578063530e784f1461049b578063699f200f146104df578063715018a61461053757610248565b8063124a646211610210578063124a64621461033b5780631ed651101461035957806321da58371461039d57806326c74fc3146103e157806328ede2a91461041557610248565b8063060678c21461024d578063087376951461028157806308e1d92e146102b55780630a19399a146102e95780630bc285ad14610307575b600080fd5b610255610a2f565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b610289610a5f565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6102bd610a8f565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6102f1610abf565b6040518082815260200191505060405180910390f35b61030f610ae3565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b610343610b13565b6040518082815260200191505060405180910390f35b61039b6004803603602081101561036f57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610b37565b005b6103df600480360360208110156103b357600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610c13565b005b6103e9610cef565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b61041d610d1f565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b610451610d4f565b6040518082815260200191505060405180910390f35b61046f610d73565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6104dd600480360360208110156104b157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610da3565b005b61050b600480360360208110156104f557600080fd5b8101908080359060200190929190505050610e7f565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b61053f610eb2565b005b61054961101f565b6040518082815260200191505060405180910390f35b610567611043565b6040518082815260200191505060405180910390f35b6105bf6004803603602081101561059357600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611067565b005b6105c9611143565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6105fd611173565b6040518082815260200191505060405180910390f35b6106556004803603602081101561062957600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611197565b005b6106996004803603602081101561066d57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611273565b005b6106a361134f565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b610711600480360360208110156106e557600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611378565b005b61071b611454565b6040518082815260200191505060405180910390f35b610739611478565b6040518082815260200191505060405180910390f35b61075761149c565b6040518082815260200191505060405180910390f35b6107756114c0565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6107e3600480360360208110156107b757600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506114f0565b005b6107ed6115cc565b6040518082815260200191505060405180910390f35b6108456004803603602081101561081957600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506115f0565b005b61084f6116cc565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6108bd6004803603602081101561089157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506116fc565b005b6108c76117d8565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6109356004803603602081101561090957600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611808565b005b61093f6118e4565b6040518082815260200191505060405180910390f35b6109976004803603602081101561096b57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611908565b005b6109db600480360360208110156109af57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611afa565b005b6109e5611bd6565b6040518082815260200191505060405180910390f35b610a03611bfa565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6000610a5a7f444154415f434f4d50524553534f520000000000000000000000000000000000611c2a565b905090565b6000610a8a7f41434c0000000000000000000000000000000000000000000000000000000000611c2a565b905090565b6000610aba7f5452414445525f4143434f554e545f464143544f525900000000000000000000611c2a565b905090565b7f50524943455f4f5241434c45000000000000000000000000000000000000000081565b6000610b0e7f4143434f554e545f4d494e455200000000000000000000000000000000000000611c2a565b905090565b7f474541525f544f4b454e0000000000000000000000000000000000000000000081565b610b3f611d5d565b73ffffffffffffffffffffffffffffffffffffffff16610b5d61134f565b73ffffffffffffffffffffffffffffffffffffffff1614610be6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b610c107f54524541535552595f434f4e545241435400000000000000000000000000000082611d65565b50565b610c1b611d5d565b73ffffffffffffffffffffffffffffffffffffffff16610c3961134f565b73ffffffffffffffffffffffffffffffffffffffff1614610cc2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b610cec7f574554485f47415445574159000000000000000000000000000000000000000082611d65565b50565b6000610d1a7f54524541535552595f434f4e5452414354000000000000000000000000000000611c2a565b905090565b6000610d4a7f4641524d494e475f4143434f554e545f464143544f5259000000000000000000611c2a565b905090565b7f574554485f544f4b454e0000000000000000000000000000000000000000000081565b6000610d9e7f574554485f544f4b454e00000000000000000000000000000000000000000000611c2a565b905090565b610dab611d5d565b73ffffffffffffffffffffffffffffffffffffffff16610dc961134f565b73ffffffffffffffffffffffffffffffffffffffff1614610e52576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b610e7c7f50524943455f4f5241434c45000000000000000000000000000000000000000082611d65565b50565b60016020528060005260406000206000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b610eba611d5d565b73ffffffffffffffffffffffffffffffffffffffff16610ed861134f565b73ffffffffffffffffffffffffffffffffffffffff1614610f61576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a360008060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b7f444154415f434f4d50524553534f52000000000000000000000000000000000081565b7f56414e494c4c415f4143434f554e545f464143544f525900000000000000000081565b61106f611d5d565b73ffffffffffffffffffffffffffffffffffffffff1661108d61134f565b73ffffffffffffffffffffffffffffffffffffffff1614611116576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b6111407f41434c000000000000000000000000000000000000000000000000000000000082611d65565b50565b600061116e7f574554485f474154455741590000000000000000000000000000000000000000611c2a565b905090565b7f41434c000000000000000000000000000000000000000000000000000000000081565b61119f611d5d565b73ffffffffffffffffffffffffffffffffffffffff166111bd61134f565b73ffffffffffffffffffffffffffffffffffffffff1614611246576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b6112707f574554485f544f4b454e0000000000000000000000000000000000000000000082611d65565b50565b61127b611d5d565b73ffffffffffffffffffffffffffffffffffffffff1661129961134f565b73ffffffffffffffffffffffffffffffffffffffff1614611322576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b61134c7f4143434f554e545f4d494e45520000000000000000000000000000000000000082611d65565b50565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b611380611d5d565b73ffffffffffffffffffffffffffffffffffffffff1661139e61134f565b73ffffffffffffffffffffffffffffffffffffffff1614611427576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b6114517f4641524d494e475f4143434f554e545f464143544f525900000000000000000082611d65565b50565b7f54524541535552595f434f4e545241435400000000000000000000000000000081565b7f4641524d494e475f4143434f554e545f464143544f525900000000000000000081565b7f574554485f47415445574159000000000000000000000000000000000000000081565b60006114eb7f474541525f544f4b454e00000000000000000000000000000000000000000000611c2a565b905090565b6114f8611d5d565b73ffffffffffffffffffffffffffffffffffffffff1661151661134f565b73ffffffffffffffffffffffffffffffffffffffff161461159f576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b6115c97f474541525f544f4b454e0000000000000000000000000000000000000000000082611d65565b50565b7f4143434f554e545f4d494e45520000000000000000000000000000000000000081565b6115f8611d5d565b73ffffffffffffffffffffffffffffffffffffffff1661161661134f565b73ffffffffffffffffffffffffffffffffffffffff161461169f576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b6116c97f444154415f434f4d50524553534f52000000000000000000000000000000000082611d65565b50565b60006116f77f434f4e5452414354535f52454749535445520000000000000000000000000000611c2a565b905090565b611704611d5d565b73ffffffffffffffffffffffffffffffffffffffff1661172261134f565b73ffffffffffffffffffffffffffffffffffffffff16146117ab576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b6117d57f434f4e5452414354535f5245474953544552000000000000000000000000000082611d65565b50565b60006118037f56414e494c4c415f4143434f554e545f464143544f5259000000000000000000611c2a565b905090565b611810611d5d565b73ffffffffffffffffffffffffffffffffffffffff1661182e61134f565b73ffffffffffffffffffffffffffffffffffffffff16146118b7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b6118e17f56414e494c4c415f4143434f554e545f464143544f525900000000000000000082611d65565b50565b7f5452414445525f4143434f554e545f464143544f52590000000000000000000081565b611910611d5d565b73ffffffffffffffffffffffffffffffffffffffff1661192e61134f565b73ffffffffffffffffffffffffffffffffffffffff16146119b7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415611a3d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526026815260200180611e006026913960400191505060405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b611b02611d5d565b73ffffffffffffffffffffffffffffffffffffffff16611b2061134f565b73ffffffffffffffffffffffffffffffffffffffff1614611ba9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b611bd37f5452414445525f4143434f554e545f464143544f52590000000000000000000082611d65565b50565b7f434f4e5452414354535f5245474953544552000000000000000000000000000081565b6000611c257f50524943455f4f5241434c450000000000000000000000000000000000000000611c2a565b905090565b6000806001600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415604051806060016040528060218152602001611e266021913990611d53576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015611d18578082015181840152602081019050611cfd565b50505050905090810190601f168015611d455780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5080915050919050565b600033905090565b806001600084815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508073ffffffffffffffffffffffffffffffffffffffff16827fb37614c7d254ea8d16eb81fa11dddaeb266aa8ba4917980859c7740aff30c69160405160405180910390a3505056fe4f776e61626c653a206e6577206f776e657220697320746865207a65726f20616464726573734164647265737353746f726167653a2041646472657373206e6f7420666f756e64a2646970667358221220be3fd017988dc322cc89959d6a76303d4ce394db8588f5d3af0ce74aa301a46464736f6c63430007060033";