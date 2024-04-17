import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Field, Form, Formik } from 'formik';

import { createCategory } from '../../../redux/slices/categorySlice';
import { AppDispatch } from '../../../redux/store/store';
import { CategorySchema } from '../../../schema/storeSchema';
import { CreateCategoryType } from '../../../types/categoryTypes';
import InputField from '../../_shared/InputField/InputField';
import Modal from '../../_shared/Modal/Modal';

import styles from './CreateUpdateCategoey.module.scss';

type CreateCategoryProps = {
  isShow: boolean;
  setIsShow: (value: boolean) => void;
};

const CreateCategory = ({ isShow, setIsShow }: CreateCategoryProps): JSX.Element => {
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
          <Formik
            initialValues={{ name: '' }}
            onSubmit={(values) => handleSubmit(values)}
            validationSchema={CategorySchema}
          >
            {({ isValid, dirty: isDirty }) => (
              <Form>
                <Field type="text" name="name" placeholder="Name" component={InputField} />
                <div className={styles.buttonContainer}>
                  <Button variant="outline-danger" onClick={onHide}>
                    Close
                  </Button>
                  <Button variant="outline-success" type="submit" disabled={!isDirty || !isValid}>
                    Create
                  </Button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </Modal>
    </div>
  );
};

export default CreateCategory;
