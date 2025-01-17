import { BigNumber } from "ethers";

import { STATIC_TOKEN } from "../config";
import { NetworkType } from "../core/chains";
import { TokenDataPayload } from "../payload/token";
import { SupportedToken, tokenDataByNetwork } from "./token";

type SymbolReplacements = Record<string, string>;
const defaultSymbolReplacement: SymbolReplacements = {
  dWETH: "dETH",
  WETH: "ETH",
};

export class TokenData {
  public readonly id: string;

  public readonly symbol: string;

  public readonly address: string;

  public readonly decimals: number;

  public readonly icon?: string;

  constructor(
    payload: TokenDataPayload,
    symbolReplacements: SymbolReplacements = defaultSymbolReplacement,
  ) {
    this.id = payload.addr.toLowerCase();
    this.address = payload.addr.toLowerCase();
    this.symbol = symbolReplacements[payload.symbol] || payload.symbol;
    this.decimals = payload.decimals;
    this.icon = `${STATIC_TOKEN}${payload.symbol?.toLowerCase()}.svg`;
  }

  compareBySymbol(b: TokenData): number {
    return this.symbol > b.symbol ? 1 : -1;
  }
}

export interface TokenBalance {
  id: string;
  balance: BigNumber;
}

export interface TokenAllowance {
  id: string;
  allowance: BigNumber;
}

export const connectors: Record<NetworkType, Array<SupportedToken>> = {
  Mainnet: [
    "WETH",
    "1INCH",
    "DAI",
    "USDC",
    // "USDT",
    "WBTC",
    // "stETH",
    // "PAX",
    // "TUSD",
    // "BNT",
    // "BAL",
    // "sUSD",
  ],
  Goerli: ["WETH", "DAI", "USDC", "WBTC"],
};

export function getConnectors(networkType: NetworkType) {
  return connectors[networkType].map(e => {
    const result = tokenDataByNetwork[networkType][e];

    if (!result) {
      throw new Error(`connector token ${e} not found`);
    }
    return result;
  });
}
