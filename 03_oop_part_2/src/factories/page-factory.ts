import { Page } from '../Page';
import { PageType } from '../types/PageType';
import { PageMaterial } from '../types/PageMaterial';
import { Pages } from '../Pages';

export class PageFactory {
  static build(pageType: PageType, pageMaterial: PageMaterial, count: number): Pages {
    const pages = Array.from(Array(count)).map((_, index) => {
      const pageNumber = index + 1;
      return new Page(pageNumber, pageType, pageMaterial);
    });

    return new Pages(pages);
  }
}
