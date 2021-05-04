import {ShipperFactory} from "./ShipperFactory";
import {CostStrategy} from "../../cost-strategies/CostStrategy";
import {PackagePacificParcelStrategy} from "../../cost-strategies/package/PackagePacificParcelStrategy";
import {PackageAirEastStrategy} from "../../cost-strategies/package/PackageAirEastStrategy";
import {PackageChicagoSprintStrategy} from "../../cost-strategies/package/PackageChicagoSprintStrategy";

export class PackageShipperFactory extends ShipperFactory {
  getAirEastCostStrategy(): CostStrategy {
    return new PackageAirEastStrategy(this.weight);
  }

  getChicagoSprintStrategy(): CostStrategy {
    return new PackageChicagoSprintStrategy(this.weight);
  }

  getPacificParcelStrategy(): CostStrategy {
    return new PackagePacificParcelStrategy(this.weight);
  }
}
