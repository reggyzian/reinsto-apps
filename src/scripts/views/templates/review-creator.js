/* eslint-disable linebreak-style */
import RestaurantDB from '../../data/restaurantdb';

const ReviewTemplate = (url, name, review) => {
  const dataReview = {
    id: url.id,
    name,
    review,
  };

  RestaurantDB.PostReview(dataReview);

  const reviewContainer = document.querySelector('#review-item');
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const date = new Date().toLocaleDateString('id-ID', options);

  const newReview = `
        <div class="explore-item-review">
        <div class="explore-item-review-body">
            <img class="explore-item-review-thumbnail" src="/../images/user.png" alt="reviewer ${name}">
        </div>
        <div class="explore-item-review-body">
            <p class="explore-item-review-name">${name}</p>
            <p class="explore-item-review-date">${date}</p>
            ${review}
        </div>
        </div>
    `;

  reviewContainer.innerHTML += newReview;
};

export default ReviewTemplate;
