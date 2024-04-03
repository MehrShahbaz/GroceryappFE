import { useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';

import { ReactComponent as DeleteIcon } from '../../assets/deleteIcon.svg';
import { ReactComponent as EditIcon } from '../../assets/editIcon.svg';
import { calculateReview } from '../../helper/helper';
import { selectAllProducts } from '../../redux/selectors/productSelector';
import { deleteProduct, fetchProducts } from '../../redux/slices/productSlice';
import { AppDispatch } from '../../redux/store/store';

import CreateProduct from './CreateUpdateProduct/CreateUpdateProduct';

import styles from './Product.module.scss';

const Product = (): JSX.Element => {
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
        <CreateProduct />
      </div>
      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        {products.map((product) => {
          const { id, name, prices, food_mart: foodMart, reviews } = product;

          return (
            <Card style={{ width: '18rem' }} key={id}>
              <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">€{prices[0].amount}</Card.Subtitle>
                <Card.Text>
                  <div>
                    <div>
                      {foodMart.name} - {foodMart.note}
                    </div>
                    <div>
                      <a href={foodMart.location} target="_blank" rel="noreferrer">
                        Location
                      </a>
                    </div>
                  </div>
                </Card.Text>
                <Card.Text>
                  <div>
                    <div>Reviews: {calculateReview(reviews)}</div>
                  </div>
                </Card.Text>
                <div className={styles.actions}>
                  <button>
                    <EditIcon className={styles.icon} />
                  </button>
                  <button onClick={() => handleDelete(id)}>
                    <DeleteIcon className={styles.icon} />
                  </button>
                </div>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Product;
