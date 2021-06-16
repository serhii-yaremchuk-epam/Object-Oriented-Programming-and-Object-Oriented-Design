import {Page} from "./Page";

export class Pages {
  private pages: Page[] = [];

  constructor(pages: Page[]) {
    this.pages = pages;
  }

  get(idx: number): Page {
    return this.pages[idx];
  }

  count(): number {
    return this.pages.length;
  }
}
