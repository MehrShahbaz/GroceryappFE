import { useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';

import { ReactComponent as DeleteIcon } from '../../assets/deleteIcon.svg';
import { ReactComponent as EditIcon } from '../../assets/editIcon.svg';
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
  const handleDelete = (id: string): void => {
    dispatch(deleteProduct(id));
  };

  return (
    <div className={styles.container}>
      <div className={styles.headingContainer}>
        <h1>Products</h1>
        <CreateProduct />
      </div>
      <div>
        <Table striped>
          <thead>
            <tr>
              <th>#</th>
              <th>Product's Name</th>
              <th>Category</th>
              <th>Store</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => {
              const { name, category, _id: id, store } = product;

              return (
                <tr key={id}>
                  <td>{index + 1}</td>
                  <td>{name}</td>
                  <td>{category.name}</td>
                  <td>{store.name}</td>
                  <td className={styles.actions}>
                    <button>
                      <EditIcon className={styles.icon} />
                    </button>
                    <button onClick={() => handleDelete(id)}>
                      <DeleteIcon className={styles.icon} />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Product;
