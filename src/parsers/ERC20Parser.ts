import { SupportedToken } from "../tokens/token";
import { IERC20__factory } from "../types";
import { AbstractParser } from "./abstractParser";
import { IParser } from "./iParser";

export class ERC20Parser extends AbstractParser implements IParser {
  constructor(symbol: SupportedToken) {
    super(symbol);
    this.adapterName = "Token";
    this.ifc = IERC20__factory.createInterface();
  }
  parse(calldata: string): string {
    const { functionFragment, functionName } = this.parseSelector(calldata);

    switch (functionFragment.name) {
      case "totalSupply": {
        return `${functionName}`;
      }
      case "balanceOf": {
        const [address] = this.decodeFunctionData(functionFragment, calldata);

        return `${functionName}(${address})`;
      }

      default:
        return `${functionName}: Unknown operation ${functionFragment.name} with calldata ${calldata}`;
    }
  }
}
