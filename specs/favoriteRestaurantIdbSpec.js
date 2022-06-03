import FavoriteRestaurantDB from '../src/scripts/data/favorite-restaurantdb';
import { itActsAsFavoriteRestaurantsModel } from './contract/favoriteRestaurantContract';

describe('Favorite Restaurants Idb Contract Test Implementation', () => {
  afterEach(async () => {
    (await FavoriteRestaurantDB.getAllRestaurant()).forEach(async (restaurant) => {
      await FavoriteRestaurantDB.deleteRestaurant(restaurant.id);
    });
  });

  itActsAsFavoriteRestaurantsModel(FavoriteRestaurantDB);
});
