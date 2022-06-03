/* eslint-disable linebreak-style */

import RestaurantDB from '../../data/restaurantdb';
import { RestaurantItemTemplate } from '../templates/template-creator';
import Loader from '../templates/loader-creator';

const Catalog = {
  async render() {
    return `
        <div class="label">
          <h1 class="label-text" id="content">Explore Restaurant</h1>
        </div>
        <div id="loading"></div>
        <div id="explore" class="explore"></div>
      `;
  },

  async afterRender() {
    const ElementLoader = document.getElementById('loading');
    const restaurantsContainer = document.querySelector('#explore');
    ElementLoader.innerHTML = Loader.loaderTemplate();
    restaurantsContainer.innerHTML = '';

    try {
      const restaurants = await RestaurantDB.catalogRestaurant();
      restaurants.forEach((restaurant) => {
        restaurantsContainer.innerHTML += RestaurantItemTemplate(restaurant);
      });
      ElementLoader.style.display = 'none';
    } catch (err) {
      ElementLoader.innerHTML = Loader.OfflineTemplate();
    }
  },
};

export default Catalog;
