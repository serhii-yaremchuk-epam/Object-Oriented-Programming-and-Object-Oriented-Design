import {ShipperFactory} from "./ShipperFactory";
import {CostStrategy} from "../../cost-strategies/CostStrategy";
import {LetterAirEastStrategy} from "../../cost-strategies/letter/LetterAirEastStrategy";
import {LetterChicagoSprintStrategy} from "../../cost-strategies/letter/LetterChicagoSprintStrategy";
import {LetterPacificParcelStrategy} from "../../cost-strategies/letter/LetterPacificParcelStrategy";

export class LetterShipperFactory extends ShipperFactory {
  getAirEastCostStrategy(): CostStrategy {
    return new LetterAirEastStrategy(this.weight);
  }

  getChicagoSprintStrategy(): CostStrategy {
    return new LetterChicagoSprintStrategy(this.weight);
  }

  getPacificParcelStrategy(): CostStrategy {
    return new LetterPacificParcelStrategy(this.weight);
  }
}
