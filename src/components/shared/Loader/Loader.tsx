/* eslint-disable @typescript-eslint/naming-convention */
import Spinner from 'react-bootstrap/Spinner';
import { useSelector } from 'react-redux';

import { isCategoryLoading } from '../../../redux/selectors/categorySelector';

import styles from './Loader.module.scss';

const Loader = (): JSX.Element => {
  const categoryLoading = useSelector(isCategoryLoading);

  if (categoryLoading) {
    return (
      <div className={styles.container}>
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }

  return <div />;
};

export default Loader;
