import {Item} from "./Item";

export abstract class Weapon extends Item {
  protected static MODIFIER_CHANGE_RATE: number = 0.05;

  protected baseDamage: number;
  protected damageModifier: number = 0;
  protected baseDurability: number;
  protected durabilityModifier: number = 0;

  constructor(name: string, baseDamage: number, baseDurability: number, value: number, weight: number) {
    super(name, value, weight);

    this.baseDamage = baseDamage;
    this.baseDurability = baseDurability;
  }

  public use(): string {
    const lastDurability = this.getDurability();
    if (lastDurability <= 0) {
      return `You can't use the ${this.name}, it is broken.`;
    }

    this.durabilityModifier -= Weapon.MODIFIER_CHANGE_RATE;
    let result = `You use the ${this.name}, dealing ${this.getDamage().toFixed(2)} points of damage.`;
    if (this.getDurability() <= 0) {
      result += `The ${this.name} breaks.`;
    }

    return result;
  }

  public toString(): string {
    return `${super.toString()}, Damage: ${this.getDamage().toFixed(2)}, Durability: ${this.getDurability().toFixed(2)}%`
  }

  protected getDamage(): number {
    return this.baseDamage + this.damageModifier;
  }

  protected getDurability(): number {
    return this.baseDurability + this.durabilityModifier;
  }

  public getBaseDamage(): number {
    return this.baseDamage;
  }

  public setBaseDamage(value: number) {
    this.baseDamage = value;
  }

  public getDamageModifier(): number {
    return this.damageModifier;
  }

  public setDamageModifier(value: number) {
    this.damageModifier = value;
  }

  public getBaseDurability(): number {
    return this.baseDurability;
  }

  public setBaseDurability(value: number) {
    this.baseDurability = value;
  }

  public getDurabilityModifier(): number {
    return this.durabilityModifier;
  }

  public setDurabilityModifier(value: number) {
    this.durabilityModifier = value;
  }

  public abstract polish(): void;
}
