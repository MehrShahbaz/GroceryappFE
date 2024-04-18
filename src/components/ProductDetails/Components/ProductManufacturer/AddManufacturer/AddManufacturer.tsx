import { useCallback, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Field, Form, Formik } from 'formik';
import { AppDispatch } from 'redux/store/store';
import { ProductManufacturerSchema } from 'schema/storeSchema';
import { Manufacturer } from 'types/manufacturerTypes';

import Modal from 'components/_shared/Modal/Modal';
import SelectManufacturer from 'components/Manufacturer/SelectManufacturer/SelectManufacturer';

import { fetchManufacturers } from '../../../../../redux/slices/manufacturerSlice';
import { updateProduct } from '../../../../../redux/slices/productSlice';

import styles from './AddManufacturer.module.scss';

type AddManufacturerProps = {
  isShow: boolean;
  setIsShow: (flag: boolean) => void;
  manufacturer?: Manufacturer;
};

const INTIAL_VALUES = { manufacturer: undefined };
const AddManufacturer = ({ isShow, setIsShow, manufacturer }: AddManufacturerProps): JSX.Element => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchManufacturers());
  }, [dispatch]);
  const { productId } = useParams<{ productId: string }>();
  const handleSubmit = useCallback(
    (value: undefined | Manufacturer) => {
      if (productId && value) {
        const data = {
          params: { manufacturer_id: value.id },
          id: productId,
          successMessage: `Manufacturer ${manufacturer ? 'Changed' : 'Added'} successfully`,
        };

        dispatch(updateProduct(data))
          .unwrap()
          .then(() => setIsShow(false));
      }
    },
    [productId, manufacturer, dispatch, setIsShow]
  );
  const onHide = (): void => setIsShow(false);

  return (
    <Modal isShow={isShow} onHide={onHide} heading={`${manufacturer ? 'Change' : 'Add'} Manufacturer`}>
      <Formik
        onSubmit={(value) => handleSubmit(value.manufacturer)}
        initialValues={INTIAL_VALUES}
        validationSchema={ProductManufacturerSchema}
      >
        {({ dirty: isDirty, isValid }) => (
          <Form>
            <div className={styles.formContainer}>
              <Field name="manufacturer" component={SelectManufacturer} />

              <div className={styles.buttonContainer}>
                <Button variant="outline-danger" onClick={onHide}>
                  Close
                </Button>
                <Button variant="outline-success" type="submit" disabled={!isDirty || !isValid}>
                  {manufacturer ? 'Change' : 'Add'} Manufacturer
                </Button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </Modal>
  );
};

export default AddManufacturer;
