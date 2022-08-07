/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  CreditManagerMockForPoolTest,
  CreditManagerMockForPoolTestInterface,
} from "../../../../../contracts/test/mocks/pool/CreditManagerMockForPoolTest";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_poolService",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newPool",
        type: "address",
      },
    ],
    name: "changePoolService",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "creditAccount",
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
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "getCreditAccountOrRevert",
    outputs: [
      {
        internalType: "address",
        name: "result",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "borrowedAmount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "ca",
        type: "address",
      },
    ],
    name: "lendCreditAccount",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "poolService",
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
    inputs: [
      {
        internalType: "uint256",
        name: "borrowedAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "profit",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "loss",
        type: "uint256",
      },
    ],
    name: "repayCreditAccount",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "underlying",
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
];

const _bytecode =
  "0x6080604052600280546001600160a01b03191673c4375b7de8af5a38a93548eb8453a498222c4ff217905534801561003657600080fd5b5060405161046c38038061046c8339810160408190526100559161007a565b600080546001600160a01b0319166001600160a01b03929092169190911790556100aa565b60006020828403121561008c57600080fd5b81516001600160a01b03811681146100a357600080fd5b9392505050565b6103b3806100b96000396000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c8063bf28068b1161005b578063bf28068b1461010b578063c8cca9e514610120578063ca9505e414610175578063e958b7041461018857600080fd5b8063570a7af2146100825780636d0a1218146100cb5780636f307dc3146100eb575b600080fd5b6000546100a29073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b6002546100a29073ffffffffffffffffffffffffffffffffffffffff1681565b6001546100a29073ffffffffffffffffffffffffffffffffffffffff1681565b61011e610119366004610303565b6101b3565b005b61011e61012e36600461032f565b600080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b61011e610183366004610351565b610243565b6100a261019636600461032f565b5060025473ffffffffffffffffffffffffffffffffffffffff1690565b6000546040517fbf28068b0000000000000000000000000000000000000000000000000000000081526004810184905273ffffffffffffffffffffffffffffffffffffffff83811660248301529091169063bf28068b90604401600060405180830381600087803b15801561022757600080fd5b505af115801561023b573d6000803e3d6000fd5b505050505050565b6000546040517fca9505e400000000000000000000000000000000000000000000000000000000815260048101859052602481018490526044810183905273ffffffffffffffffffffffffffffffffffffffff9091169063ca9505e490606401600060405180830381600087803b1580156102bd57600080fd5b505af11580156102d1573d6000803e3d6000fd5b50505050505050565b803573ffffffffffffffffffffffffffffffffffffffff811681146102fe57600080fd5b919050565b6000806040838503121561031657600080fd5b82359150610326602084016102da565b90509250929050565b60006020828403121561034157600080fd5b61034a826102da565b9392505050565b60008060006060848603121561036657600080fd5b50508135936020830135935060409092013591905056fea2646970667358221220e29e625436d382630e7a0373aafe5230ccc0f5a960595820d041897bf0d7850c64736f6c634300080a0033";

type CreditManagerMockForPoolTestConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CreditManagerMockForPoolTestConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class CreditManagerMockForPoolTest__factory extends ContractFactory {
  constructor(...args: CreditManagerMockForPoolTestConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _poolService: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<CreditManagerMockForPoolTest> {
    return super.deploy(
      _poolService,
      overrides || {}
    ) as Promise<CreditManagerMockForPoolTest>;
  }
  override getDeployTransaction(
    _poolService: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_poolService, overrides || {});
  }
  override attach(address: string): CreditManagerMockForPoolTest {
    return super.attach(address) as CreditManagerMockForPoolTest;
  }
  override connect(signer: Signer): CreditManagerMockForPoolTest__factory {
    return super.connect(signer) as CreditManagerMockForPoolTest__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CreditManagerMockForPoolTestInterface {
    return new utils.Interface(_abi) as CreditManagerMockForPoolTestInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CreditManagerMockForPoolTest {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as CreditManagerMockForPoolTest;
  }
}
