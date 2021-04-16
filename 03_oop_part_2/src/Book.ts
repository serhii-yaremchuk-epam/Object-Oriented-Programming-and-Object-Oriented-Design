import {Item} from "./Item";
import {Pages} from "./Pages";

export class Book extends Item {
  private author: string;

  constructor(title: string, author: string, pages: Pages) {
    super(title, pages);
    this.author = author;
  }

  getAuthor(): string {
    return this.author;
  }

  setAuthor(value: string) {
    this.author = value;
  }

  public toString(): string {
    return `Book: ${this.title} by ${this.author} with number of pages: ${this.pages.count()}`;
  }
}
