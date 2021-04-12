import { Item } from './Item';
import { Comparator } from './Comparator';

export interface ItemComparator extends Comparator<Item> {
    compare(first: Item, second: Item): number;
}
