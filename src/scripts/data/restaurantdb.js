/* eslint-disable linebreak-style */
import CONFIG from '../globals/config';
import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantDB {
  static async catalogRestaurant() {
    const response = await fetch(API_ENDPOINT.CATALOG);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    return response.json();
  }

  static async PostReview(data) {
    const response = await fetch(API_ENDPOINT.REVIEW, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Auth-Token': CONFIG.KEY,
      },
      body: JSON.stringify(data),
    });
    return response;
  }
}

export default RestaurantDB;
