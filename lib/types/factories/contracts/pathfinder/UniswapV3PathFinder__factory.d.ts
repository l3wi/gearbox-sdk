import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { UniswapV3PathFinder, UniswapV3PathFinderInterface } from "../../../contracts/pathfinder/UniswapV3PathFinder";
declare type UniswapV3PathFinderConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class UniswapV3PathFinder__factory extends ContractFactory {
    constructor(...args: UniswapV3PathFinderConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<UniswapV3PathFinder>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): UniswapV3PathFinder;
    connect(signer: Signer): UniswapV3PathFinder__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b5061001a33610081565b73e592427a0aece92de3edee1f18e0157c0586156460005260016020527fbad1c9453febe4a6446e59e386c36af7924acc0d372d29859fea25e7a6eaac1780546001600160a01b03191673b27308f9f90d607463bb33ea1bebb41c27ce5ab61790556100d1565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b612604806100e06000396000f3fe608060405234801561001057600080fd5b50600436106100d45760003560e01c80636f33547d11610081578063c67903ea1161005b578063c67903ea14610208578063d7aa2e3514610269578063f2fde38b1461029a57600080fd5b80636f33547d146101cf578063715018a6146101e25780638da5cb5b146101ea57600080fd5b806345330666116100b2578063453306661461017d5780634acc79ed1461019257806354fd4d50146101b957600080fd5b80631b162e56146100d95780631bf64c41146101025780632a10672614610122575b600080fd5b6100ec6100e7366004611e57565b6102ad565b6040516100f99190611f30565b60405180910390f35b61011561011036600461206e565b610427565b6040516100f99190612157565b6101586101303660046121c6565b60016020526000908152604090205473ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016100f9565b61019061018b3660046121ea565b610805565b005b6101a56101a036600461223b565b6108e2565b60405162ffffff90911681526020016100f9565b6101c1600281565b6040519081526020016100f9565b6101156101dd36600461206e565b61094a565b610190610f2e565b60005473ffffffffffffffffffffffffffffffffffffffff16610158565b610190610216366004612254565b73ffffffffffffffffffffffffffffffffffffffff918216600090815260016020526040902080547fffffffffffffffffffffffff00000000000000000000000000000000000000001691909216179055565b6101c161027736600461228d565b600260209081526000938452604080852082529284528284209052825290205481565b6101906102a83660046121c6565b610fbb565b606060006102ba866108e2565b905060006102c7856108e2565b905060008960028111156102dd576102dd6122d8565b14806102fa575060018960028111156102f8576102f86122d8565b145b61038e576040517fffffffffffffffffffffffffffffffffffffffff000000000000000000000000606086811b821660208401527fffffff000000000000000000000000000000000000000000000000000000000060e885811b821660348601528a831b8416603786015286901b16604b8401528a901b16604e82015260620160405160208183030381529060405261041a565b6040517fffffffffffffffffffffffffffffffffffffffff00000000000000000000000060608a811b821660208401527fffffff000000000000000000000000000000000000000000000000000000000060e886811b821660348601528a831b8416603786015285901b16604b84015286901b16604e8201526062016040516020818303038152906040525b9998505050505050505050565b6104646040805160c08101909152600060808201908152606060a08301528190815260200160008152602001600015158152602001600081525090565b600283516002811115610479576104796122d8565b146104855760006104a7565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5b8160200181815250506000600160008473ffffffffffffffffffffffffffffffffffffffff1663bd90df706040518163ffffffff1660e01b8152600401602060405180830381865afa158015610501573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105259190612307565b73ffffffffffffffffffffffffffffffffffffffff9081168252602082019290925260400160009081205490911691505b60038110156107fd5761059c6040805160c08101909152600060808201908152606060a08301528190815260200160008152602001600015158152602001600081525090565b6105a5866110eb565b156106c6578273ffffffffffffffffffffffffffffffffffffffff1663f7729d43876040015188606001516105d9866108e2565b60a08b01516040517fffffffff0000000000000000000000000000000000000000000000000000000060e087901b16815273ffffffffffffffffffffffffffffffffffffffff948516600482015293909216602484015262ffffff16604483015260648201526000608482015260a4016020604051808303816000875af19250505080156106a2575060408051601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016820190925261069f91810190612324565b60015b6106ab576107de565b80156106c0576106bd87828886611184565b91505b506107de565b8273ffffffffffffffffffffffffffffffffffffffff166330d07f21876040015188606001516106f5866108e2565b60a08b01516040517fffffffff0000000000000000000000000000000000000000000000000000000060e087901b16815273ffffffffffffffffffffffffffffffffffffffff948516600482015293909216602484015262ffffff16604483015260648201526000608482015260a4016020604051808303816000875af19250505080156107be575060408051601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682019092526107bb91810190612324565b60015b6107c7576107de565b80156107dc576107d987828886611184565b91505b505b6107eb81878660006112a9565b156107f4578093505b50600101610556565b505092915050565b60005473ffffffffffffffffffffffffffffffffffffffff16331461088b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064015b60405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff93841660009081526002602090815260408083209587168084528683528184209590971683529381528382208390559384528281209481529390925290912055565b60006003821061091e576040517f50c1fe4a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b811561093c578160011461093457611388610940565b610bb8610940565b6103e85b61ffff1692915050565b6109876040805160c08101909152600060808201908152606060a08301528190815260200160008152602001600015158152602001600081525090565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1663bd90df706040518163ffffffff1660e01b8152600401602060405180830381865afa1580156109d8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109fc9190612307565b73ffffffffffffffffffffffffffffffffffffffff908116825260208201929092526040016000908120546080870151519216925085516002811115610a4457610a446122d8565b1480610a625750600185516002811115610a6057610a606122d8565b145b610a8c577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff610a8f565b60005b602084015260005b81811015610f255760005b6003811015610f1c5760005b6003811015610f13576000610af089600001518a60400151858c608001518881518110610add57610add61233d565b6020026020010151868e606001516102ad565b9050600080610afe8b6110eb565b15610be15760a08b01516040517fcdca175300000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8a169163cdca175391610b5a91879160040161236c565b6020604051808303816000875af1925050508015610bb3575060408051601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201909252610bb091810190612324565b60015b610bbc57610cbb565b8015801590610bce5750896020015181115b15610bdb57809250600191505b50610cbb565b60a08b01516040517f2f80bb1d00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8a1691632f80bb1d91610c3891879160040161236c565b6020604051808303816000875af1925050508015610c91575060408051601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201909252610c8e91810190612324565b60015b610c9a57610cbb565b8015801590610cac5750896020015181105b15610cb957809250600191505b505b8015610f0557600160408a015260208901829052610cdb8b838c866112c7565b896000018190525060008a73ffffffffffffffffffffffffffffffffffffffff1663bd90df706040518163ffffffff1660e01b8152600401602060405180830381865afa158015610d30573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d549190612307565b73ffffffffffffffffffffffffffffffffffffffff8116600090815260026020526040812060808f0151805193945090928a908110610d9557610d9561233d565b602002602001015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008d6060015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008e6040015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008e608001518a81518110610eb157610eb161233d565b602002602001015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610efe91906123bd565b60608b0152505b505050806001019050610aae565b50600101610aa2565b50600101610a97565b50505092915050565b60005473ffffffffffffffffffffffffffffffffffffffff163314610faf576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610882565b610fb9600061159d565b565b60005473ffffffffffffffffffffffffffffffffffffffff16331461103c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610882565b73ffffffffffffffffffffffffffffffffffffffff81166110df576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f64647265737300000000000000000000000000000000000000000000000000006064820152608401610882565b6110e88161159d565b50565b60008082516002811115611101576111016122d8565b148061111f575060018251600281111561111d5761111d6122d8565b145b1561112c57506001919050565b600282516002811115611141576111416122d8565b141561114f57506000919050565b81516040517ffe7995cf00000000000000000000000000000000000000000000000000000000815261088291906004016123d5565b6111c16040805160c08101909152600060808201908152606060a08301528190815260200160008152602001600015158152602001600081525090565b60016040820152602081018490526111db85858585611612565b816000018190525060008373ffffffffffffffffffffffffffffffffffffffff1663bd90df706040518163ffffffff1660e01b8152600401602060405180830381865afa158015611230573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112549190612307565b73ffffffffffffffffffffffffffffffffffffffff90811660009081526002602090815260408083208a82015185168452825280832060609a8b01519094168352929052205495820195909552949350505050565b60006112bc8585858660600151866119a4565b90505b949350505050565b6040805180820190915260008152606060208201526001855160028111156112f1576112f16122d8565b14156113f4576000604051806060016040528084815260200142610e1061131891906123bd565b81526020016113278888611ac7565b815250905060405180604001604052808573ffffffffffffffffffffffffffffffffffffffff16815260200163f4f18d9060e01b8360405160240161136c9190612416565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152905291506112bf9050565b600085516002811115611409576114096122d8565b14156114ae5760006040518060a00160405280848152602001876020015173ffffffffffffffffffffffffffffffffffffffff16815260200142610e1061145091906123bd565b815260a088015160208201526040016114698888611b01565b815250905060405180604001604052808573ffffffffffffffffffffffffffffffffffffffff16815260200163c04b8d5960e01b8360405160240161136c91906124b1565b6002855160028111156114c3576114c36122d8565b14156115685760006040518060a00160405280848152602001876020015173ffffffffffffffffffffffffffffffffffffffff16815260200142610e1061150a91906123bd565b815260a088015160208201526040016115238888611b01565b815250905060405180604001604052808573ffffffffffffffffffffffffffffffffffffffff16815260200163f28c049860e01b8360405160240161136c91906124b1565b84516040517ffe7995cf00000000000000000000000000000000000000000000000000000000815261088291906004016123d5565b6000805473ffffffffffffffffffffffffffffffffffffffff8381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b60408051808201909152600081526060602082015260018551600281111561163c5761163c6122d8565b141561175e5760006040518060c00160405280876040015173ffffffffffffffffffffffffffffffffffffffff168152602001876060015173ffffffffffffffffffffffffffffffffffffffff168152602001611698856108e2565b62ffffff1681526020016116ae42610e106123bd565b81526020016116bd8888611ac7565b8152600060209182015260408051808201825273ffffffffffffffffffffffffffffffffffffffff8881168252825185518216602482015285850151821660448201529285015162ffffff16606484015260608501516084840152608085015160a484015260a08501511660c4830152929350908201907fc7fbf4de000000000000000000000000000000000000000000000000000000009060e40161136c565b600085516002811115611773576117736122d8565b1415611881576000604051806101000160405280876040015173ffffffffffffffffffffffffffffffffffffffff168152602001876060015173ffffffffffffffffffffffffffffffffffffffff1681526020016117d0856108e2565b62ffffff16815260208881015173ffffffffffffffffffffffffffffffffffffffff169082015260400161180642610e106123bd565b815260a0880151602082015260400161181f8888611b01565b8152602001600073ffffffffffffffffffffffffffffffffffffffff16815250905060405180604001604052808573ffffffffffffffffffffffffffffffffffffffff16815260200163414bf38960e01b8360405160240161136c91906124c4565b600285516002811115611896576118966122d8565b1415611568576000604051806101000160405280876040015173ffffffffffffffffffffffffffffffffffffffff168152602001876060015173ffffffffffffffffffffffffffffffffffffffff1681526020016118f3856108e2565b62ffffff16815260208881015173ffffffffffffffffffffffffffffffffffffffff169082015260400161192942610e106123bd565b815260a088015160208201526040016119428888611b01565b8152602001600073ffffffffffffffffffffffffffffffffffffffff16815250905060405180604001604052808573ffffffffffffffffffffffffffffffffffffffff16815260200163db3e219860e01b8360405160240161136c91906124c4565b600085604001516119b757506000611abe565b83604001516119c857506001611abe565b6000611a258688602001516b033b2e3c9fd0803ce8000000868b606001516119f0919061253f565b6119fa919061257c565b60208901516b033b2e3c9fd0803ce8000000611a16898b61253f565b611a20919061257c565b611be8565b9050600086516002811115611a3c57611a3c6122d8565b1480611a5a5750600186516002811115611a5857611a586122d8565b145b15611a66579050611abe565b600286516002811115611a7b57611a7b6122d8565b1415611a8957159050611abe565b85516040517ffe7995cf00000000000000000000000000000000000000000000000000000000815261088291906004016123d5565b95945050505050565b60a0820151600090611aee84611ae9856b033b2e3c9fd0803ce800000061253f565b611b01565b611af8919061257c565b90505b92915050565b60008260e0015115611b1557506000611afb565b600083516002811115611b2a57611b2a6122d8565b1480611b485750600183516002811115611b4657611b466122d8565b145b15611b7b5760c083015161271090611b6090826125b7565b611b6a908461253f565b611b74919061257c565b9050611afb565b600283516002811115611b9057611b906122d8565b1415611bb35760c0830151611ba7906127106123bd565b611b6a6127108461253f565b82516040517ffe7995cf00000000000000000000000000000000000000000000000000000000815261088291906004016123d5565b6000611c286040518060400160405280600c81526020017f414141202d20616d6f756e740000000000000000000000000000000000000000815250611cd9565b611c3185611d68565b611c3a84611d68565b611c4383611d68565b611c4c82611d68565b611c5e611c5985876125b7565b611d68565b611c6b611c5983856125b7565b611c74866110eb565b611c9557611c8282846123bd565b611c8c85876123bd565b10159050611abe565b838510158015611ca55750818310155b15611cbe57611cb482846125b7565b611c8c85876125b7565b838510611ccc576001611ccf565b60005b9695505050505050565b6110e881604051602401611ced9190611f30565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f41304fac00000000000000000000000000000000000000000000000000000000179052611df5565b6110e881604051602401611d7e91815260200190565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167ff5b1bba9000000000000000000000000000000000000000000000000000000001790525b80516a636f6e736f6c652e6c6f67602083016000808483855afa5050505050565b803560038110611e2557600080fd5b919050565b73ffffffffffffffffffffffffffffffffffffffff811681146110e857600080fd5b8035611e2581611e2a565b60008060008060008060c08789031215611e7057600080fd5b611e7987611e16565b95506020870135611e8981611e2a565b9450604087013593506060870135611ea081611e2a565b92506080870135915060a0870135611eb781611e2a565b809150509295509295509295565b6000815180845260005b81811015611eeb57602081850181015186830182015201611ecf565b81811115611efd576000602083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b602081526000611af86020830184611ec5565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610100810167ffffffffffffffff81118282101715611f9657611f96611f43565b60405290565b600082601f830112611fad57600080fd5b8135602067ffffffffffffffff80831115611fca57611fca611f43565b8260051b6040517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0603f8301168101818110848211171561200d5761200d611f43565b60405293845285810183019383810192508785111561202b57600080fd5b83870191505b8482101561205357813561204481611e2a565b83529183019190830190612031565b979650505050505050565b80358015158114611e2557600080fd5b6000806040838503121561208157600080fd5b823567ffffffffffffffff8082111561209957600080fd5b9084019061010082870312156120ae57600080fd5b6120b6611f72565b6120bf83611e16565b81526120cd60208401611e4c565b60208201526120de60408401611e4c565b60408201526120ef60608401611e4c565b606082015260808301358281111561210657600080fd5b61211288828601611f9c565b60808301525060a083013560a082015260c083013560c082015261213860e0840161205e565b60e0820152935061214e91505060208401611e4c565b90509250929050565b60208082528251608083830152805173ffffffffffffffffffffffffffffffffffffffff1660a08401520151604060c083015260009061219a60e0840182611ec5565b905060208401516040840152604084015115156060840152606084015160808401528091505092915050565b6000602082840312156121d857600080fd5b81356121e381611e2a565b9392505050565b6000806000806080858703121561220057600080fd5b843561220b81611e2a565b9350602085013561221b81611e2a565b9250604085013561222b81611e2a565b9396929550929360600135925050565b60006020828403121561224d57600080fd5b5035919050565b6000806040838503121561226757600080fd5b823561227281611e2a565b9150602083013561228281611e2a565b809150509250929050565b6000806000606084860312156122a257600080fd5b83356122ad81611e2a565b925060208401356122bd81611e2a565b915060408401356122cd81611e2a565b809150509250925092565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b60006020828403121561231957600080fd5b81516121e381611e2a565b60006020828403121561233657600080fd5b5051919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60408152600061237f6040830185611ec5565b90508260208301529392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600082198211156123d0576123d061238e565b500190565b6020810160038310612410577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b91905290565b6020815260008251606060208401526124326080840182611ec5565b905060208401516040840152604084015160608401528091505092915050565b6000815160a0845261246760a0850182611ec5565b905073ffffffffffffffffffffffffffffffffffffffff60208401511660208501526040830151604085015260608301516060850152608083015160808501528091505092915050565b602081526000611af86020830184612452565b6101008101611afb828473ffffffffffffffffffffffffffffffffffffffff80825116835280602083015116602084015262ffffff60408301511660408401528060608301511660608401526080820151608084015260a082015160a084015260c082015160c08401528060e08301511660e0840152505050565b6000817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04831182151516156125775761257761238e565b500290565b6000826125b2577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b500490565b6000828210156125c9576125c961238e565b50039056fea2646970667358221220f48bf290d42d727585d0174d5aecb1c111d9a28593d6c27486ce6672041893ce64736f6c634300080a0033";
    static readonly abi: ({
        inputs: never[];
        stateMutability: string;
        type: string;
        name?: undefined;
        anonymous?: undefined;
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
        anonymous?: undefined;
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
    } | {
        inputs: ({
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
            internalType: string;
            name: string;
            type: string;
        } | {
            internalType: string;
            name: string;
            type: string;
            components?: undefined;
        })[];
        name: string;
        outputs: {
            components: ({
                components: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                internalType: string;
                name: string;
                type: string;
            } | {
                internalType: string;
                name: string;
                type: string;
                components?: undefined;
            })[];
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[];
    static createInterface(): UniswapV3PathFinderInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): UniswapV3PathFinder;
}
export {};