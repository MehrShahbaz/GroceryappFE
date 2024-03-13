import { useEffect } from 'react'; // Import useEffect
import { useDispatch, useSelector } from 'react-redux';

import { selectAllCategories } from '../../redux/selectors/categorySelector';
import { fetchCategories } from '../../redux/slices/categorySlice';
import { AppDispatch } from '../../redux/store/store';

import CreateCategory from './CreateUpdateCategoey/CreateUpdateCategoey';

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
        <CreateCategory />
      </div>
    </div>
  );
};

export default Categories;
