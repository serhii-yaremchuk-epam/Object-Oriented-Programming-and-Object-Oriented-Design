import {Item} from "./Item";

export class Consumable extends Item {
  private consumed: boolean;
  private spoiled: boolean;

  constructor(name: string, value: number, weight: number, spoiled: boolean) {
    super(name, value, weight);

    this.consumed = false;
    this.spoiled = spoiled;
  }

  public eat(): string {
    let result = `You eat the ${this.name}.`;
    if (this.spoiled) {
      result += 'You feel sick.';
    }

    this.consumed = true;
    return result;
  }

  public use(): string {
    if (!this.spoiled && !this.consumed) {
      return this.eat();
    }

    if (this.consumed) {
      return `There is nothing left of the ${this.name} to consume.`
    }
  }

  public isConsumed(): boolean {
    return this.consumed;
  }

  public setConsumed(consumed: boolean): void {
    this.consumed = consumed;
  }

  public isSpoiled(): boolean {
    return this.spoiled;
  }
}
