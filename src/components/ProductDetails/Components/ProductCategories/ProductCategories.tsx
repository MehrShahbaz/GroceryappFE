import { useMemo, useState } from 'react';
import { Button } from 'react-bootstrap';
import { CategoryType } from 'types/productTypes';

import AddCategories from './AddCategories/AddCategories';

import styles from './ProductCategories.module.scss';

type ProductCategoriesProps = {
  categories: CategoryType[];
};
const ProductCategories = ({ categories }: ProductCategoriesProps): JSX.Element => {
  const [isShow, setIsShow] = useState(false);
  const categoriesIds = useMemo((): number[] => categories.map(({ id }) => id), [categories]);

  return (
    <div className={styles.container}>
      <div className={styles.headingContainer}>
        <h4>Categories</h4>
        <Button variant="outline-success" onClick={() => setIsShow(true)}>
          {categories.length ? 'Change' : 'Add'} Categories
        </Button>
      </div>
      {categories.length ? (
        <ul>
          {categories.map(({ name, id }) => (
            <li key={id}>{name}</li>
          ))}
        </ul>
      ) : (
        <div>No Categories ATM</div>
      )}
      {isShow && (
        <AddCategories
          isShow={isShow}
          setIsShow={(willShow) => setIsShow(willShow)}
          categories={categoriesIds ? categoriesIds : undefined}
        />
      )}
    </div>
  );
};

export default ProductCategories;
