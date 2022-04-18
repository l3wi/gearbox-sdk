import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { CurveV1Adapter, CurveV1AdapterInterface } from "../CurveV1Adapter";
export declare class CurveV1Adapter__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(_creditManager: string, _curvePool: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<CurveV1Adapter>;
    getDeployTransaction(_creditManager: string, _curvePool: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): CurveV1Adapter;
    connect(signer: Signer): CurveV1Adapter__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b5060405161154d38038061154d8339818101604052604081101561003357600080fd5b8101908080519060200190929190805190602001909291905050506001600081905550600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141580156100c05750600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614155b6040518060400160405280600281526020017f5a300000000000000000000000000000000000000000000000000000000000008152509061019c576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015610161578082015181840152602081019050610146565b50505050905090810190601f16801561018e5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5081600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663f93f515b6040518163ffffffff1660e01b815260040160206040518083038186803b15801561024657600080fd5b505afa15801561025a573d6000803e3d6000fd5b505050506040513d602081101561027057600080fd5b8101908080519060200190929190505050600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505061123a806103136000396000f3fe608060405234801561001057600080fd5b50600436106100935760003560e01c8063a6417ed611610066578063a6417ed6146101d6578063bb7b8b8014610228578063c12c21c014610246578063c66106571461027a578063f93f515b146102d257610093565b806307211ef714610098578063218751b2146100f45780633df02124146101285780635e0d443f1461017a575b600080fd5b6100de600480360360608110156100ae57600080fd5b810190808035600f0b90602001909291908035600f0b906020019092919080359060200190929190505050610306565b6040518082815260200191505060405180910390f35b6100fc6103d5565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6101786004803603608081101561013e57600080fd5b810190808035600f0b90602001909291908035600f0b906020019092919080359060200190929190803590602001909291905050506103fb565b005b6101c06004803603606081101561019057600080fd5b810190808035600f0b90602001909291908035600f0b906020019092919080359060200190929190505050610e2e565b6040518082815260200191505060405180910390f35b610226600480360360808110156101ec57600080fd5b810190808035600f0b90602001909291908035600f0b90602001909291908035906020019092919080359060200190929190505050610efd565b005b610230610fd4565b6040518082815260200191505060405180910390f35b61024e61107e565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6102a66004803603602081101561029057600080fd5b81019080803590602001909291905050506110a4565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6102da61115b565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166307211ef78585856040518463ffffffff1660e01b81526004018084600f0b815260200183600f0b8152602001828152602001935050505060206040518083038186803b15801561039157600080fd5b505afa1580156103a5573d6000803e3d6000fd5b505050506040513d60208110156103bb57600080fd5b810190808051906020019092919050505090509392505050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60026000541415610474576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0081525060200191505060405180910390fd5b60026000819055506000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663e958b704336040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b15801561050757600080fd5b505afa15801561051b573d6000803e3d6000fd5b505050506040513d602081101561053157600080fd5b810190808051906020019092919050505090506000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663c661065787600f0b6040518263ffffffff1660e01b81526004018082815260200191505060206040518083038186803b1580156105bc57600080fd5b505afa1580156105d0573d6000803e3d6000fd5b505050506040513d60208110156105e657600080fd5b810190808051906020019092919050505090506000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663c661065787600f0b6040518263ffffffff1660e01b81526004018082815260200191505060206040518083038186803b15801561067157600080fd5b505afa158015610685573d6000803e3d6000fd5b505050506040513d602081101561069b57600080fd5b81019080805190602001909291905050509050600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663579122ab84600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16856040518463ffffffff1660e01b8152600401808473ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1681526020019350505050600060405180830381600087803b15801561079757600080fd5b505af11580156107ab573d6000803e3d6000fd5b5050505060008273ffffffffffffffffffffffffffffffffffffffff166370a08231856040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b15801561081857600080fd5b505afa15801561082c573d6000803e3d6000fd5b505050506040513d602081101561084257600080fd5b8101908080519060200190929190505050905060008273ffffffffffffffffffffffffffffffffffffffff166370a08231866040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b1580156108be57600080fd5b505afa1580156108d2573d6000803e3d6000fd5b505050506040513d60208110156108e857600080fd5b810190808051906020019092919050505090506000633df0212460e01b8a8a8a8a6040516024018085600f0b815260200184600f0b8152602001838152602001828152602001945050505050604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050509050600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16636ce4074a33600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16846040518463ffffffff1660e01b8152600401808473ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff16815260200180602001828103825283818151815260200191508051906020019080838360005b83811015610a7d578082015181840152602081019050610a62565b50505050905090810190601f168015610aaa5780820380516001836020036101000a031916815260200191505b50945050505050600060405180830381600087803b158015610acb57600080fd5b505af1158015610adf573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f820116820180604052506020811015610b0957600080fd5b8101908080516040519392919084640100000000821115610b2957600080fd5b83820191506020820185811115610b3f57600080fd5b8251866001820283011164010000000082111715610b5c57600080fd5b8083526020830192505050908051906020019080838360005b83811015610b90578082015181840152602081019050610b75565b50505050905090810190601f168015610bbd5780820380516001836020036101000a031916815260200191505b5060405250505050600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663e1c8ef0d878787610cba8a73ffffffffffffffffffffffffffffffffffffffff166370a082318d6040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b158015610c7057600080fd5b505afa158015610c84573d6000803e3d6000fd5b505050506040513d6020811015610c9a57600080fd5b81019080805190602001909291905050508961118190919063ffffffff16565b610d6e888b73ffffffffffffffffffffffffffffffffffffffff166370a082318f6040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b158015610d2557600080fd5b505afa158015610d39573d6000803e3d6000fd5b505050506040513d6020811015610d4f57600080fd5b810190808051906020019092919050505061118190919063ffffffff16565b6040518663ffffffff1660e01b8152600401808673ffffffffffffffffffffffffffffffffffffffff1681526020018573ffffffffffffffffffffffffffffffffffffffff1681526020018473ffffffffffffffffffffffffffffffffffffffff16815260200183815260200182815260200195505050505050600060405180830381600087803b158015610e0257600080fd5b505af1158015610e16573d6000803e3d6000fd5b50505050505050505050600160008190555050505050565b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16635e0d443f8585856040518463ffffffff1660e01b81526004018084600f0b815260200183600f0b8152602001828152602001935050505060206040518083038186803b158015610eb957600080fd5b505afa158015610ecd573d6000803e3d6000fd5b505050506040513d6020811015610ee357600080fd5b810190808051906020019092919050505090509392505050565b6040518060400160405280600281526020017f4e490000000000000000000000000000000000000000000000000000000000008152506040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015610f99578082015181840152602081019050610f7e565b50505050905090810190601f168015610fc65780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663bb7b8b806040518163ffffffff1660e01b815260040160206040518083038186803b15801561103e57600080fd5b505afa158015611052573d6000803e3d6000fd5b505050506040513d602081101561106857600080fd5b8101908080519060200190929190505050905090565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663c6610657836040518263ffffffff1660e01b81526004018082815260200191505060206040518083038186803b15801561111957600080fd5b505afa15801561112d573d6000803e3d6000fd5b505050506040513d602081101561114357600080fd5b81019080805190602001909291905050509050919050565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000828211156111f9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601e8152602001807f536166654d6174683a207375627472616374696f6e206f766572666c6f77000081525060200191505060405180910390fd5b81830390509291505056fea2646970667358221220c3ed5b0356f44bf0369337d4890cf08a1cdfd478701d0f453f65436aa9d2566d64736f6c63430007060033";
    static readonly abi: ({
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        name?: undefined;
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
    })[];
    static createInterface(): CurveV1AdapterInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): CurveV1Adapter;
}