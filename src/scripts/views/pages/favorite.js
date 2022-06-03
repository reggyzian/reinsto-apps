import FavoriteRestaurantDB from '../../data/favorite-restaurantdb';
import { RestaurantItemTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
      <div class="label">
        <h1 class="label-text" id="content">Favorite Restaurant</h1>
      </div>
      <div id="explore" class="explore"></div>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantDB.getAllRestaurant();
    const restaurantContainer = document.querySelector('#explore');

    if (restaurants.length > 0) {
      restaurants.forEach((restaurant) => {
        restaurantContainer.innerHTML += RestaurantItemTemplate(restaurant);
      });
    } else {
      restaurantContainer.innerHTML = `
        <div class="unavailable-favorite">
          <h2>Tidak ada daftar restoran favorit</h2>
        </div>
      `;
    }
  },
};

export default Favorite;
