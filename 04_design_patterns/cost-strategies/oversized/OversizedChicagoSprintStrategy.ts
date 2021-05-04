import {CostStrategy} from "../CostStrategy";

export class OversizedChicagoSprintStrategy extends CostStrategy {
  getCost(): number {
    return 0;
  }
}
