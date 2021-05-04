import {CostStrategy} from "../CostStrategy";
import {PackagePacificParcelStrategy} from "../package/PackagePacificParcelStrategy";

export class OversizedPacificParcelStrategy extends CostStrategy {
  getCost(): number {
    const packageCharge = new PackagePacificParcelStrategy(this.weight).getCost();
    return packageCharge + 0.02 * this.weight;
  }
}
