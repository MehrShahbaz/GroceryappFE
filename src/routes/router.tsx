import { createBrowserRouter } from 'react-router-dom';

import ErrorPage from 'components/_shared/ErrorPage/ErrorPage';
import Categories from 'components/Category/Category';
import FoodMart from 'components/FoodMart/FoodMart';
import Manufacturer from 'components/Manufacturer/Manufacturer';
import Product from 'components/Product/Product';

import { urls } from './urls';

export const router = createBrowserRouter([
  {
    path: urls.home,
    element: <Product />,
    errorElement: <ErrorPage />,
  },
  {
    path: urls.products,
    element: <Product />,
  },
  {
    path: urls.categories,
    element: <Categories />,
  },
  {
    path: urls.foodMart,
    element: <FoodMart />,
  },
  {
    path: urls.manufacturer,
    element: <Manufacturer />,
  },
]);
