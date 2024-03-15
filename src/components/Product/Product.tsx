import Table from 'react-bootstrap/Table';

import { ReactComponent as DeleteIcon } from '../../assets/deleteIcon.svg';
import { ReactComponent as EditIcon } from '../../assets/editIcon.svg';

import CreateProduct from './CreateUpdateProduct/CreateUpdateProduct';

import styles from './Product.module.scss';

const Product = (): JSX.Element => {
  const handleDelete = (id: string): void => console.log(id);

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
            {[{ name: 'Shahbaz', category: 'Milk', _id: '123', store: '1' }].map((manufacturer, index) => {
              const { name, category, _id: id, store } = manufacturer;

              return (
                <tr key={id}>
                  <td>{index + 1}</td>
                  <td>{name}</td>
                  <td>{category}</td>
                  <td>{store}</td>
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
