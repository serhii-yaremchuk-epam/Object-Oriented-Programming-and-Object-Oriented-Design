import {Pages} from "../src/pages";
import {Page} from "../src/page";
import {Comics} from "../src/comics";

describe('Comics', () => {
  it('toString should return correct value', () => {
    let counter = 1;
    const comics = new Comics('Spider-Man', 'Stan Lee', 'some author', new Pages([
      new Page(1, 'with images', 'glossy paper'),
      new Page(2, 'with images', 'glossy paper')
    ]));

    for (const page of comics) {
      expect(page.toString()).toEqual(`Comics: Spider-Man by Stan Lee, the artist is some author, number of pages: 2, here is page with images #${counter} and it\'s material is glossy paper`);
      counter++;
    }
  });
});
