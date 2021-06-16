import {Item} from "../Item";
import {Page} from "../Page";

export class PagesIterable {
  private item: Item;
  private nextIdx: number;

  constructor(item: Item) {
    this.item = item;
    this.nextIdx = 0;
  }

  next(): IteratorResult<any> {
    const pagesCount = this.item.pages.count();
    if (this.nextIdx === pagesCount) {
      return { done: true, value: pagesCount };
    }

    const page = this.item.pages.get(this.nextIdx);
    const result = {
      value: {
        item: this.item,
        page,
        toString: () => `${this.item.toString()}, ${page.toString()}`,
      },
      done: false
    }

    this.nextIdx++;
    return result;
  }
}
