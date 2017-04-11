import { AngularMaterialPlaygroundPage } from './app.po';

describe('angular-material-playground App', () => {
  let page: AngularMaterialPlaygroundPage;

  beforeEach(() => {
    page = new AngularMaterialPlaygroundPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
