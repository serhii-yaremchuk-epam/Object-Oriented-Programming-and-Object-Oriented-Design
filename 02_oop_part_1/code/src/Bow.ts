import {Weapon} from "./Weapon";

export class Bow extends Weapon {
  constructor(baseDamage: number, baseDurability: number, value: number, weight: number) {
    super('bow', baseDamage, baseDurability, value, weight);
  }

  public polish(): void {
    const maxValueToIncrease = 1 - this.getDurability();
    if (maxValueToIncrease <= 0) {
      return;
    }

    if (maxValueToIncrease < Weapon.MODIFIER_CHANGE_RATE) {
      this.damageModifier += maxValueToIncrease;
    } else {
      this.damageModifier += Weapon.MODIFIER_CHANGE_RATE;
    }
  }
}
