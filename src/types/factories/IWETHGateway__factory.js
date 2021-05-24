"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.IWETHGateway__factory = void 0;
const ethers_1 = require("ethers");
class IWETHGateway__factory {
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.IWETHGateway__factory = IWETHGateway__factory;
const _abi = [
    {
        inputs: [
            {
                internalType: "address",
                name: "pool",
                type: "address",
            },
            {
                internalType: "address",
                name: "onBehalfOf",
                type: "address",
            },
            {
                internalType: "uint16",
                name: "referralCode",
                type: "uint16",
            },
        ],
        name: "addLiquidityETH",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "creditManager",
                type: "address",
            },
            {
                internalType: "address payable",
                name: "onBehalfOf",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "leverageFactor",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "referralCode",
                type: "uint256",
            },
        ],
        name: "openCreditAccountETH",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "pool",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
            {
                internalType: "address payable",
                name: "to",
                type: "address",
            },
        ],
        name: "removeLiquidityETH",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "creditManager",
                type: "address",
            },
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
        ],
        name: "repayCreditAccountETH",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "unwrapWETH",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];