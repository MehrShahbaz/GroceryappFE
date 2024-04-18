import { useCallback } from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Field, Form, Formik } from 'formik';
import { AppDispatch } from 'redux/store/store';
import { ProductReviewSchema } from 'schema/storeSchema';

import InputField from 'components/_shared/InputField/InputField';
import Modal from 'components/_shared/Modal/Modal';

import { updateProduct } from '../../../../../redux/slices/productSlice';

import styles from './AddReview.module.scss';

type AddReviewProps = {
  isShow: boolean;
  setIsShow: (flag: boolean) => void;
};

const INTIAL_VALUES: FormValuesType = {
  content: '',
  rating: 0,
  title: '',
};

type FormValuesType = {
  content: string;
  rating: number;
  title: string;
};
const AddReview = ({ isShow, setIsShow }: AddReviewProps): JSX.Element => {
  const dispatch = useDispatch<AppDispatch>();
  const { productId } = useParams<{ productId: string }>();
  const handleSubmit = useCallback(
    (value: FormValuesType) => {
      if (productId) {
        const data = {
          params: { reviews_attributes: [value] },
          id: productId,
          successMessage: 'Review Added successfully',
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
    <Modal isShow={isShow} onHide={onHide} heading="Add Review">
      <Formik
        onSubmit={(value) => handleSubmit(value)}
        initialValues={INTIAL_VALUES}
        validationSchema={ProductReviewSchema}
      >
        {({ dirty: isDirty, isValid, errors }) => (
          <Form>
            <div className={styles.formContainer}>
              <Field
                type="text"
                name="title"
                placeholder="Title"
                component={InputField}
                heading="Title"
                errors={errors.title}
              />
              <Field
                type="number"
                name="rating"
                placeholder="Rating"
                component={InputField}
                heading="Rating"
                min={0}
                max={5}
                errors={errors.rating}
              />
              <Field
                type="text"
                name="content"
                placeholder="Description"
                component={InputField}
                heading="Description"
                errors={errors.content}
              />
              <div className={styles.buttonContainer}>
                <Button variant="outline-danger" onClick={onHide}>
                  Close
                </Button>
                <Button variant="outline-success" type="submit" disabled={!isDirty || !isValid}>
                  Add Review
                </Button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </Modal>
  );
};

export default AddReview;
