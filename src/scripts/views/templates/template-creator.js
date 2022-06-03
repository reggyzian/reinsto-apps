/* eslint-disable linebreak-style */
import CONFIG from '../../globals/config';

const RestaurantDetailTemplate = (restaurant) => `
    <div class="explore-item">
        <p class="explore-item-rating">⭐️ ${restaurant.rating}</p>
        <div class="explore-detail-grid">
            <img class="explore-item-thumbnail-detail lazyload"
                data-src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}"
                alt="${restaurant.name}">
            <div class="explore-item-content">
                <h2 class="explore-item-title"><a href="${`/#/detail/${restaurant.id}`}">${restaurant.name}</a></h2>
                <p class="explore-item-address">${restaurant.address}, ${restaurant.city}</p>
                <p class="explore-item-description-detail">${restaurant.description}</p>
                ${restaurant.categories.map((category) => `<span class="explore-item-category"> ${category.name}</span>`).join('')}
            </div>
        </div>
    </div>
    <div class="label">
        <h1 class="label-text">Menu</h1>
    </div>
    <div class="explore-item">
        <div class="explore-detail-grid">
            <div class="explore-item-menu">
                <h3 class="explore-item-title-menu">Drinks</h3>
                <ul>
                    ${restaurant.menus.drinks.map((drink) => `<li>${drink.name}</li>`).join('')}
                </ul>
            </div>
            <div class="explore-item-menu">
                <h3 class="explore-item-title-menu">Foods</h3>
                <ul>
                    ${restaurant.menus.foods.map((food) => `<li>${food.name}</li>`).join('')}
                </ul>
            </div>
        </div>
    </div>
    <div class="label">
        <h1 class="label-text">Review</h1>
    </div>
    <div class="explore-item" id="review-item">
        ${restaurant.customerReviews.map((review) => `
            <div class="explore-item-review">
                <div class="explore-item-review-body">
                    <img class="explore-item-review-thumbnail lazyload" data-src="/../images/user.png" alt="reviewer ${review.name}">
                </div>
                <div class="explore-item-review-body">
                    <p class="explore-item-review-name">${review.name}</p>
                    <p class="explore-item-review-date">${review.date}</p>
                    ${review.review}
                </div>
            </div>
        `).join('')}
    </div>
</div>
`;

const RestaurantItemTemplate = (restaurant) => `
    <div class="explore-item">
        <p class="explore-item-rating">⭐️ ${restaurant.rating}</p>
        <img class="explore-item-thumbnail lazyload"
            data-src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}"
            alt="${restaurant.name}">
        <div class="explore-item-content">
            <p class="explore-item-location">Location: ${restaurant.city}</p>
            <h2 class="explore-item-title"><a href="${`/#/detail/${restaurant.id}`}">${restaurant.name}</a></h2>
            <p class="explore-item-description">${restaurant.description}</p>
        </div>
    </div>
`;

const LikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="btn-like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const LikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="btn-like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  RestaurantItemTemplate,
  RestaurantDetailTemplate,
  LikeButtonTemplate,
  LikedButtonTemplate,
};
