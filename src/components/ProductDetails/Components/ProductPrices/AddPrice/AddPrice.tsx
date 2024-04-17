import { useCallback } from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Field, Form, Formik } from 'formik';
import { AppDispatch } from 'redux/store/store';

import InputField from 'components/_shared/InputField/InputField';
import Modal from 'components/_shared/Modal/Modal';

import { updateProduct } from '../../../../../redux/slices/productSlice';

import styles from './AddPrice.module.scss';

type AddPriceProps = {
  isShow: boolean;
  setIsShow: (flag: boolean) => void;
};

const AddPrice = ({ isShow, setIsShow }: AddPriceProps): JSX.Element => {
  const dispatch = useDispatch<AppDispatch>();
  const { productId } = useParams<{ productId: string }>();
  const handleSubmit = useCallback(
    (value: number) => {
      if (productId) {
        const data = {
          params: { prices_attributes: [{ amount: value }] },
          id: productId,
          successMessage: 'Price Added successfully',
        };

        dispatch(updateProduct(data))
          .unwrap()
          .then(() => setIsShow(false));
      }
    },
    [productId, dispatch, setIsShow]
  );

  console.log(productId);
  const onHide = (): void => setIsShow(false);

  return (
    <Modal isShow={isShow} onHide={onHide} heading="Add Price">
      <Formik onSubmit={(value) => handleSubmit(value.price)} initialValues={{ price: 0 }}>
        {({ dirty: isDirty, isValid }) => (
          <Form>
            <div className={styles.formContainer}>
              <Field type="number" name={'price'} placeholder="Price" component={InputField} heading="Price" min={0} />

              <div className={styles.buttonContainer}>
                <Button variant="outline-danger" onClick={onHide}>
                  Close
                </Button>
                <Button variant="outline-success" type="submit" disabled={!isDirty || !isValid}>
                  Add Price
                </Button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </Modal>
  );
};

export default AddPrice;
