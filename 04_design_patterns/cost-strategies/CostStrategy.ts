export abstract class CostStrategy {
  protected weight: number;
  protected rate?: number;

  constructor(weight: number) {
    this.weight = weight;
  }

  getCost(): number {
    if (!this.rate) {
      return null;
    }

    return this.weight * this.rate;
  }
}
