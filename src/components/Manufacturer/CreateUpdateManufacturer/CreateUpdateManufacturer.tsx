import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Field, Form, Formik } from 'formik';

import { createManufacturer } from '../../../redux/slices/manufacturerSlice';
import { AppDispatch } from '../../../redux/store/store';
import { CreateManufacturerType } from '../../../types/manufacturerTypes';
import Modal from '../../_shared/Modal/Modal';

import styles from './styles.module.scss';

const CreateManufacturer = (): JSX.Element => {
  const [isShow, setIsShow] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const handleSubmit = (values: CreateManufacturerType): void => {
    dispatch(createManufacturer(values)).then(() => onHide());
  };
  const onHide = (): void => setIsShow(false);

  return (
    <div>
      <Button variant="outline-success" onClick={() => setIsShow(true)}>
        Create Manufacturer
      </Button>
      <Modal
        isShow={isShow}
        onHide={onHide}
        heading="Add Manufacturer"
        subHeading="Please Enter the name for the Manufacturer"
      >
        <div>
          <Formik initialValues={{ name: '' }} onSubmit={(values) => handleSubmit(values)}>
            <Form>
              <Field type="text" name="name" placeholder="Name" />
              <div className={styles.buttonContainer}>
                <Button variant="outline-danger" onClick={onHide}>
                  Close
                </Button>
                <Button variant="outline-success" type="submit">
                  Create
                </Button>
              </div>
            </Form>
          </Formik>
        </div>
      </Modal>
    </div>
  );
};

export default CreateManufacturer;
