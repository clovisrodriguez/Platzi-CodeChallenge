import Home from '../pages/Home';
import Product from '../pages/Product';

const routes = [
  {
    exact: true,
    path: '/',
    component: Home
  },
  {
    exact: false,
    path: '/product/:id',
    component: Product
  }
];

export default routes;
