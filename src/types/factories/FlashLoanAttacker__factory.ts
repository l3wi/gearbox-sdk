/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  FlashLoanAttacker,
  FlashLoanAttackerInterface,
} from "../FlashLoanAttacker";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "creditManager",
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
      {
        components: [
          {
            internalType: "address[]",
            name: "path",
            type: "address[]",
          },
          {
            internalType: "uint256",
            name: "amountOutMin",
            type: "uint256",
          },
        ],
        internalType: "struct DataTypes.Exchange[]",
        name: "paths",
        type: "tuple[]",
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
  "0x608060405234801561001057600080fd5b50604051610caa380380610caa8339818101604052810190610032919061008d565b806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550506100ff565b600081519050610087816100e8565b92915050565b60006020828403121561009f57600080fd5b60006100ad84828501610078565b91505092915050565b60006100c1826100c8565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6100f1816100b6565b81146100fc57600080fd5b50565b610b9c8061010e6000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c80631c1fab631461003b578063e6b8925a14610057575b600080fd5b610055600480360381019061005091906106cb565b610073565b005b610071600480360381019061006c919061068f565b61030c565b005b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16632495a5996040518163ffffffff1660e01b815260040160206040518083038186803b1580156100dc57600080fd5b505afa1580156100f0573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610114919061063d565b90508073ffffffffffffffffffffffffffffffffffffffff1663095ea7b360008054906101000a900473ffffffffffffffffffffffffffffffffffffffff167fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6040518363ffffffff1660e01b815260040161019192919061092a565b602060405180830381600087803b1580156101ab57600080fd5b505af11580156101bf573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101e39190610666565b5060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16635288ba4b86308760006040518563ffffffff1660e01b81526004016102449493929190610953565b600060405180830381600087803b15801561025e57600080fd5b505af1158015610272573d6000803e3d6000fd5b5050505060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663ab1148053085856040518463ffffffff1660e01b81526004016102d3939291906108f8565b600060405180830381600087803b1580156102ed57600080fd5b505af1158015610301573d6000803e3d6000fd5b505050505050505050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16632495a5996040518163ffffffff1660e01b815260040160206040518083038186803b15801561037557600080fd5b505afa158015610389573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103ad919061063d565b90508073ffffffffffffffffffffffffffffffffffffffff1663095ea7b360008054906101000a900473ffffffffffffffffffffffffffffffffffffffff167fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6040518363ffffffff1660e01b815260040161042a92919061092a565b602060405180830381600087803b15801561044457600080fd5b505af1158015610458573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061047c9190610666565b5060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16635288ba4b84308560006040518563ffffffff1660e01b81526004016104dd9493929190610953565b600060405180830381600087803b1580156104f757600080fd5b505af115801561050b573d6000803e3d6000fd5b5050505060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663d692ba33306040518263ffffffff1660e01b815260040161056891906108dd565b600060405180830381600087803b15801561058257600080fd5b505af1158015610596573d6000803e3d6000fd5b50505050505050565b6000813590506105ae81610b21565b92915050565b6000815190506105c381610b21565b92915050565b60008083601f8401126105db57600080fd5b8235905067ffffffffffffffff8111156105f457600080fd5b60208301915083602082028301111561060c57600080fd5b9250929050565b60008151905061062281610b38565b92915050565b60008135905061063781610b4f565b92915050565b60006020828403121561064f57600080fd5b600061065d848285016105b4565b91505092915050565b60006020828403121561067857600080fd5b600061068684828501610613565b91505092915050565b600080604083850312156106a257600080fd5b60006106b085828601610628565b92505060206106c185828601610628565b9150509250929050565b600080600080606085870312156106e157600080fd5b60006106ef87828801610628565b945050602061070087828801610628565b935050604085013567ffffffffffffffff81111561071d57600080fd5b610729878288016105c9565b925092505092959194509250565b60006107438383610772565b60208301905092915050565b600061075b8383610870565b905092915050565b61076c81610ad9565b82525050565b61077b81610a91565b82525050565b61078a81610a91565b82525050565b600061079c83856109c6565b93506107a782610998565b8060005b858110156107e0576107bd82846109e8565b6107c78882610737565b97506107d2836109ac565b9250506001810190506107ab565b5085925050509392505050565b60006107f983856109d7565b93508360208402850161080b846109a2565b8060005b8781101561084f5784840389526108268284610a56565b610830858261074f565b945061083b836109b9565b925060208a0199505060018101905061080f565b50829750879450505050509392505050565b61086a81610aeb565b82525050565b60006040830161088360008401846109ff565b8583036000870152610896838284610790565b925050506108a76020840184610a7a565b6108b460208601826108bf565b508091505092915050565b6108c881610acf565b82525050565b6108d781610acf565b82525050565b60006020820190506108f26000830184610781565b92915050565b600060408201905061090d6000830186610781565b81810360208301526109208184866107ed565b9050949350505050565b600060408201905061093f6000830185610781565b61094c60208301846108ce565b9392505050565b600060808201905061096860008301876108ce565b6109756020830186610763565b61098260408301856108ce565b61098f6060830184610861565b95945050505050565b6000819050919050565b6000819050919050565b6000602082019050919050565b6000602082019050919050565b600082825260208201905092915050565b600082825260208201905092915050565b60006109f7602084018461059f565b905092915050565b60008083356001602003843603038112610a1857600080fd5b83810192508235915060208301925067ffffffffffffffff821115610a3c57600080fd5b602082023603841315610a4e57600080fd5b509250929050565b600082356001604003833603038112610a6e57600080fd5b82810191505092915050565b6000610a896020840184610628565b905092915050565b6000610a9c82610aaf565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b6000610ae482610afd565b9050919050565b6000610af682610acf565b9050919050565b6000610b0882610b0f565b9050919050565b6000610b1a82610aaf565b9050919050565b610b2a81610a91565b8114610b3557600080fd5b50565b610b4181610aa3565b8114610b4c57600080fd5b50565b610b5881610acf565b8114610b6357600080fd5b5056fea2646970667358221220115827e550e5b69c41c8444423b53130937a0d0f99640284913dd02129db6acb64736f6c63430007060033";

export class FlashLoanAttacker__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    creditManager: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<FlashLoanAttacker> {
    return super.deploy(
      creditManager,
      overrides || {}
    ) as Promise<FlashLoanAttacker>;
  }
  getDeployTransaction(
    creditManager: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(creditManager, overrides || {});
  }
  attach(address: string): FlashLoanAttacker {
    return super.attach(address) as FlashLoanAttacker;
  }
  connect(signer: Signer): FlashLoanAttacker__factory {
    return super.connect(signer) as FlashLoanAttacker__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): FlashLoanAttackerInterface {
    return new utils.Interface(_abi) as FlashLoanAttackerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): FlashLoanAttacker {
    return new Contract(address, _abi, signerOrProvider) as FlashLoanAttacker;
  }
}
