// import Category from '../components/Category/Category';

// import Manufacturer from '../components/Manufacturer/Manufacturer';
import Product from '../components/Product/Product';

// import FoodMart from '../components/FoodMart/FoodMart';
import styles from './Home.module.scss';

const HomePage = (): JSX.Element => (
  <div className={styles.container} id="Home">
    <Product />
    {/* <Category /> */}
    {/* <Manufacturer /> */}
    {/* <FoodMart /> */}
  </div>
);

export default HomePage;
