import { OvoTestPage } from './app.po';

describe('ovo-test App', function() {
  let page: OvoTestPage;

  beforeEach(() => {
    page = new OvoTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
