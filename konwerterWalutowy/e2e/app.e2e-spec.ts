import { KonwerterWalutowyPage } from './app.po';

describe('konwerter-walutowy App', function() {
  let page: KonwerterWalutowyPage;

  beforeEach(() => {
    page = new KonwerterWalutowyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
