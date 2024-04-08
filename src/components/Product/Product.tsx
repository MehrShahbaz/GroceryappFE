import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import { selectAllProducts } from '../../redux/selectors/productSelector';
import { deleteProduct, fetchProducts } from '../../redux/slices/productSlice';
import { AppDispatch } from '../../redux/store/store';

import CreateProduct from './CreateUpdateProduct/CreateUpdateProduct';
import ProductCard from './ProductCard/ProductCard';

import styles from './Product.module.scss';

const Product = (): JSX.Element => {
  const [isShow, setIsShow] = useState(false);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  const products = useSelector(selectAllProducts);
  const handleDelete = (id: number): void => {
    dispatch(deleteProduct(id));
  };

  return (
    <div className={styles.container}>
      <div className={styles.headingContainer}>
        <h1>Products</h1>
        <Button variant="outline-success" onClick={() => setIsShow(true)}>
          Create Product
        </Button>
      </div>
      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        {products.map((product) => (
          <ProductCard product={product} handleDelete={handleDelete} />
        ))}
      </div>
      {isShow && <CreateProduct isShow={isShow} setIsShow={(willShow) => setIsShow(willShow)} />}
    </div>
  );
};

export default Product;
