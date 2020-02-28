import { RestaurantePage } from './app.po';

describe('restauranteApp', function() {
  let page: RestaurantePage;

  beforeEach(() => {
    page = new RestaurantePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('mt works!');
  });
});
