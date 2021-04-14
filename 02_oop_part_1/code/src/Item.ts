import { Comparable } from './Comparable';

let id = 0;

export abstract class Item implements Comparable<Item> {
    private static numberOfItems: number;

    protected id: number;
    protected value: number;
    protected name: string;
    protected weight: number;

    constructor(name: string, value: number, weight: number) {
        this.id = id;
        this.name = name;
        this.value = value;
        this.weight = weight;

        Item.numberOfItems = ++id;
    }

    public compareTo(other: Item): number {
        if (this.getValue() > other.getValue()) {
            return 1;
        } else if (this.getValue() < other.getValue()) {
            return -1;
        } else {
            const thisItemMore = this.getName().toUpperCase() > other.getName().toUpperCase();
            return thisItemMore ? 1 : -1 ;
        }
    }

    public toString(): string {
        return `${this.name} - Value: ${this.value}, Weight: ${this.weight.toFixed(2)}`;
    }

    public getId(): number {
        return this.id;
    }

    public getValue(): number {
        return this.value;
    }

    public getName(): string {
        return this.name;
    }

    public getWeight(): number {
        return this.weight;
    }

    public setValue(price: number): void {
        this.value = price;
    }
    public setName(name: string): void {
        this.name = name;
    }

    public setWeight(weight: number): void {
        this.weight = weight;
    }

    private static reset(): void {
        id = Item.numberOfItems = 0;
    }

    public abstract use(): void;
}
