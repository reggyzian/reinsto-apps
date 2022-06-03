/* eslint-disable linebreak-style */

import Catalog from '../views/pages/catalog';
import Favorite from '../views/pages/favorite';
import Detail from '../views/pages/detail';

const routes = {
  '/': Catalog,
  '/favorite': Favorite,
  '/detail/:id': Detail,
};

export default routes;
