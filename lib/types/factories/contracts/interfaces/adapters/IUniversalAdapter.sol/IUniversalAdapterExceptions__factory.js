"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.IUniversalAdapterExceptions__factory = void 0;
var ethers_1 = require("ethers");
var _abi = [
    {
        inputs: [
            {
                internalType: "address",
                name: "expected",
                type: "address",
            },
            {
                internalType: "address",
                name: "actual",
                type: "address",
            },
        ],
        name: "UnexpectedCreditAccountException",
        type: "error",
    },
];
var IUniversalAdapterExceptions__factory = /** @class */ (function () {
    function IUniversalAdapterExceptions__factory() {
    }
    IUniversalAdapterExceptions__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    IUniversalAdapterExceptions__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    IUniversalAdapterExceptions__factory.abi = _abi;
    return IUniversalAdapterExceptions__factory;
}());
exports.IUniversalAdapterExceptions__factory = IUniversalAdapterExceptions__factory;