"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ICrediAccountExceptions__factory = void 0;
var ethers_1 = require("ethers");
var _abi = [
    {
        inputs: [],
        name: "CallerNotCreditManagerException",
        type: "error",
    },
    {
        inputs: [],
        name: "CallerNotFactoryException",
        type: "error",
    },
];
var ICrediAccountExceptions__factory = /** @class */ (function () {
    function ICrediAccountExceptions__factory() {
    }
    ICrediAccountExceptions__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    ICrediAccountExceptions__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    ICrediAccountExceptions__factory.abi = _abi;
    return ICrediAccountExceptions__factory;
}());
exports.ICrediAccountExceptions__factory = ICrediAccountExceptions__factory;