import {Weapon} from "./Weapon";

export class Sword extends Weapon {
  constructor(baseDamage: number, baseDurability: number, value: number, weight: number) {
    super('sword', baseDamage, baseDurability, value, weight);
  }

  public polish() {
    const increasedValue = this.damageModifier + Weapon.MODIFIER_CHANGE_RATE;
    const maxValue = this.baseDamage * 25 / 100;

    if (maxValue > increasedValue) {
      this.damageModifier = increasedValue;
    } else {
      this.damageModifier = maxValue;
    }
  }
}
