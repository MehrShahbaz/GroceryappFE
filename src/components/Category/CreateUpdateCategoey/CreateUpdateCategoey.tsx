import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Field, Form, Formik } from 'formik';

import { createCategory } from '../../../redux/slices/categorySlice';
import { AppDispatch } from '../../../redux/store/store';
import { CreateCategoryType } from '../../../types/categoryTypes';
import Modal from '../../_shared/Modal/Modal';

import styles from './CreateUpdateCategoey.module.scss';

const CreateCategory = (): JSX.Element => {
  const [isShow, setIsShow] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const handleSubmit = (values: CreateCategoryType): void => {
    dispatch(createCategory(values)).then((_res) => onHide());
  };
  const onHide = (): void => setIsShow(false);

  return (
    <div>
      <Button variant="outline-success" onClick={() => setIsShow(true)}>
        Create Category
      </Button>
      <Modal isShow={isShow} onHide={onHide} heading="Add Category" subHeading="Please Enter the name for the category">
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

export default CreateCategory;
