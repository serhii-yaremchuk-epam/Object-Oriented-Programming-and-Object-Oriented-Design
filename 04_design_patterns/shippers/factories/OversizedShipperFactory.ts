import {ShipperFactory} from "./ShipperFactory";
import {CostStrategy} from "../../cost-strategies/CostStrategy";
import {OversizedAirEastStrategy} from "../../cost-strategies/oversized/OversizedAirEastStrategy";
import {OversizedChicagoSprintStrategy} from "../../cost-strategies/oversized/OversizedChicagoSprintStrategy";
import {OversizedPacificParcelStrategy} from "../../cost-strategies/oversized/OversizedPacificParcelStrategy";

export class OversizedShipperFactory extends ShipperFactory {
  getAirEastCostStrategy(): CostStrategy {
    return new OversizedAirEastStrategy(this.weight);
  }

  getChicagoSprintStrategy(): CostStrategy {
    return new OversizedChicagoSprintStrategy(this.weight);
  }

  getPacificParcelStrategy(): CostStrategy {
    return new OversizedPacificParcelStrategy(this.weight);
  }
}
