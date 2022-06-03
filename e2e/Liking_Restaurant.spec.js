const assert = require('assert');

Feature('Liking Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.seeElement('#explore');
  // I.seeElement('#explore'); // membuat test menjadi gagal
  I.see('Tidak ada daftar restoran favorit', '.unavailable-favorite');

  I.amOnPage('/');
  I.seeElement('.explore-item-title a');
  const firstRestaurant = locate('.explore-item-title a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.explore-item');
  const likedRestaurantTitle = await I.grabTextFrom('.explore-item-title');

  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});

Scenario('unliking one restaurant', async ({ I }) => {
  I.amOnPage('/');
  I.seeElement('.explore-item-title a');
  I.click(locate('.explore-item-title a').first());

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.explore-item-title a');
  const firstLikedRestaurant = locate('.explore-item-title a').first();
  const firstLikedRestaurantTitle = await I.grabTextFrom(firstLikedRestaurant);
  I.click(firstLikedRestaurant);

  I.seeElement('.explore-item-title');
  const likedRestaurantTitle = await I.grabTextFrom('.explore-item-title');
  assert.strictEqual(firstLikedRestaurantTitle, likedRestaurantTitle);

  I.seeElement('[aria-label="unlike this restaurant"]');
  I.click('[aria-label="unlike this restaurant"]');

  I.amOnPage('/#/favorite');
  I.see('Tidak ada daftar restoran favorit', '.unavailable-favorite');
});
