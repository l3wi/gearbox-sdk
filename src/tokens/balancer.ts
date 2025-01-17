import { TradeType } from "../pathfinder/tradeTypes";
import { NormalToken } from "./normal";
import type { TokenBase } from "./token";
import { TokenType } from "./tokenType";

export type BalancerLPToken = "50OHM_50DAI" | "50OHM_50WETH" | "OHM_wstETH";

export type BalancerLpTokenData = {
  symbol: BalancerLPToken;
  type: TokenType.BALANCER_LP_TOKEN;
  underlying: Array<NormalToken | BalancerLPToken>;
  lpActions: Array<
    | {
        type: TradeType.BalancerJoin;
        contract: "BALANCER_VAULT";
        tokenOut: BalancerLPToken;
      }
    | {
        type: TradeType.BalancerExit;
        contract: "BALANCER_VAULT";
        tokenOut: Array<NormalToken | BalancerLPToken>;
      }
  >;
  poolId: string;
} & TokenBase;

export const balancerLpTokens: Record<BalancerLPToken, BalancerLpTokenData> = {
  "50OHM_50DAI": {
    name: "Balancer 50OHM_50DAI",
    symbol: "50OHM_50DAI",
    type: TokenType.BALANCER_LP_TOKEN,
    underlying: ["OHM", "DAI"],
    poolId:
      "0x76fcf0e8c7ff37a47a799fa2cd4c13cde0d981c90002000000000000000003d2",
    lpActions: [
      {
        type: TradeType.BalancerExit,
        contract: "BALANCER_VAULT",
        tokenOut: ["OHM", "DAI"],
      },
    ],
  },
  "50OHM_50WETH": {
    name: "Balancer 50OHM_50WETH",
    symbol: "50OHM_50WETH",
    type: TokenType.BALANCER_LP_TOKEN,
    underlying: ["OHM", "WETH"],
    poolId:
      "0xd1ec5e215e8148d76f4460e4097fd3d5ae0a35580002000000000000000003d3",
    lpActions: [
      {
        type: TradeType.BalancerExit,
        contract: "BALANCER_VAULT",
        tokenOut: ["OHM", "WETH"],
      },
    ],
  },
  OHM_wstETH: {
    name: "Balancer OHM_wstETH",
    symbol: "OHM_wstETH",
    type: TokenType.BALANCER_LP_TOKEN,
    underlying: ["OHM", "wstETH"],
    poolId:
      "0xd4f79ca0ac83192693bce4699d0c10c66aa6cf0f00020000000000000000047e",
    lpActions: [
      {
        type: TradeType.BalancerExit,
        contract: "BALANCER_VAULT",
        tokenOut: ["OHM", "wstETH"],
      },
    ],
  },
};

export const isBalancerLPToken = (t: unknown): t is BalancerLPToken =>
  typeof t === "string" && !!balancerLpTokens[t as BalancerLPToken];
