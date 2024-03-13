import { useEffect } from 'react'; // Import useEffect
import { useDispatch, useSelector } from 'react-redux';
import { Field, Form, Formik } from 'formik';

import { selectAllCategories } from '../../redux/selectors/categorySelector';
import { fetchCategories } from '../../redux/slices/categorySlice';
import { AppDispatch } from '../../redux/store/store';

const Categories = (): JSX.Element => {
  const dispatch = useDispatch<AppDispatch>();
  const categories = useSelector(selectAllCategories);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <div>
      <div>
        {categories.map((category) => {
          const { name, products, _id: id } = category;

          return (
            <div key={id}>
              {name}, {products.length}
            </div>
          );
        })}
      </div>
      <div>
        <Formik initialValues={{ name: '' }} onSubmit={(values) => console.log(values)}>
          <Form>
            <Field type="text" name="name" placeholder="Name" />
            <button type="submit">Submit</button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default Categories;
