import { useEffect } from 'react'; // Import useEffect
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';

import { ReactComponent as DeleteIcon } from '../../assets/deleteIcon.svg';
import { ReactComponent as EditIcon } from '../../assets/editIcon.svg';
import { selectAllFoodMarts } from '../../redux/selectors/foodMartSelector';
import { deleteFoodMart, fetchFoodMart } from '../../redux/slices/foodMartSlice';
import { AppDispatch } from '../../redux/store/store';

import CreateStore from './CreateUpdateFoodMart/CreateUpdateFoodMart';

import styles from './Store.module.scss';

const FoodMart = (): JSX.Element => {
  const dispatch = useDispatch<AppDispatch>();
  const foodMarts = useSelector(selectAllFoodMarts);

  useEffect(() => {
    dispatch(fetchFoodMart());
  }, [dispatch]);

  const handleDelete = (id: number): void => {
    dispatch(deleteFoodMart(id));
  };

  return (
    <div className={styles.container}>
      <div className={styles.headingContainer}>
        <h1>Food Mart</h1>
        <CreateStore />
      </div>
      <div>
        <Table striped>
          <thead>
            <tr>
              <th>#</th>
              <th>Food Mart's Name</th>
              <th>Location</th>
              <th>Note</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {foodMarts.map((foodMart, index) => {
              const { name, note, location, id } = foodMart;

              return (
                <tr key={id}>
                  <td>{index + 1}</td>
                  <td>{name}</td>
                  <td>
                    <a href={location} target="_blank" rel="noreferrer">
                      Location
                    </a>
                  </td>
                  <td>{note}</td>
                  <td className={styles.actions}>
                    <button>
                      <EditIcon className={styles.icon} />
                    </button>
                    <button>
                      <DeleteIcon className={styles.icon} onClick={() => handleDelete(id)} />
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

export default FoodMart;
