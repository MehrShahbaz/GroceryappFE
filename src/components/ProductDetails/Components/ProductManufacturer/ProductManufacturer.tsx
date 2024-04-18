import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Manufacturer } from 'types/manufacturerTypes';

import AddManufacturer from './AddManufacturer/AddManufacturer';

import styles from './ProductManufacturer.module.scss';

type ProductManufacturerProps = {
  manufacturer?: Manufacturer;
};

const ProductManufacturer = ({ manufacturer }: ProductManufacturerProps): JSX.Element => {
  const [isShow, setIsShow] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.headingContainer}>
        <h4>Manufacturer : {manufacturer?.name ?? 'Not Assinged'}</h4>
        <Button variant="outline-success" onClick={() => setIsShow(true)}>
          {manufacturer ? 'Change' : 'Add'} Manufacturer
        </Button>
      </div>
      {isShow && (
        <AddManufacturer isShow={isShow} manufacturer={manufacturer} setIsShow={(willShow) => setIsShow(willShow)} />
      )}
    </div>
  );
};

export default ProductManufacturer;
