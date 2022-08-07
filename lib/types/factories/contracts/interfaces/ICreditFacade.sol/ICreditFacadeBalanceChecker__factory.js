"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ICreditFacadeBalanceChecker__factory = void 0;
var ethers_1 = require("ethers");
var _abi = [
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
var ICreditFacadeBalanceChecker__factory = /** @class */ (function () {
    function ICreditFacadeBalanceChecker__factory() {
    }
    ICreditFacadeBalanceChecker__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    ICreditFacadeBalanceChecker__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    ICreditFacadeBalanceChecker__factory.abi = _abi;
    return ICreditFacadeBalanceChecker__factory;
}());
exports.ICreditFacadeBalanceChecker__factory = ICreditFacadeBalanceChecker__factory;