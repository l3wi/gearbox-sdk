import { expect } from "chai";
import { BigNumber } from "ethers";

import { decimals } from "../tokens/decimals";
import { tokenDataByNetwork } from "../tokens/token";
import { toBN, toSignificant } from "../utils/formatter";
import {
  LEVERAGE_DECIMALS,
  PRICE_DECIMALS_POW,
  WAD_DECIMALS_POW,
} from "./constants";
import { Strategy, StrategyPayload } from "./strategy";

const lidoPayload: StrategyPayload = {
  name: "Lido",
  lpToken: tokenDataByNetwork.Mainnet.STETH,

  apy: 38434,

  pools: [tokenDataByNetwork.Mainnet.WETH],

  unleveragableCollateral: [
    tokenDataByNetwork.Mainnet.USDC,
    tokenDataByNetwork.Mainnet.DAI,
    tokenDataByNetwork.Mainnet.WBTC,
  ],
  leveragableCollateral: [],

  baseAssets: [tokenDataByNetwork.Mainnet.WETH],
};

const lidoStrategy = new Strategy(lidoPayload);

const pools = {
  "0x1": {
    borrowRate: 27543,
  },
  "0x2": {
    borrowRate: 5736,
  },
} as const;

const prices = {
  [tokenDataByNetwork.Mainnet.WETH.toLowerCase()]: toBN(
    "1738.11830000",
    PRICE_DECIMALS_POW,
  ),
  [tokenDataByNetwork.Mainnet.DAI.toLowerCase()]: toBN(
    "0.99941103",
    PRICE_DECIMALS_POW,
  ),
  [tokenDataByNetwork.Mainnet.STETH.toLowerCase()]: toBN(
    "1703.87588096",
    PRICE_DECIMALS_POW,
  ),
};

const liquidationThresholds = {
  [tokenDataByNetwork.Mainnet.DAI.toLowerCase()]: BigNumber.from("9300"),
  [tokenDataByNetwork.Mainnet.WETH.toLowerCase()]: BigNumber.from("8500"),
  [tokenDataByNetwork.Mainnet.STETH.toLowerCase()]: BigNumber.from("9000"),
};

describe("Strategy test", () => {
  it("maxAPY calculation is correct", () => {
    const result = lidoStrategy.maxAPY(
      53203,
      10 * LEVERAGE_DECIMALS,
      pools["0x1"].borrowRate,
    );

    expect(result).to.be.eq(284143);
  });
  it("overallAPY calculation is correct", () => {
    const result = lidoStrategy.overallAPY(
      lidoStrategy.apy || 0,
      10 * LEVERAGE_DECIMALS,
      tokenDataByNetwork.Mainnet.WETH,
      pools["0x2"].borrowRate,
    );

    expect(result).to.be.eq(332716);
  });
  it("liquidationPrice calculation is correct", () => {
    const result = Strategy.liquidationPrice({
      liquidationThresholds,
      prices,
      borrowed: toBN("350", decimals.WETH),
      underlyingToken: tokenDataByNetwork.Mainnet.WETH,
      lpAmount: toBN("400", decimals.STETH),
      lpToken: tokenDataByNetwork.Mainnet.STETH,
    });

    expect(Number(toSignificant(result, WAD_DECIMALS_POW)).toFixed(3)).to.be.eq(
      "0.992",
    );
  });
  it("maxLeverage is correct", () => {
    const result = Strategy.maxLeverage(tokenDataByNetwork.Mainnet.STETH, [
      { address: "0x1", liquidationThresholds },
    ]);

    expect(result).to.be.eq(9 * LEVERAGE_DECIMALS);
  });
});
