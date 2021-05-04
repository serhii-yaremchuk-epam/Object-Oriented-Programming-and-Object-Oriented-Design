import {CostStrategy} from "../CostStrategy";
import {PackageAirEastStrategy} from "../package/PackageAirEastStrategy";

export class OversizedAirEastStrategy extends CostStrategy {
  getCost(): number {
    const packageCharge = new PackageAirEastStrategy(this.weight).getCost();
    return packageCharge + 10;
  }
}
