import { FirstAngProjectPage } from './app.po';

describe('first-ang-project App', () => {
  let page: FirstAngProjectPage;

  beforeEach(() => {
    page = new FirstAngProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
