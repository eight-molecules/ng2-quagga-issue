import { QuaggaPage } from './app.po';

describe('quagga App', function() {
  let page: QuaggaPage;

  beforeEach(() => {
    page = new QuaggaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
