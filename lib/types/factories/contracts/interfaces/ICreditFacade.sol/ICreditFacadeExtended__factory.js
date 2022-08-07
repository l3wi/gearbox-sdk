"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ICreditFacadeExtended__factory = void 0;
var ethers_1 = require("ethers");
var _abi = [
    {
        inputs: [
            {
                internalType: "address",
                name: "token",
                type: "address",
            },
        ],
        name: "disableToken",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "token",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "minBalance",
                type: "uint256",
            },
        ],
        name: "revertIfBalanceLessThan",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
var ICreditFacadeExtended__factory = /** @class */ (function () {
    function ICreditFacadeExtended__factory() {
    }
    ICreditFacadeExtended__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    ICreditFacadeExtended__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    ICreditFacadeExtended__factory.abi = _abi;
    return ICreditFacadeExtended__factory;
}());
exports.ICreditFacadeExtended__factory = ICreditFacadeExtended__factory;