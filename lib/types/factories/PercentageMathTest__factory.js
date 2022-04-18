"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.PercentageMathTest__factory = void 0;
var ethers_1 = require("ethers");
var _abi = [
    {
        inputs: [
            {
                internalType: "uint256",
                name: "value",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "percentage",
                type: "uint256",
            },
        ],
        name: "percentDiv",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "value",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "percentage",
                type: "uint256",
            },
        ],
        name: "percentMul",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "pure",
        type: "function",
    },
];
var _bytecode = "0x608060405234801561001057600080fd5b506104b7806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c806346c840bb1461003b5780634bf6a8f014610087575b600080fd5b6100716004803603604081101561005157600080fd5b8101908080359060200190929190803590602001909291905050506100d3565b6040518082815260200191505060405180910390f35b6100bd6004803603604081101561009d57600080fd5b8101908080359060200190929190803590602001909291905050506100f0565b6040518082815260200191505060405180910390f35b60006100e8828461010d90919063ffffffff16565b905092915050565b6000610105828461032690919063ffffffff16565b905092915050565b6000808214156040518060400160405280600281526020017f4d33000000000000000000000000000000000000000000000000000000000000815250906101ef576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b838110156101b4578082015181840152602081019050610199565b50505050905090810190601f1680156101e15780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b506000600283816101fc57fe5b049050612710817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038161022c57fe5b048411156040518060400160405280600281526020017f4d310000000000000000000000000000000000000000000000000000000000008152509061030c576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b838110156102d15780820151818401526020810190506102b6565b50505050905090810190601f1680156102fe5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5082816127108602018161031c57fe5b0491505092915050565b6000808314806103365750600082145b15610344576000905061047b565b8160026127108161035157fe5b047fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038161037b57fe5b048311156040518060400160405280600281526020017f4d310000000000000000000000000000000000000000000000000000000000008152509061045b576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015610420578082015181840152602081019050610405565b50505050905090810190601f16801561044d5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5061271060026127108161046b57fe5b04838502018161047757fe5b0490505b9291505056fea2646970667358221220ae21d1be88b4fe3206b5937cf70329b6991bf37aab2d27d59bcd9d49a6f1db1364736f6c63430007060033";
var PercentageMathTest__factory = /** @class */ (function (_super) {
    __extends(PercentageMathTest__factory, _super);
    function PercentageMathTest__factory(signer) {
        return _super.call(this, _abi, _bytecode, signer) || this;
    }
    PercentageMathTest__factory.prototype.deploy = function (overrides) {
        return _super.prototype.deploy.call(this, overrides || {});
    };
    PercentageMathTest__factory.prototype.getDeployTransaction = function (overrides) {
        return _super.prototype.getDeployTransaction.call(this, overrides || {});
    };
    PercentageMathTest__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    PercentageMathTest__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    PercentageMathTest__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    PercentageMathTest__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    PercentageMathTest__factory.bytecode = _bytecode;
    PercentageMathTest__factory.abi = _abi;
    return PercentageMathTest__factory;
}(ethers_1.ContractFactory));
exports.PercentageMathTest__factory = PercentageMathTest__factory;