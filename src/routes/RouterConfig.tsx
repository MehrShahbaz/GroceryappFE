import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from 'screens/Home';

import ErrorPage from 'components/_shared/ErrorPage/ErrorPage';
import Categories from 'components/Category/Category';
import FoodMart from 'components/FoodMart/FoodMart';
import Manufacturer from 'components/Manufacturer/Manufacturer';
import Product from 'components/Product/Product';

import { urls } from './urls';

const RouterConfig = (): JSX.Element => (
  <Router>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path={urls.home} element={<Product />} />
        <Route path={urls.products} element={<Product />} />
        <Route path={urls.categories} element={<Categories />} />
        <Route path={urls.foodMart} element={<FoodMart />} />
        <Route path={urls.manufacturer} element={<Manufacturer />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  </Router>
);

export default RouterConfig;
