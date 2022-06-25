import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ConvexV1BaseRewardPoolAdapter, ConvexV1BaseRewardPoolAdapterInterface } from "../../../../../contracts/adapters/convex/ConvexV1_BaseRewardPool.sol/ConvexV1BaseRewardPoolAdapter";
declare type ConvexV1BaseRewardPoolAdapterConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class ConvexV1BaseRewardPoolAdapter__factory extends ContractFactory {
    constructor(...args: ConvexV1BaseRewardPoolAdapterConstructorParams);
    deploy(_creditManager: string, _baseRewardPool: string, _stakedPhantomToken: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ConvexV1BaseRewardPoolAdapter>;
    getDeployTransaction(_creditManager: string, _baseRewardPool: string, _stakedPhantomToken: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): ConvexV1BaseRewardPoolAdapter;
    connect(signer: Signer): ConvexV1BaseRewardPoolAdapter__factory;
    static readonly bytecode = "0x6101c06040523480156200001257600080fd5b5060405162003411380380620034118339810160408190526200003591620009a4565b82826001600160a01b03821615806200005557506001600160a01b038116155b156200007457604051635919af9760e11b815260040160405180910390fd5b6001600160a01b038216608081905260408051632f7a188160e01b81529051632f7a1881916004808201926020929091908290030181865afa158015620000bf573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620000e59190620009f8565b6001600160a01b0390811660a05290811660c0526001600055604080516372f702f360e01b8152905191851692506372f702f39160048083019260209291908290030181865afa1580156200013e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620001649190620009f8565b6001600160a01b0316610100816001600160a01b031681525050806001600160a01b0316610120816001600160a01b0316815250506000806000846001600160a01b031663d55a23f46040518163ffffffff1660e01b8152600401602060405180830381865afa158015620001dd573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000203919062000a1f565b905060018110620003bc57604051632061aa2360e11b8152600060048201526001600160a01b038616906340c3544690602401602060405180830381865afa15801562000254573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200027a9190620009f8565b6001600160a01b031663f7c618c16040518163ffffffff1660e01b8152600401602060405180830381865afa158015620002b8573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620002de9190620009f8565b925060028110620003bc57604051632061aa2360e11b8152600160048201526001600160a01b038616906340c3544690602401602060405180830381865afa1580156200032f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620003559190620009f8565b6001600160a01b031663f7c618c16040518163ffffffff1660e01b8152600401602060405180830381865afa15801562000393573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620003b99190620009f8565b91505b6001600160a01b0380841661014052828116610160526040805163570ca73560e01b8152905160009288169163570ca7359160048083019260209291908290030181865afa15801562000413573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620004399190620009f8565b9050806001600160a01b0316636a4874a16040518163ffffffff1660e01b8152600401602060405180830381865afa1580156200047a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620004a09190620009f8565b6001600160a01b0316610180816001600160a01b031681525050806001600160a01b031663075461726040518163ffffffff1660e01b8152600401602060405180830381865afa158015620004f9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200051f9190620009f8565b6001600160a01b03166101a0816001600160a01b0316815250506000816001600160a01b0316631526fe27886001600160a01b031663f10684546040518163ffffffff1660e01b8152600401602060405180830381865afa15801562000589573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620005af919062000a1f565b6040518263ffffffff1660e01b8152600401620005ce91815260200190565b60c060405180830381865afa158015620005ec573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000612919062000a4a565b80516001600160a01b0390811660e05260805161018051604051630f67c5bd60e41b81529083166004820152929350169063f67c5bd090602401602060405180830381865afa1580156200066a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000690919062000a1f565b620006c35761018051604051632262b1b560e21b81526001600160a01b0390911660048201526024015b60405180910390fd5b6080516101a051604051630f67c5bd60e41b81526001600160a01b03918216600482015291169063f67c5bd090602401602060405180830381865afa15801562000711573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000737919062000a1f565b62000766576101a051604051632262b1b560e21b81526001600160a01b039091166004820152602401620006ba565b60805160e051604051630f67c5bd60e41b81526001600160a01b03918216600482015291169063f67c5bd090602401602060405180830381865afa158015620007b3573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620007d9919062000a1f565b620008075760e051604051632262b1b560e21b81526001600160a01b039091166004820152602401620006ba565b6001600160a01b038516158015906200088e5750608051604051630f67c5bd60e41b81526001600160a01b0387811660048301529091169063f67c5bd090602401602060405180830381865afa15801562000866573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200088c919062000a1f565b155b15620008b957604051632262b1b560e21b81526001600160a01b0386166004820152602401620006ba565b6001600160a01b03841615801590620009405750608051604051630f67c5bd60e41b81526001600160a01b0386811660048301529091169063f67c5bd090602401602060405180830381865afa15801562000918573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200093e919062000a1f565b155b156200096b57604051632262b1b560e21b81526001600160a01b0385166004820152602401620006ba565b505050505050505062000b04565b6001600160a01b03811681146200098f57600080fd5b50565b80516200099f8162000979565b919050565b600080600060608486031215620009ba57600080fd5b8351620009c78162000979565b6020850151909350620009da8162000979565b6040850151909250620009ed8162000979565b809150509250925092565b60006020828403121562000a0b57600080fd5b815162000a188162000979565b9392505050565b60006020828403121562000a3257600080fd5b5051919050565b805180151581146200099f57600080fd5b600060c0828403121562000a5d57600080fd5b60405160c081016001600160401b038111828210171562000a8e57634e487b7160e01b600052604160045260246000fd5b60405262000a9c8362000992565b815262000aac6020840162000992565b602082015262000abf6040840162000992565b604082015262000ad26060840162000992565b606082015262000ae56080840162000992565b608082015262000af860a0840162000a39565b60a08201529392505050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516126fb62000d1660003960008181610508015261188e01526000818161045d01526117c701526000818161055601528181611a250152611aa60152600081816106450152818161191601526119a0015260008181610393015281816111c8015281816112c40152818161171d0152611be701526000818161057d015281816111a7015281816112a3015261173e01526000818161052f0152611c080152600081816105b7015281816106dc01528181610797015281816107cc01528181610862015281816108f3015281816109a601528181610bb001528181610c8801528181610d5101528181610dbe01528181610e2b01528181610ee401528181610faf01528181610fe401528181611051015281816110be0152818161116f015281816112330152818161136b015281816113d801528181611445015281816114b20152818161151f0152818161158c015281816115f901528181611ec901528181611fb701526120c60152600081816103e501528181611dc8015261216f0152600081816105de01528181610ad601528181610b81015281816116aa015281816117ef015281816118b6015281816119c801528181611ace01528181611b5f01528181611c9001528181611f0001528181611fee01528181612097015281816121ff01526122ad01526126fb6000f3fe608060405234801561001057600080fd5b50600436106102fe5760003560e01c80637b0a47ee1161019c578063c12c21c0116100ee578063da5b383f11610097578063f106845411610071578063f106845414610677578063f14faf6f1461067f578063f7c618c11461068d57600080fd5b8063da5b383f14610640578063df136d6514610667578063ebe2b12b1461066f57600080fd5b8063cd3daf9d116100c8578063cd3daf9d1461061b578063ce30bbdb14610623578063d55a23f41461063857600080fd5b8063c12c21c0146105d9578063c32e720214610600578063c8f33c911461061357600080fd5b8063923c1d611161015057806399253ac01161012a57806399253ac014610578578063a694fc3a1461059f578063bd90df70146105b257600080fd5b8063923c1d6114610503578063927188d91461052a57806397c3413b1461055157600080fd5b80638b876347116101815780638b876347146104e05780638dcb4061146104f3578063901a7d53146104fb57600080fd5b80637b0a47ee146104d057806380faa57d146104d857600080fd5b80633d18b912116102555780636a4874a11161020957806370a08231116101e357806370a082311461049a57806372f702f3146104ad57806378aa73a4146104b557600080fd5b80636a4874a1146104585780636c8bcee81461047f5780637050ccd91461048757600080fd5b806349f039a21161023a57806349f039a214610435578063570ca7351461044857806363d38c3b1461045057600080fd5b80633d18b9121461041a57806340c354461461042257600080fd5b80631c1c6fe5116102b75780632ee40908116102915780632ee40908146103bd5780632f7a1881146103e057806338d074361461040757600080fd5b80631c1c6fe51461037957806320b2c1511461038e578063262d3d6d146103b557600080fd5b80630f4ef8a6116102e85780630f4ef8a61461033c5780630fb5a6b41461036957806318160ddd1461037157600080fd5b80628cc262146103035780630700037d14610329575b600080fd5b610316610311366004612336565b610695565b6040519081526020015b60405180910390f35b610316610337366004612336565b61074f565b6103446107c8565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610320565b61031661085e565b6103166108ef565b61038c610387366004612361565b61095c565b005b6103447f000000000000000000000000000000000000000000000000000000000000000081565b6103166109a2565b6103d06103cb36600461237e565b610a0f565b6040519015158152602001610320565b6103447f000000000000000000000000000000000000000000000000000000000000000081565b6103d06104153660046123aa565b610a43565b6103d0610a8e565b6103446104303660046123da565b610c56565b61038c610443366004612361565b610d08565b610344610d4d565b610316610dba565b6103447f000000000000000000000000000000000000000000000000000000000000000081565b610316610e27565b6103d06104953660046123f3565b610e94565b6103166104a8366004612336565b610f67565b610344610fe0565b6104bd600181565b60405161ffff9091168152602001610320565b61031661104d565b6103166110ba565b6103166104ee366004612336565b611127565b6103d06111a0565b61031661122f565b6103447f000000000000000000000000000000000000000000000000000000000000000081565b6103447f000000000000000000000000000000000000000000000000000000000000000081565b6103447f000000000000000000000000000000000000000000000000000000000000000081565b6103447f000000000000000000000000000000000000000000000000000000000000000081565b6103d06105ad3660046123da565b61129c565b6103447f000000000000000000000000000000000000000000000000000000000000000081565b6103447f000000000000000000000000000000000000000000000000000000000000000081565b6103d061060e3660046123aa565b611323565b610316611367565b6103166113d4565b61062b600b81565b6040516103209190612421565b610316611441565b6103447f000000000000000000000000000000000000000000000000000000000000000081565b6103166114ae565b61031661151b565b610316611588565b6103d06103cb3660046123da565b6103446115f5565b6040517e8cc26200000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff82811660048301526000917f000000000000000000000000000000000000000000000000000000000000000090911690628cc262906024015b602060405180830381865afa158015610725573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107499190612462565b92915050565b6040517f0700037d00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff82811660048301526000917f000000000000000000000000000000000000000000000000000000000000000090911690630700037d90602401610708565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16630f4ef8a66040518163ffffffff1660e01b8152600401602060405180830381865afa158015610835573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610859919061247b565b905090565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16630fb5a6b46040518163ffffffff1660e01b8152600401602060405180830381865afa1580156108cb573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108599190612462565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166318160ddd6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156108cb573d6000803e3d6000fd5b61099e6000368080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250859250611662915050565b5050565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663262d3d6d6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156108cb573d6000803e3d6000fd5b60006040517f24e46f7000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000610a876000368080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250869250611662915050565b9392505050565b6040517fe958b704000000000000000000000000000000000000000000000000000000008152336004820152600090819073ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000169063e958b70490602401602060405180830381865afa158015610b1d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b41919061247b565b6040517f6ce4074a00000000000000000000000000000000000000000000000000000000815290915073ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001690636ce4074a90610bdd9033907f0000000000000000000000000000000000000000000000000000000000000000906000903690600401612498565b6000604051808303816000875af1158015610bfc573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201604052610c42919081019061256f565b50610c4e816001611782565b600191505090565b6040517f40c35446000000000000000000000000000000000000000000000000000000008152600481018290526000907f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16906340c3544690602401602060405180830381865afa158015610ce4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610749919061247b565b610d4a6000368080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250859250611b2e915050565b50565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663570ca7356040518163ffffffff1660e01b8152600401602060405180830381865afa158015610835573d6000803e3d6000fd5b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166363d38c3b6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156108cb573d6000803e3d6000fd5b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16636c8bcee86040518163ffffffff1660e01b8152600401602060405180830381865afa1580156108cb573d6000803e3d6000fd5b6040517f7050ccd900000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015282151560248301526000917f000000000000000000000000000000000000000000000000000000000000000090911690637050ccd9906044016020604051808303816000875af1158015610f2f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f53919061262f565b50610f5e8383611782565b50600192915050565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff82811660048301526000917f0000000000000000000000000000000000000000000000000000000000000000909116906370a0823190602401610708565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166372f702f36040518163ffffffff1660e01b8152600401602060405180830381865afa158015610835573d6000803e3d6000fd5b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16637b0a47ee6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156108cb573d6000803e3d6000fd5b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166380faa57d6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156108cb573d6000803e3d6000fd5b6040517f8b87634700000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff82811660048301526000917f000000000000000000000000000000000000000000000000000000000000000090911690638b87634790602401610708565b60006112277f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006000368080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920182905250600193509150611c479050565b506001905090565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663901a7d536040518163ffffffff1660e01b8152600401602060405180830381865afa1580156108cb573d6000803e3d6000fd5b6000610f5e7f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006000368080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920182905250600193509150611c479050565b6000610f5e6000368080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250869250611b2e915050565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663c8f33c916040518163ffffffff1660e01b8152600401602060405180830381865afa1580156108cb573d6000803e3d6000fd5b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663cd3daf9d6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156108cb573d6000803e3d6000fd5b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663d55a23f46040518163ffffffff1660e01b8152600401602060405180830381865afa1580156108cb573d6000803e3d6000fd5b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663df136d656040518163ffffffff1660e01b8152600401602060405180830381865afa1580156108cb573d6000803e3d6000fd5b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663ebe2b12b6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156108cb573d6000803e3d6000fd5b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663f10684546040518163ffffffff1660e01b8152600401602060405180830381865afa1580156108cb573d6000803e3d6000fd5b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663f7c618c16040518163ffffffff1660e01b8152600401602060405180830381865afa158015610835573d6000803e3d6000fd5b6040517fe958b704000000000000000000000000000000000000000000000000000000008152336004820152600090819073ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000169063e958b70490602401602060405180830381865afa1580156116f1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611715919061247b565b9050611766817f00000000000000000000000000000000000000000000000000000000000000007f000000000000000000000000000000000000000000000000000000000000000087600080611d16565b50821561177857611778816001611782565b5060019392505050565b6040517f51e3f16000000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff83811660048301527f0000000000000000000000000000000000000000000000000000000000000000811660248301527f000000000000000000000000000000000000000000000000000000000000000016906351e3f16090604401600060405180830381600087803b15801561183357600080fd5b505af1158015611847573d6000803e3d6000fd5b50506040517f51e3f16000000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff85811660048301527f0000000000000000000000000000000000000000000000000000000000000000811660248301527f00000000000000000000000000000000000000000000000000000000000000001692506351e3f1609150604401600060405180830381600087803b1580156118fc57600080fd5b505af1158015611910573d6000803e3d6000fd5b505050507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16158015906119565750805b1561099e576040517f51e3f16000000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff83811660048301527f0000000000000000000000000000000000000000000000000000000000000000811660248301527f000000000000000000000000000000000000000000000000000000000000000016906351e3f16090604401600060405180830381600087803b158015611a0c57600080fd5b505af1158015611a20573d6000803e3d6000fd5b5050507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1615905061099e576040517f51e3f16000000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff83811660048301527f0000000000000000000000000000000000000000000000000000000000000000811660248301527f000000000000000000000000000000000000000000000000000000000000000016906351e3f16090604401600060405180830381600087803b158015611b1257600080fd5b505af1158015611b26573d6000803e3d6000fd5b505050505050565b6040517fe958b7040000000000000000000000000000000000000000000000000000000081523360048201526000907f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff169063e958b70490602401602060405180830381865afa158015611bbb573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611bdf919061247b565b9050611c30817f00000000000000000000000000000000000000000000000000000000000000007f000000000000000000000000000000000000000000000000000000000000000086600080611d16565b508115611c4257611c42816001611782565b505050565b6040517fe958b70400000000000000000000000000000000000000000000000000000000815233600482015260609060009073ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000169063e958b70490602401602060405180830381865afa158015611cd7573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611cfb919061247b565b9050611d0b818888888888611d16565b979650505050505050565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff87811660048301526060916000918816906370a0823190602401602060405180830381865afa158015611d88573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611dac9190612462565b905060003373ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001614611e80576040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8a811660048301528816906370a0823190602401602060405180830381865afa158015611e59573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611e7d9190612462565b90505b8415611f5d576040517f46fb371d00000000000000000000000000000000000000000000000000000000815233600482015273ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000811660248301528981166044830152606482018490527f000000000000000000000000000000000000000000000000000000000000000016906346fb371d90608401600060405180830381600087803b158015611f4457600080fd5b505af1158015611f58573d6000803e3d6000fd5b505050505b611f6c8989898986868a612057565b9250841561204b576040517f46fb371d00000000000000000000000000000000000000000000000000000000815233600482015273ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000811660248301528981166044830152600160648301527f000000000000000000000000000000000000000000000000000000000000000016906346fb371d90608401600060405180830381600087803b15801561203257600080fd5b505af1158015612046573d6000803e3d6000fd5b505050505b50509695505050505050565b6040517f6ce4074a00000000000000000000000000000000000000000000000000000000815260609073ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001690636ce4074a906120f09033907f0000000000000000000000000000000000000000000000000000000000000000908a9060040161264c565b6000604051808303816000875af115801561210f573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201604052612155919081019061256f565b90503373ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001614612260576040517ffcb2ffbe00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff898116600483015288811660248301528781166044830152606482018690526084820185905283151560a48301527f0000000000000000000000000000000000000000000000000000000000000000169063fcb2ffbe9060c401600060405180830381600087803b15801561224357600080fd5b505af1158015612257573d6000803e3d6000fd5b50505050611d0b565b6040517f51e3f16000000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff898116600483015287811660248301527f000000000000000000000000000000000000000000000000000000000000000016906351e3f16090604401600060405180830381600087803b1580156122f157600080fd5b505af1158015612305573d6000803e3d6000fd5b50505050979650505050505050565b73ffffffffffffffffffffffffffffffffffffffff81168114610d4a57600080fd5b60006020828403121561234857600080fd5b8135610a8781612314565b8015158114610d4a57600080fd5b60006020828403121561237357600080fd5b8135610a8781612353565b6000806040838503121561239157600080fd5b823561239c81612314565b946020939093013593505050565b600080604083850312156123bd57600080fd5b8235915060208301356123cf81612353565b809150509250929050565b6000602082840312156123ec57600080fd5b5035919050565b6000806040838503121561240657600080fd5b823561241181612314565b915060208301356123cf81612353565b60208101600f831061245c577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b91905290565b60006020828403121561247457600080fd5b5051919050565b60006020828403121561248d57600080fd5b8151610a8781612314565b600073ffffffffffffffffffffffffffffffffffffffff8087168352808616602084015250606060408301528260608301528284608084013760006080848401015260807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f850116830101905095945050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60005b8381101561255a578181015183820152602001612542565b83811115612569576000848401525b50505050565b60006020828403121561258157600080fd5b815167ffffffffffffffff8082111561259957600080fd5b818401915084601f8301126125ad57600080fd5b8151818111156125bf576125bf612510565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810190838211818310171561260557612605612510565b8160405282815287602084870101111561261e57600080fd5b611d0b83602083016020880161253f565b60006020828403121561264157600080fd5b8151610a8781612353565b600073ffffffffffffffffffffffffffffffffffffffff808616835280851660208401525060606040830152825180606084015261269181608085016020870161253f565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169190910160800194935050505056fea26469706673582212202ff740f06ba63c56c7c30847f50f4704c1469d323b14753620ec45f66e35c88164736f6c634300080a0033";
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
    })[];
    static createInterface(): ConvexV1BaseRewardPoolAdapterInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ConvexV1BaseRewardPoolAdapter;
}
export {};
