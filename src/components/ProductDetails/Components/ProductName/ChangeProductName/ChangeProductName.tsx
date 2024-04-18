import { useCallback } from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Field, Form, Formik } from 'formik';
import { AppDispatch } from 'redux/store/store';
import { ProductNameSchema } from 'schema/storeSchema';

import InputField from 'components/_shared/InputField/InputField';
import Modal from 'components/_shared/Modal/Modal';

import { updateProduct } from '../../../../../redux/slices/productSlice';

import styles from '../ProductName.module.scss';

type ChangeProductNameProps = {
  isShow: boolean;
  setIsShow: (flag: boolean) => void;
  name: string;
};

const ChangeProductName = ({ isShow, setIsShow, name }: ChangeProductNameProps): JSX.Element => {
  const dispatch = useDispatch<AppDispatch>();
  const { productId } = useParams<{ productId: string }>();
  const handleSubmit = useCallback(
    (value: string) => {
      if (productId) {
        const data = {
          params: { name: value },
          id: productId,
          successMessage: 'Name Changed successfully',
        };

        dispatch(updateProduct(data))
          .unwrap()
          .then(() => setIsShow(false));
      }
    },
    [productId, dispatch, setIsShow]
  );
  const onHide = (): void => setIsShow(false);

  return (
    <Modal isShow={isShow} onHide={onHide} heading="Change Name">
      <Formik
        onSubmit={(value) => handleSubmit(value.name)}
        initialValues={{ name }}
        validationSchema={ProductNameSchema}
      >
        {({ dirty: isDirty, isValid, errors }) => (
          <Form>
            <div className={styles.formContainer}>
              <Field
                type="text"
                name="name"
                placeholder="Name"
                component={InputField}
                heading="Name"
                errors={errors.name}
              />

              <div className={styles.buttonContainer}>
                <Button variant="outline-danger" onClick={onHide}>
                  Close
                </Button>
                <Button variant="outline-success" type="submit" disabled={!isDirty || !isValid}>
                  Update Name
                </Button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </Modal>
  );
};

export default ChangeProductName;
