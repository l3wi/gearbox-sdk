"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.IPriceOracle__factory = void 0;
const ethers_1 = require("ethers");
class IPriceOracle__factory {
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.IPriceOracle__factory = IPriceOracle__factory;
const _abi = [
    {
        inputs: [
            {
                internalType: "address",
                name: "token",
                type: "address",
            },
            {
                internalType: "address",
                name: "priceFeedToken",
                type: "address",
            },
        ],
        name: "addPriceFeed",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
            {
                internalType: "address",
                name: "tokenFrom",
                type: "address",
            },
            {
                internalType: "address",
                name: "tokenTo",
                type: "address",
            },
        ],
        name: "convert",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "tokenFrom",
                type: "address",
            },
            {
                internalType: "address",
                name: "tokenTo",
                type: "address",
            },
        ],
        name: "getLastPrice",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
];