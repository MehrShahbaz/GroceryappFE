import { useEffect } from 'react'; // Import useEffect
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';

import { ReactComponent as DeleteIcon } from '../../assets/deleteIcon.svg';
import { ReactComponent as EditIcon } from '../../assets/editIcon.svg';
import { selectAllStores } from '../../redux/selectors/storeSelector';
import { deleteStore, fetchStoress } from '../../redux/slices/storeSlice';
import { AppDispatch } from '../../redux/store/store';

import CreateStore from './CreateUpdateStore/CreateUpdateStore';

import styles from './Store.module.scss';

const StoreComponent = (): JSX.Element => {
  const dispatch = useDispatch<AppDispatch>();
  const stores = useSelector(selectAllStores);

  useEffect(() => {
    dispatch(fetchStoress());
  }, [dispatch]);

  const handleDelete = (id: string): void => {
    dispatch(deleteStore(id));
  };

  return (
    <div className={styles.container}>
      <div className={styles.headingContainer}>
        <h1>Stores</h1>
        <CreateStore />
      </div>
      <div>
        <Table striped>
          <thead>
            <tr>
              <th>#</th>
              <th>Store's Name</th>
              <th>Location</th>
              <th>Product Count</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {stores.map((store, index) => {
              const { name, products, location, _id: id } = store;

              return (
                <tr key={id}>
                  <td>{index + 1}</td>
                  <td>{name}</td>
                  <td>
                    <a href={location} target="_blank" rel="noreferrer">
                      Location
                    </a>
                  </td>
                  <td>{products.length}</td>
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

export default StoreComponent;
