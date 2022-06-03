import LikeButtonInitiator from '../../src/scripts/utils/like-button-initiator';
import FavoriteRestaurantDB from '../../src/scripts/data/favorite-restaurantdb';

const createLikeButtonPresenterWithRestaurant = async (restaurant) => {
  await LikeButtonInitiator.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    FavoriteRestaurant: FavoriteRestaurantDB,
    data: {
      restaurant,
    },
  });
};

export default createLikeButtonPresenterWithRestaurant;
