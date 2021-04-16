import {Pages} from "../src/pages";
import {Page} from "../src/page";
import {Book} from '../src/book';
import { PageFactory } from '../src/factories/page-factory';

describe('Book', () => {
  it('toString should return correct value', () => {
    let counter = 1;
    const book = new Book('Harry Potter', 'J. K. Rowling', new Pages([
      new Page(1, 'with text', 'simple paper'),
      new Page(2, 'with text', 'simple paper'),
      new Page(3, 'with text', 'simple paper'),
      new Page(4, 'with text', 'simple paper')
    ]));

    for (const page of book) {
      expect(page.toString()).toEqual(`Book: Harry Potter by J. K. Rowling with number of pages: 4, here is page with text #${counter} and it\'s material is simple paper`);
      counter++;
    }
  });

  it('toString should return correct value. Check factory', () => {
    let counter = 1;
    const book = new Book('Harry Potter', 'J. K. Rowling', PageFactory.build('with text', 'simple paper', 4));

    for (const page of book) {
      expect(page.toString()).toEqual(`Book: Harry Potter by J. K. Rowling with number of pages: 4, here is page with text #${counter} and it\'s material is simple paper`);
      counter++;
    }
  });
});
