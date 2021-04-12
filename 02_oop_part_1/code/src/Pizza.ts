import {Consumable} from "./Consumable";

export class Pizza extends Consumable {
  private numberOfSlices: number;
  private slicesEaten: number;

  constructor(numberOfSlices: number, spoiled: boolean) {
    super('pizza', 1, 2, spoiled);

    this.numberOfSlices = numberOfSlices;
  }

  public eat(): string {
    if (this.slicesEaten < this.numberOfSlices) {
      this.slicesEaten++;

      if (this.slicesEaten >= this.numberOfSlices) {
        this.setConsumed(true);
      }

      return 'You eat a slice of the pizza.';
    }
  }
}
