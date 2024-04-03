// CreateProduct.tsx
import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Field, Form, Formik } from 'formik';

import { fetchCategories } from '../../../redux/slices/categorySlice';
import { fetchFoodMart } from '../../../redux/slices/foodMartSlice';
import { fetchManufacturers } from '../../../redux/slices/manufacturerSlice';
import { createProduct } from '../../../redux/slices/productSlice';
import { AppDispatch } from '../../../redux/store/store';
import { CreateProductType, ProductIntialType, PRODUCY_INTIAL_VALUES } from '../../../types/productTypes';
import InputField from '../../_shared/InputField/InputField';
import Modal from '../../_shared/Modal/Modal';
import SelectCategory from '../../Category/SelectCategory/SelectCategory';
import SelectFoodMart from '../../FoodMart/SelectFoodMart/SelectFoodMart';
import SelectManufacturer from '../../Manufacturer/SelectManufacturer/SelectManufacturer';

import styles from './CreateUpdateProduct.module.scss';

const CreateProduct = (): JSX.Element => {
  const [isShow, setIsShow] = useState(false);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchManufacturers());
    dispatch(fetchFoodMart());
  }, [dispatch]);

  const handleSubmit = (values: ProductIntialType): void => {
    console.log(values.categories);
    const data: CreateProductType = {
      category_ids: [values.categories?.id || 0],
      name: values.name,
      food_mart_id: values.foodMart?.id,
      manufacturer_id: values.manufacturer?.id,
      price_attributes: { amount: values.price },
    };

    dispatch(createProduct(data)).then(() => onHide());
  };
  const onHide = (): void => setIsShow(false);

  return (
    <div>
      <Button variant="outline-success" onClick={() => setIsShow(true)}>
        Create Product
      </Button>
      <Modal isShow={isShow} onHide={onHide} heading="Add Product" subHeading="Enter Details of the Product">
        <div>
          <Formik initialValues={PRODUCY_INTIAL_VALUES} onSubmit={(values) => handleSubmit(values)}>
            <Form>
              <div className={styles.formContainer}>
                <Field type="text" name="name" placeholder="Name" component={InputField} />
                <Field type="number" name="price" placeholder="Price" component={InputField} min={0} />
                <Field name="categories" component={SelectCategory} />
                <Field name="manufacturer" component={SelectManufacturer} />
                <Field name="foodMart" component={SelectFoodMart} />
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
