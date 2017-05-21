import { UnrecognizedVoicesUiPage } from './app.po';

describe('unrecognized-voices-ui App', function() {
  let page: UnrecognizedVoicesUiPage;

  beforeEach(() => {
    page = new UnrecognizedVoicesUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
