// CreateProduct.tsx
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Field, Form, Formik } from 'formik';

import { createManufacturer } from '../../../redux/slices/manufacturerSlice';
import { AppDispatch } from '../../../redux/store/store';
import { CreateManufacturerType } from '../../../types/manufacturerTypes';
import InputField from '../../_shared/InputField/InputField';
import Modal from '../../_shared/Modal/Modal';
import SelectCategory from '../../Category/SelectCategory/SelectCategory';

import styles from './CreateUpdateProduct.module.scss';

const CreateProduct = (): JSX.Element => {
  const [isShow, setIsShow] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const handleSubmit = (values: CreateManufacturerType): void => {
    console.log(values);
    dispatch(createManufacturer(values)).then(() => onHide());
  };
  const onHide = (): void => setIsShow(false);

  return (
    <div>
      <Button variant="outline-success" onClick={() => setIsShow(true)}>
        Create Product
      </Button>
      <Modal isShow={isShow} onHide={onHide} heading="Add Product" subHeading="Enter Details of the Product">
        <div>
          <Formik initialValues={{ name: '', category: null }} onSubmit={(values) => handleSubmit(values)}>
            <Form>
              <div className={styles.formContainer}>
                <Field type="text" name="name" placeholder="Name" component={InputField} />
                <Field name="category" component={SelectCategory} /> {/* Use Field with custom component */}
                <div className={styles.buttonContainer}>
                  <Button variant="outline-danger" onClick={onHide}>
                    Close
                  </Button>
                  <Button variant="outline-success" type="submit">
                    Create
                  </Button>
                </div>
              </div>
            </Form>
          </Formik>
        </div>
      </Modal>
    </div>
  );
};

export default CreateProduct;
