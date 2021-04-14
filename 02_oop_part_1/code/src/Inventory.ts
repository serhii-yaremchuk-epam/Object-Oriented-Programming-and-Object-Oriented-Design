import {Item} from "./Item";
import {ItemComparator} from "./ItemComparator";

export class Inventory {
  private items: Item[] = [];

  public addItem(item: Item): void {
    this.items.push(item);
  }

  public sort(): void;
  public sort(comparator: ItemComparator): void;
  public sort(comparator?: ItemComparator): void {
    if (!comparator) {
      this.items = this.items.sort((firstItem, secondItem) => {
        return firstItem.compareTo(secondItem);
      })
    } else {
      this.items = this.items.sort(comparator.compare);
    }
  }

  public toString(): string {
    return this.items.join(', ');
  }
}
