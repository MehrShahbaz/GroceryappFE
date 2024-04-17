import { Button } from 'react-bootstrap';
import { CategoryType } from 'types/productTypes';

import styles from './ProductCategories.module.scss';

type ProductCategoriesProps = {
  categories: CategoryType[];
};
const ProductCategories = ({ categories }: ProductCategoriesProps): JSX.Element => {
  if (!categories.length) {
    return <div>No Categories ATM</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.headingContainer}>
        <h4>Categories</h4>
        <Button variant="outline-success" onClick={() => console.log('Add Review')}>
          Add Category
        </Button>
      </div>
      <ul>
        {categories.map(({ name, id }) => (
          <li key={id}>{name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductCategories;
