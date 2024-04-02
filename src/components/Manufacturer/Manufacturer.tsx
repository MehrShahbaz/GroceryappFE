import { useEffect } from 'react'; // Import useEffect
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';

import { ReactComponent as DeleteIcon } from '../../assets/deleteIcon.svg';
import { ReactComponent as EditIcon } from '../../assets/editIcon.svg';
import { selectAllManufacturers } from '../../redux/selectors/manufacturerSelector';
import { deleteManufacturer, fetcManufacturers } from '../../redux/slices/manufacturerSlice';
import { AppDispatch } from '../../redux/store/store';

import CreateManufacturer from './CreateUpdateManufacturer/CreateUpdateManufacturer';

import styles from './Manufacturer.module.scss';

const Manufacturer = (): JSX.Element => {
  const dispatch = useDispatch<AppDispatch>();
  const manufacturers = useSelector(selectAllManufacturers);

  useEffect(() => {
    dispatch(fetcManufacturers());
  }, [dispatch]);

  const handleDelete = (id: string): void => {
    dispatch(deleteManufacturer(id));
  };

  return (
    <div className={styles.container}>
      <div className={styles.headingContainer}>
        <h1>Manufacturers</h1>
        <CreateManufacturer />
      </div>
      <div>
        <Table striped>
          <thead>
            <tr>
              <th>#</th>
              <th>Manufacturer's Name</th>
              <th>Product Count</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {manufacturers.map((manufacturer, index) => {
              const { name, products, _id: id } = manufacturer;

              return (
                <tr key={id}>
                  <td>{index + 1}</td>
                  <td>{name}</td>
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

export default Manufacturer;
