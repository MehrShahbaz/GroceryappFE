import { useEffect, useState } from 'react'; // Import useEffect
import { Button, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from 'redux/store/store';

// import { CategoryType } from 'types/categoryTypes';
import { ReactComponent as DeleteIcon } from 'assets/deleteIcon.svg';
import { ReactComponent as EditIcon } from 'assets/editIcon.svg';

import { selectAllCategories } from '../../redux/selectors/categorySelector';
import { deleteCategory, fetchCategories } from '../../redux/slices/categorySlice';

import CreateCategory from './CreateUpdateCategoey/CreateUpdateCategoey';

import styles from './Category.module.scss';

const Categories = (): JSX.Element => {
  const dispatch = useDispatch<AppDispatch>();
  const categories = useSelector(selectAllCategories);
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const handleDelete = (id: number): void => {
    dispatch(deleteCategory(id));
  };
  const handleEdit = (id: number): void => {
    console.log(id);
  };

  return (
    <div className={styles.container}>
      <div className={styles.headingContainer}>
        <h1>Categories</h1>
        <Button variant="outline-success" onClick={() => setIsShow(true)}>
          Add Category
        </Button>
      </div>
      <div className={styles.tableContainer}>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Product Count</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category, index) => {
              const { id, name, count } = category;

              return (
                <tr key={`${name} + ${index}`}>
                  <td>{index + 1}</td>
                  <td>{name}</td>
                  <td>{count}</td>
                  <td>
                    <div className={styles.actions}>
                      <button onClick={() => handleEdit(id)} disabled>
                        <EditIcon className={styles.icon} />
                      </button>
                      <button onClick={() => handleDelete(id)}>
                        <DeleteIcon className={styles.icon} />
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
      {isShow && <CreateCategory isShow={isShow} setIsShow={(willShow) => setIsShow(willShow)} />}
    </div>
  );
};

export default Categories;
