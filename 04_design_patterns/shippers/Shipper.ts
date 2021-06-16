import {CostStrategy} from "../cost-strategies/CostStrategy";

export abstract class Shipper {
  protected weight: number;
  private costStrategy: CostStrategy;

  constructor(weight: number) {
    this.weight = weight;
  }

  getCost(): number {
    return this.costStrategy.getCost();
  }

  setCostStrategy(strategy: CostStrategy) {
    this.costStrategy = strategy;
  }
}
