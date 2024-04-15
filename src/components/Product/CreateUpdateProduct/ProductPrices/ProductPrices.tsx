import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Field, FieldArray, useFormikContext } from 'formik';
import { ProductIntialType } from 'types/productTypes';

import InputField from 'components/_shared/InputField/InputField';

import styles from './ProductPrices.module.scss';

type ProductPricesProps = {
  isOld: boolean;
};

const ProductPrices = ({ isOld }: ProductPricesProps): JSX.Element => {
  const { values, setFieldValue } = useFormikContext<ProductIntialType>();
  const { prices } = values;
  const [isButtonVisible, setIsButtonVisible] = useState(true);
  const handleAddPrice = (): void => {
    setFieldValue('prices', [...prices, { amount: 0 }]);
    setIsButtonVisible(false);
  };

  return (
    <FieldArray
      name="prices"
      render={() => (
        <div>
          <div className={styles.container}>
            {prices.map((_price, index) => (
              <div key={index}>
                <Field
                  type="number"
                  name={`prices.${index}.amount`}
                  placeholder="Price"
                  component={InputField}
                  heading="Price"
                  disabled={index !== prices.length - 1 && !isButtonVisible}
                  min={0}
                />
              </div>
            ))}
          </div>
          {isOld && isButtonVisible && (
            <Button style={{ marginTop: '10px' }} variant="outline-success" onClick={handleAddPrice}>
              Add Price
            </Button>
          )}
        </div>
      )}
    />
  );
};

export default ProductPrices;
