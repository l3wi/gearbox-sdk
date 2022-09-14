/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IDataCompressor,
  IDataCompressorInterface,
} from "../../../../contracts/interfaces/IDataCompressor.sol/IDataCompressor";

const _abi = [
  {
    inputs: [],
    name: "NotCreditManagerException",
    type: "error",
  },
  {
    inputs: [],
    name: "NotPoolException",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_creditManager",
        type: "address",
      },
      {
        internalType: "address",
        name: "_allowedContract",
        type: "address",
      },
    ],
    name: "getAdapter",
    outputs: [
      {
        internalType: "address",
        name: "adapter",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_creditManager",
        type: "address",
      },
      {
        internalType: "address",
        name: "borrower",
        type: "address",
      },
    ],
    name: "getCreditAccountData",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "addr",
            type: "address",
          },
          {
            internalType: "address",
            name: "borrower",
            type: "address",
          },
          {
            internalType: "bool",
            name: "inUse",
            type: "bool",
          },
          {
            internalType: "address",
            name: "creditManager",
            type: "address",
          },
          {
            internalType: "address",
            name: "underlying",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "borrowedAmountPlusInterest",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "borrowedAmountPlusInterestAndFees",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "totalValue",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "healthFactor",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "borrowRate",
            type: "uint256",
          },
          {
            components: [
              {
                internalType: "address",
                name: "token",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "balance",
                type: "uint256",
              },
              {
                internalType: "bool",
                name: "isAllowed",
                type: "bool",
              },
              {
                internalType: "bool",
                name: "isEnabled",
                type: "bool",
              },
            ],
            internalType: "struct TokenBalance[]",
            name: "balances",
            type: "tuple[]",
          },
          {
            internalType: "uint256",
            name: "repayAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "liquidationAmount",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "canBeClosed",
            type: "bool",
          },
          {
            internalType: "uint256",
            name: "borrowedAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "cumulativeIndexAtOpen",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "since",
            type: "uint256",
          },
          {
            internalType: "uint8",
            name: "version",
            type: "uint8",
          },
          {
            internalType: "uint256",
            name: "enabledTokenMask",
            type: "uint256",
          },
        ],
        internalType: "struct CreditAccountData",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "borrower",
        type: "address",
      },
    ],
    name: "getCreditAccountList",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "addr",
            type: "address",
          },
          {
            internalType: "address",
            name: "borrower",
            type: "address",
          },
          {
            internalType: "bool",
            name: "inUse",
            type: "bool",
          },
          {
            internalType: "address",
            name: "creditManager",
            type: "address",
          },
          {
            internalType: "address",
            name: "underlying",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "borrowedAmountPlusInterest",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "borrowedAmountPlusInterestAndFees",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "totalValue",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "healthFactor",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "borrowRate",
            type: "uint256",
          },
          {
            components: [
              {
                internalType: "address",
                name: "token",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "balance",
                type: "uint256",
              },
              {
                internalType: "bool",
                name: "isAllowed",
                type: "bool",
              },
              {
                internalType: "bool",
                name: "isEnabled",
                type: "bool",
              },
            ],
            internalType: "struct TokenBalance[]",
            name: "balances",
            type: "tuple[]",
          },
          {
            internalType: "uint256",
            name: "repayAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "liquidationAmount",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "canBeClosed",
            type: "bool",
          },
          {
            internalType: "uint256",
            name: "borrowedAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "cumulativeIndexAtOpen",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "since",
            type: "uint256",
          },
          {
            internalType: "uint8",
            name: "version",
            type: "uint8",
          },
          {
            internalType: "uint256",
            name: "enabledTokenMask",
            type: "uint256",
          },
        ],
        internalType: "struct CreditAccountData[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_creditManager",
        type: "address",
      },
    ],
    name: "getCreditManagerData",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "addr",
            type: "address",
          },
          {
            internalType: "address",
            name: "underlying",
            type: "address",
          },
          {
            internalType: "address",
            name: "pool",
            type: "address",
          },
          {
            internalType: "bool",
            name: "isWETH",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "canBorrow",
            type: "bool",
          },
          {
            internalType: "uint256",
            name: "borrowRate",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "minAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxLeverageFactor",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "availableLiquidity",
            type: "uint256",
          },
          {
            internalType: "address[]",
            name: "collateralTokens",
            type: "address[]",
          },
          {
            components: [
              {
                internalType: "address",
                name: "allowedContract",
                type: "address",
              },
              {
                internalType: "address",
                name: "adapter",
                type: "address",
              },
            ],
            internalType: "struct ContractAdapter[]",
            name: "adapters",
            type: "tuple[]",
          },
          {
            internalType: "uint256[]",
            name: "liquidationThresholds",
            type: "uint256[]",
          },
          {
            internalType: "uint8",
            name: "version",
            type: "uint8",
          },
          {
            internalType: "address",
            name: "creditFacade",
            type: "address",
          },
          {
            internalType: "address",
            name: "creditConfigurator",
            type: "address",
          },
          {
            internalType: "bool",
            name: "isDegenMode",
            type: "bool",
          },
          {
            internalType: "address",
            name: "degenNFT",
            type: "address",
          },
          {
            internalType: "bool",
            name: "isIncreaseDebtForbidden",
            type: "bool",
          },
          {
            internalType: "uint256",
            name: "forbiddenTokenMask",
            type: "uint256",
          },
          {
            internalType: "uint8",
            name: "maxEnabledTokensLength",
            type: "uint8",
          },
          {
            internalType: "uint16",
            name: "feeInterest",
            type: "uint16",
          },
          {
            internalType: "uint16",
            name: "feeLiquidation",
            type: "uint16",
          },
          {
            internalType: "uint16",
            name: "liquidationDiscount",
            type: "uint16",
          },
          {
            internalType: "uint16",
            name: "feeLiquidationExpired",
            type: "uint16",
          },
          {
            internalType: "uint16",
            name: "liquidationDiscountExpired",
            type: "uint16",
          },
        ],
        internalType: "struct CreditManagerData",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getCreditManagersList",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "addr",
            type: "address",
          },
          {
            internalType: "address",
            name: "underlying",
            type: "address",
          },
          {
            internalType: "address",
            name: "pool",
            type: "address",
          },
          {
            internalType: "bool",
            name: "isWETH",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "canBorrow",
            type: "bool",
          },
          {
            internalType: "uint256",
            name: "borrowRate",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "minAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxLeverageFactor",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "availableLiquidity",
            type: "uint256",
          },
          {
            internalType: "address[]",
            name: "collateralTokens",
            type: "address[]",
          },
          {
            components: [
              {
                internalType: "address",
                name: "allowedContract",
                type: "address",
              },
              {
                internalType: "address",
                name: "adapter",
                type: "address",
              },
            ],
            internalType: "struct ContractAdapter[]",
            name: "adapters",
            type: "tuple[]",
          },
          {
            internalType: "uint256[]",
            name: "liquidationThresholds",
            type: "uint256[]",
          },
          {
            internalType: "uint8",
            name: "version",
            type: "uint8",
          },
          {
            internalType: "address",
            name: "creditFacade",
            type: "address",
          },
          {
            internalType: "address",
            name: "creditConfigurator",
            type: "address",
          },
          {
            internalType: "bool",
            name: "isDegenMode",
            type: "bool",
          },
          {
            internalType: "address",
            name: "degenNFT",
            type: "address",
          },
          {
            internalType: "bool",
            name: "isIncreaseDebtForbidden",
            type: "bool",
          },
          {
            internalType: "uint256",
            name: "forbiddenTokenMask",
            type: "uint256",
          },
          {
            internalType: "uint8",
            name: "maxEnabledTokensLength",
            type: "uint8",
          },
          {
            internalType: "uint16",
            name: "feeInterest",
            type: "uint16",
          },
          {
            internalType: "uint16",
            name: "feeLiquidation",
            type: "uint16",
          },
          {
            internalType: "uint16",
            name: "liquidationDiscount",
            type: "uint16",
          },
          {
            internalType: "uint16",
            name: "feeLiquidationExpired",
            type: "uint16",
          },
          {
            internalType: "uint16",
            name: "liquidationDiscountExpired",
            type: "uint16",
          },
        ],
        internalType: "struct CreditManagerData[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_pool",
        type: "address",
      },
    ],
    name: "getPoolData",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "addr",
            type: "address",
          },
          {
            internalType: "bool",
            name: "isWETH",
            type: "bool",
          },
          {
            internalType: "address",
            name: "underlying",
            type: "address",
          },
          {
            internalType: "address",
            name: "dieselToken",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "linearCumulativeIndex",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "availableLiquidity",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "expectedLiquidity",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "expectedLiquidityLimit",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "totalBorrowed",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "depositAPY_RAY",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "borrowAPY_RAY",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "dieselRate_RAY",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "withdrawFee",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "cumulativeIndex_RAY",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "timestampLU",
            type: "uint256",
          },
          {
            internalType: "uint8",
            name: "version",
            type: "uint8",
          },
        ],
        internalType: "struct PoolData",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getPoolsList",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "addr",
            type: "address",
          },
          {
            internalType: "bool",
            name: "isWETH",
            type: "bool",
          },
          {
            internalType: "address",
            name: "underlying",
            type: "address",
          },
          {
            internalType: "address",
            name: "dieselToken",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "linearCumulativeIndex",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "availableLiquidity",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "expectedLiquidity",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "expectedLiquidityLimit",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "totalBorrowed",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "depositAPY_RAY",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "borrowAPY_RAY",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "dieselRate_RAY",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "withdrawFee",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "cumulativeIndex_RAY",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "timestampLU",
            type: "uint256",
          },
          {
            internalType: "uint8",
            name: "version",
            type: "uint8",
          },
        ],
        internalType: "struct PoolData[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
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
        name: "borrower",
        type: "address",
      },
    ],
    name: "hasOpenedCreditAccount",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "version",
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

export class IDataCompressor__factory {
  static readonly abi = _abi;
  static createInterface(): IDataCompressorInterface {
    return new utils.Interface(_abi) as IDataCompressorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IDataCompressor {
    return new Contract(address, _abi, signerOrProvider) as IDataCompressor;
  }
}
