import { BmcognitivePage } from './app.po';

describe('bmcognitive App', () => {
  let page: BmcognitivePage;

  beforeEach(() => {
    page = new BmcognitivePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
