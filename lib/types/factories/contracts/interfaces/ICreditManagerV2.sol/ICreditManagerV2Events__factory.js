"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ICreditManagerV2Events__factory = void 0;
var ethers_1 = require("ethers");
var _abi = [
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "borrower",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "target",
                type: "address",
            },
        ],
        name: "ExecuteOrder",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "newConfigurator",
                type: "address",
            },
        ],
        name: "NewConfigurator",
        type: "event",
    },
];
var ICreditManagerV2Events__factory = /** @class */ (function () {
    function ICreditManagerV2Events__factory() {
    }
    ICreditManagerV2Events__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    ICreditManagerV2Events__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    ICreditManagerV2Events__factory.abi = _abi;
    return ICreditManagerV2Events__factory;
}());
exports.ICreditManagerV2Events__factory = ICreditManagerV2Events__factory;