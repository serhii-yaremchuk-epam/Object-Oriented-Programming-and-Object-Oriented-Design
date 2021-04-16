import {Item} from "./Item";
import {Pages} from "./Pages";

export class Comics extends Item {
  private author: string;
  private artist: string;

  constructor(title: string, artist: string, author: string, pages: Pages) {
    super(title, pages);

    this.author = author;
    this.artist = artist;
  }

  public toString(): string {
    return `Comics: ${this.title} by ${this.artist}, the artist is ${this.author}, number of pages: ${this.pages.count()}`;
  }

  getAuthor(): string {
    return this.author;
  }

  setAuthor(value: string) {
    this.author = value;
  }

  getArtist(): string {
    return this.artist;
  }

  setArtist(value: string) {
    this.artist = value;
  }
}
