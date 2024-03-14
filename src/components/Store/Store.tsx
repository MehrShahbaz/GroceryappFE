import { useEffect } from 'react'; // Import useEffect
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';

import { selectAllStores } from '../../redux/selectors/storeSelector';
import { fetchStoress } from '../../redux/slices/storeSlice';
import { AppDispatch } from '../../redux/store/store';

import CreateStore from './CreateUpdateStore/CreateUpdateStore';

import styles from './Store.module.scss';

const StoreComponent = (): JSX.Element => {
  const dispatch = useDispatch<AppDispatch>();
  const stores = useSelector(selectAllStores);

  useEffect(() => {
    dispatch(fetchStoress());
  }, [dispatch]);

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
                  <td>{location}</td>
                  <td>{products.length}</td>
                  <td>Actions</td>
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
