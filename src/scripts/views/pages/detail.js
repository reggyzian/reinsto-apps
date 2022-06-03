import UrlParser from '../../routes/url-parser';
import RestaurantDB from '../../data/restaurantdb';
import { RestaurantDetailTemplate } from '../templates/template-creator';
import Loader from '../templates/loader-creator';
import ReviewTemplate from '../templates/review-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import FavoriteRestaurantDB from '../../data/favorite-restaurantdb';

const Detail = {
  async render() {
    return `
        <div class="label">
          <h1 class="label-text" id="content">Details Restaurant</h1>
        </div>
        <div id="loading"></div>
        <div id="explore-detail" class="explore-detail"></div>
        <div id="form-review">
          <form>
            <div class="form-group">
              <label for="inputName" class="form-label">Nama</label>
              <input name="inputName" type="text" class="form-control" id="inputName" required>
            </div>
            <div class="form-group">
              <label for="inputReview" class="form-label">Reviews</label>
              <input name="inputReview" type="text" class="form-control" id="inputReview" required>
            </div>
            <button id="submit-review" class="btn-review" type="submit">SUBMIT REVIEW</button>
          </form>
        </div>
        <div id="likeButtonContainer"></div>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const ElementLoader = document.getElementById('loading');
    const restaurantsContainer = document.querySelector('#explore-detail');
    ElementLoader.innerHTML = Loader.loaderTemplate();

    try {
      const data = await RestaurantDB.detailRestaurant(url.id);
      restaurantsContainer.innerHTML = RestaurantDetailTemplate(data.restaurant);
      await LikeButtonInitiator.init({
        likeButtonContainer: document.querySelector('#likeButtonContainer'),
        FavoriteRestaurant: FavoriteRestaurantDB,
        data,
      });
      ElementLoader.style.display = 'none';
    } catch (error) {
      ElementLoader.innerHTML = Loader.OfflineTemplate();
    }

    const btnSubmit = document.querySelector('#submit-review');
    const nameInput = document.querySelector('#inputName');
    const reviewInput = document.querySelector('#inputReview');

    btnSubmit.addEventListener('click', (e) => {
      e.preventDefault();
      if (nameInput.value === '' && reviewInput.value === '') {
        alert('Masukkan tidak boleh kosong');
        nameInput.value = '';
        reviewInput.value = '';
      } else {
        ReviewTemplate(url, nameInput.value, reviewInput.value);
        nameInput.value = '';
        reviewInput.value = '';
      }
    });
  },
};

export default Detail;
