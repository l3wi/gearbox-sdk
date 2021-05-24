import {BigNumberish} from "ethers";

export interface PoolDataPayload {
  addr: string;
  underlyingToken: string;
  dieselToken: string;
  isWETH: boolean;
  expectedLiquidity: BigNumberish;
  availableLiquidity: BigNumberish;
  totalBorrowed: BigNumberish;
  depositAPY_RAY: BigNumberish;
  borrowAPY_RAY: BigNumberish;
  dieselRate_RAY: BigNumberish;
  withdrawFee: BigNumberish;
}
