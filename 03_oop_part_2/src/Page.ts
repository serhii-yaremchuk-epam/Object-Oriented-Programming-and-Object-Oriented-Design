import {PageType} from "./types/PageType";
import {PageMaterial} from "./types/PageMaterial";

export class Page {
  public pageNumber: number;
  public pageType: PageType;
  public pageMaterial: PageMaterial;

  constructor(pageNumber: number, pageType: PageType, pageMaterial: PageMaterial) {
    this.pageNumber = pageNumber;
    this.pageType = pageType;
    this.pageMaterial = pageMaterial;
  }

  toString() {
    return `here is page ${this.pageType} #${this.pageNumber} and it's material is ${this.pageMaterial}`
  }
}
