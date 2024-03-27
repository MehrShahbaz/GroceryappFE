import Category from '../components/Category/Category';
import Manufacturer from '../components/Manufacturer/Manufacturer';
import Product from '../components/Product/Product';
import StoreComponent from '../components/Store/Store';

import styles from './Home.module.scss';

const HomePage = (): JSX.Element => (
  <div className={styles.container} id="Home">
    <Product />
    <Category />
    <Manufacturer />
    <StoreComponent />
  </div>
);

export default HomePage;
