import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ExtraRewardPoolMock, ExtraRewardPoolMockInterface } from "../../../../../../contracts/test/mocks/integrations/ConvexExtraRewardPoolMock.sol/ExtraRewardPoolMock";
declare type ExtraRewardPoolMockConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class ExtraRewardPoolMock__factory extends ContractFactory {
    constructor(...args: ExtraRewardPoolMockConstructorParams);
    deploy(deposit_: string, reward_: string, op_: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ExtraRewardPoolMock>;
    getDeployTransaction(deposit_: string, reward_: string, op_: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): ExtraRewardPoolMock;
    connect(signer: Signer): ExtraRewardPoolMock__factory;
    static readonly bytecode = "0x6080604052600180546001600160a01b031916737109709ecfa91a80626ff3989d68f67f5b1dd12d17905560006004819055600581905560088190556009819055600a819055600d819055600e5534801561005957600080fd5b50604051611127380380611127833981016040819052610078916100d6565b600080546001600160a01b039485166001600160a01b031991821617909155600280549385169382169390931790925560038054919093169116179055610119565b80516001600160a01b03811681146100d157600080fd5b919050565b6000806000606084860312156100eb57600080fd5b6100f4846100ba565b9250610102602085016100ba565b9150610110604085016100ba565b90509250925092565b610fff806101286000396000f3fe608060405234801561001057600080fd5b50600436106101a25760003560e01c80637b0a47ee116100ee578063c8f33c9111610097578063ebe2b12b11610071578063ebe2b12b14610345578063f14faf6f14610285578063f3fef3a31461034e578063f7c618c11461036157600080fd5b8063c8f33c911461032b578063cd3daf9d14610334578063df136d651461033c57600080fd5b80639b7ccf4c116100c85780639b7ccf4c146102f0578063adc9772e14610305578063c00007b01461031857600080fd5b80637b0a47ee146102be5780638b876347146102c7578063901a7d53146102e757600080fd5b80633d18b9121161015057806363d38c3b1161012a57806363d38c3b146102995780636c8bcee8146102a257806370a08231146102ab57600080fd5b80633d18b9121461024d578063570ca73514610265578063590a41f51461028557600080fd5b806318160ddd1161018157806318160ddd146101f7578063262d3d6d146101ff578063323a5e0b1461020857600080fd5b80628cc262146101a75780630700037d146101cd5780630fb5a6b4146101ed575b600080fd5b6101ba6101b5366004610d9c565b610381565b6040519081526020015b60405180910390f35b6101ba6101db366004610d9c565b600c6020526000908152604090205481565b6101ba62093a8081565b6101ba6103fd565b6101ba600a5481565b6000546102289073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016101c4565b610255610494565b60405190151581526020016101c4565b6003546102289073ffffffffffffffffffffffffffffffffffffffff1681565b610255610293366004610db9565b50600190565b6101ba60085481565b6101ba61033e81565b6101ba6102b9366004610d9c565b6104a7565b6101ba60055481565b6101ba6102d5366004610d9c565b600b6020526000908152604090205481565b6101ba60095481565b6103036102fe366004610db9565b61053c565b005b610255610313366004610dd2565b61073f565b610255610326366004610d9c565b610815565b6101ba60065481565b6007546101ba565b6101ba60075481565b6101ba60045481565b61025561035c366004610dd2565b61090a565b6002546102289073ffffffffffffffffffffffffffffffffffffffff1681565b73ffffffffffffffffffffffffffffffffffffffff81166000908152600c6020908152604080832054600b9092528220546103f791906103f190670de0b6b3a7640000906103eb906103dc906103d660075490565b906109b6565b6103e5886104a7565b906109c9565b906109d5565b906109e1565b92915050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166318160ddd6040518163ffffffff1660e01b8152600401602060405180830381865afa15801561046b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061048f9190610dfe565b905090565b600061049f33610815565b506001905090565b600080546040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8481166004830152909116906370a0823190602401602060405180830381865afa158015610518573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103f79190610dfe565b600154600254604080517f07546172000000000000000000000000000000000000000000000000000000008152905173ffffffffffffffffffffffffffffffffffffffff9384169363ca669fa793169163075461729160048083019260209291908290030181865afa1580156105b6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105da9190610e17565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e084901b16815273ffffffffffffffffffffffffffffffffffffffff9091166004820152602401600060405180830381600087803b15801561064057600080fd5b505af1158015610654573d6000803e3d6000fd5b50506002546040517f40c10f190000000000000000000000000000000000000000000000000000000081523060048201526024810185905273ffffffffffffffffffffffffffffffffffffffff90911692506340c10f1991506044016020604051808303816000875af11580156106cf573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106f39190610e34565b506106fc6103fd565b1561073c576107096103fd565b61071b82670de0b6b3a7640000610e85565b6107259190610ec2565b600760008282546107369190610efd565b90915550505b50565b60008273ffffffffffffffffffffffffffffffffffffffff8116156107a05761076781610381565b73ffffffffffffffffffffffffffffffffffffffff82166000908152600c6020908152604080832093909355600754600b909152919020555b8373ffffffffffffffffffffffffffffffffffffffff16600e547fd198b93c3f48daa3d45cc61906c9e4716488eeb15e548a75d758b920def2594b856040516107eb91815260200190565b60405180910390a36001600e60008282546108069190610efd565b90915550600195945050505050565b60008173ffffffffffffffffffffffffffffffffffffffff8116156108765761083d81610381565b73ffffffffffffffffffffffffffffffffffffffff82166000908152600c6020908152604080832093909355600754600b909152919020555b600061088184610381565b905080156108bf5773ffffffffffffffffffffffffffffffffffffffff8085166000908152600c60205260408120556002546108bf911685836109ed565b8373ffffffffffffffffffffffffffffffffffffffff16600e547f7f6ed0d42a688c853d54c432db2c486796be01babc08c81d92cc84fac254e53a836040516107eb91815260200190565b60008273ffffffffffffffffffffffffffffffffffffffff81161561096b5761093281610381565b73ffffffffffffffffffffffffffffffffffffffff82166000908152600c6020908152604080832093909355600754600b909152919020555b8373ffffffffffffffffffffffffffffffffffffffff16600e547f13da9d660b9991f6835852ad20002cecf1c4664a804c5b315539e1f8934c56df856040516107eb91815260200190565b60006109c28284610f15565b9392505050565b60006109c28284610e85565b60006109c28284610ec2565b60006109c28284610efd565b6040805173ffffffffffffffffffffffffffffffffffffffff8416602482015260448082018490528251808303909101815260649091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fa9059cbb00000000000000000000000000000000000000000000000000000000179052610a7a908490610a7f565b505050565b6000610ae1826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16610b909092919063ffffffff16565b805190915015610a7a5780806020019051810190610aff9190610e34565b610a7a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f7420737563636565640000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b6060610b9f8484600085610ba7565b949350505050565b606082471015610c39576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610b87565b843b610ca1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610b87565b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051610cca9190610f5c565b60006040518083038185875af1925050503d8060008114610d07576040519150601f19603f3d011682016040523d82523d6000602084013e610d0c565b606091505b5091509150610d1c828286610d27565b979650505050505050565b60608315610d365750816109c2565b825115610d465782518084602001fd5b816040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b879190610f78565b73ffffffffffffffffffffffffffffffffffffffff8116811461073c57600080fd5b600060208284031215610dae57600080fd5b81356109c281610d7a565b600060208284031215610dcb57600080fd5b5035919050565b60008060408385031215610de557600080fd5b8235610df081610d7a565b946020939093013593505050565b600060208284031215610e1057600080fd5b5051919050565b600060208284031215610e2957600080fd5b81516109c281610d7a565b600060208284031215610e4657600080fd5b815180151581146109c257600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615610ebd57610ebd610e56565b500290565b600082610ef8577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b500490565b60008219821115610f1057610f10610e56565b500190565b600082821015610f2757610f27610e56565b500390565b60005b83811015610f47578181015183820152602001610f2f565b83811115610f56576000848401525b50505050565b60008251610f6e818460208701610f2c565b9190910192915050565b6020815260008251806020840152610f97816040850160208701610f2c565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016919091016040019291505056fea264697066735822122013a51166472332e5e2ac321ca9393ea866608195601d48e21c806a65ea0f543964736f6c634300080a0033";
    static readonly abi: ({
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
        name?: undefined;
        outputs?: undefined;
    } | {
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        stateMutability?: undefined;
        outputs?: undefined;
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
    static createInterface(): ExtraRewardPoolMockInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ExtraRewardPoolMock;
}
export {};
