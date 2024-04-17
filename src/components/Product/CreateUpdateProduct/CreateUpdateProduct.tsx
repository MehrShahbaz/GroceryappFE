// CreateProduct.tsx
import { useEffect, useMemo } from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Field, Form, Formik } from 'formik';

import InputField from 'components/_shared/InputField/InputField';
import SelectCategory from 'components/Category/SelectCategory/SelectCategory';
import SelectFoodMart from 'components/FoodMart/SelectFoodMart/SelectFoodMart';
import SelectManufacturer from 'components/Manufacturer/SelectManufacturer/SelectManufacturer';

import { fetchCategories } from '../../../redux/slices/categorySlice';
import { fetchFoodMart } from '../../../redux/slices/foodMartSlice';
import { fetchManufacturers } from '../../../redux/slices/manufacturerSlice';
import { createProduct, fetchProducts } from '../../../redux/slices/productSlice';
import { AppDispatch } from '../../../redux/store/store';
import { CreateProductParams, Product, ProductIntialType, PRODUCY_INTIAL_VALUES } from '../../../types/productTypes';
import Modal from '../../_shared/Modal/Modal';

import ProductPrices from './ProductPrices/ProductPrices';

import styles from './CreateUpdateProduct.module.scss';

type CreateProductProps = {
  isShow: boolean;
  setIsShow: (flag: boolean) => void;
  product?: Product;
};

const CreateUpdateProduct = ({ isShow, setIsShow, product }: CreateProductProps): JSX.Element => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchManufacturers());
    dispatch(fetchFoodMart());
  }, [dispatch]);

  const modalHeading = useMemo(() => `${product ? 'Edit' : 'Add'} Product`, [product]);
  const handleSubmit = (values: ProductIntialType | Product): void => {
    const data: CreateProductParams = {
      food_mart_id: values.food_mart?.id,
      manufacturer_id: values.manufacturer?.id,
      name: values.name,
      prices_attributes: [{ amount: values.prices[0].amount }],
      category_ids: values.categories?.map((category) => category.id),
    };

    dispatch(createProduct(data)).then(() => {
      setIsShow(false);
      dispatch(fetchProducts({}));
    });
  };
  const onHide = (): void => setIsShow(false);

  return (
    <Modal isShow={isShow} onHide={onHide} heading={modalHeading}>
      <Formik onSubmit={handleSubmit} initialValues={product || PRODUCY_INTIAL_VALUES}>
        {({ dirty: isDirty, isValid }) => (
          <Form>
            <div className={styles.formContainer}>
              <Field type="text" name="name" placeholder="Name" component={InputField} heading="Name" />
              <ProductPrices isOld={Boolean(product)} />

              <Field name="categories" component={SelectCategory} />
              <Field name="manufacturer" component={SelectManufacturer} />
              <Field name="food_mart" component={SelectFoodMart} />
              <div className={styles.buttonContainer}>
                <Button variant="outline-danger" onClick={onHide}>
                  Close
                </Button>
                <Button variant="outline-success" type="submit" disabled={!isDirty || !isValid}>
                  {product ? 'Update' : 'Create'}
                </Button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </Modal>
  );
};

export default CreateUpdateProduct;
