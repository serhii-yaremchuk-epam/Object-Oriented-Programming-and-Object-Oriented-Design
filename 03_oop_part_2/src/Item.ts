import {Pages} from "./Pages";
import {PagesIterable} from "./mixins/PagesIterable";

export abstract class Item {
  public pages: Pages;
  protected title: string;

  constructor(title: string, pages: Pages) {
    this.pages = pages;
    this.title = title;
  }

  getTitle(): string {
    return this.title;
  }

  setTitle(value: string) {
    this.title = value;
  }

  [Symbol.iterator](): Iterator<any> {
    return new PagesIterable(this);
  }

  public abstract toString(): string;
}
