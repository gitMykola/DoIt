import { DoitAPage } from './app.po';

describe('doit-a App', () => {
  let page: DoitAPage;

  beforeEach(() => {
    page = new DoitAPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
