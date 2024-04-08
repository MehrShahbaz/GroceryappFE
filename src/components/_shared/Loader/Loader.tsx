/* eslint-disable @typescript-eslint/naming-convention */
import Spinner from 'react-bootstrap/Spinner';
import { useSelector } from 'react-redux';

import { isCategoryLoading } from '../../../redux/selectors/categorySelector';
import { isStoreLoading } from '../../../redux/selectors/foodMartSelector';
import { isManufacturerLoading } from '../../../redux/selectors/manufacturerSelector';

import styles from './Loader.module.scss';

const Loader = (): JSX.Element => {
  const categoryLoading = useSelector(isCategoryLoading);
  const storeLoading = useSelector(isManufacturerLoading);
  const ManufacturerLoading = useSelector(isStoreLoading);

  if (categoryLoading || storeLoading || ManufacturerLoading) {
    return (
      <div className={styles.container}>
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }

  return <div id="Loader" />;
};

export default Loader;
