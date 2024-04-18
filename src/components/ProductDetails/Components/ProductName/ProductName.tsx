import { useState } from 'react';
import { Button } from 'react-bootstrap';

import ChangeProductName from './ChangeProductName/ChangeProductName';

import styles from './ProductName.module.scss';

type ProductNameParams = {
  name: string;
};

const ProductName = ({ name }: ProductNameParams): JSX.Element => {
  const [isShow, setIsShow] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.headingContainer}>
        <h2>{name}</h2>
        <Button variant="outline-success" onClick={() => setIsShow(true)}>
          Change Name
        </Button>
      </div>
      {isShow && <ChangeProductName isShow={isShow} setIsShow={(willShow) => setIsShow(willShow)} name={name} />}
    </div>
  );
};

export default ProductName;
