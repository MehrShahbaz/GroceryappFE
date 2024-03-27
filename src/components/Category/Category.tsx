import { useEffect } from 'react'; // Import useEffect
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';

import { ReactComponent as DeleteIcon } from '../../assets/deleteIcon.svg';
import { ReactComponent as EditIcon } from '../../assets/editIcon.svg';
import { selectAllCategories } from '../../redux/selectors/categorySelector';
import { deleteCategory, fetchCategories } from '../../redux/slices/categorySlice';
import { AppDispatch } from '../../redux/store/store';

import CreateCategory from './CreateUpdateCategoey/CreateUpdateCategoey';

import styles from './Category.module.scss';

const Categories = (): JSX.Element => {
  const dispatch = useDispatch<AppDispatch>();
  const categories = useSelector(selectAllCategories);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const handleDelete = (id: string): void => {
    dispatch(deleteCategory(id));
  };

  return (
    <div className={styles.container}>
      <div className={styles.headingContainer}>
        <h1>Categories</h1>
        <CreateCategory />
      </div>
      <div>
        <Table striped>
          <thead>
            <tr>
              <th>#</th>
              <th>Category Name</th>
              <th>Products</th>
              <th>Product Count</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category, index) => {
              const { name, products, _id: id } = category;

              return (
                <tr key={id}>
                  <td>{index + 1}</td>
                  <td>{name}</td>
                  <td>{products[0]?.name ?? 'None'}</td>
                  <td>{products.length}</td>
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

export default Categories;
