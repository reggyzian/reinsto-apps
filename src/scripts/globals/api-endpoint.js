/* eslint-disable linebreak-style */
import CONFIG from './config';

const API_ENDPOINT = {
  CATALOG: `${CONFIG.BASE_URL}list`,
  DETAIL: (id) => `${CONFIG.BASE_URL}detail/${id}`,
  REVIEW: `${CONFIG.BASE_URL}review`,
};

export default API_ENDPOINT;
