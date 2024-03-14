import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Field, Form, Formik } from 'formik';

import { createStore } from '../../../redux/slices/storeSlice';
import { AppDispatch } from '../../../redux/store/store';
import { CreateStoreType } from '../../../types/storeTypes';
import InputField from '../../_shared/InputField/InputField';
import Modal from '../../_shared/Modal/Modal';

import styles from './CreateUpdateStore.module.scss';

const CreateStore = (): JSX.Element => {
  const [isShow, setIsShow] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const handleSubmit = (values: CreateStoreType): void => {
    dispatch(createStore(values)).then(() => onHide());
  };
  const onHide = (): void => setIsShow(false);

  return (
    <div>
      <Button variant="outline-success" onClick={() => setIsShow(true)}>
        Create Store
      </Button>
      <Modal isShow={isShow} onHide={onHide} heading="Add Store" subHeading="Please Enter the name for the Store">
        <div className={styles.container}>
          <Formik initialValues={{ name: '', location: '' }} onSubmit={(values) => handleSubmit(values)}>
            <Form>
              <div className={styles.inputContainer}>
                <Field type="text" name="name" placeholder="Name" component={InputField} />
                <Field type="text" name="location" placeholder="Location" component={InputField} />
              </div>

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

export default CreateStore;
