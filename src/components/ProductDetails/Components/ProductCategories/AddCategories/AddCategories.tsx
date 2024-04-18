import { useCallback, useEffect, useMemo, useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { splitCategoryArrayIntoChunks } from 'helper/helper';
import { AppDispatch } from 'redux/store/store';

import Modal from 'components/_shared/Modal/Modal';

import { selectAllCategories } from '../../../../../redux/selectors/categorySelector';
import { fetchCategories } from '../../../../../redux/slices/categorySlice';
import { updateProduct, UpdateProductType } from '../../../../../redux/slices/productSlice';

import styles from './AddCategories.module.scss';

type AddCategoriesProps = {
  isShow: boolean;
  setIsShow: (flag: boolean) => void;
  categories?: number[];
};

const AddCategories = ({ isShow, setIsShow, categories = [] }: AddCategoriesProps): JSX.Element => {
  const [selectedCategories, setSelectedCategories] = useState(categories);
  const dispatch = useDispatch<AppDispatch>();
  const { productId } = useParams<{ productId: string }>();
  const allCategories = useSelector(selectAllCategories);
  const formatedCategories = useMemo(() => splitCategoryArrayIntoChunks(allCategories, 3), [allCategories]);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);
  const handleSubmit = useCallback(() => {
    if (productId) {
      const data: UpdateProductType = {
        params: { category_ids: selectedCategories },
        id: productId,
        successMessage: 'Categories Updated successfully',
      };

      dispatch(updateProduct(data))
        .unwrap()
        .then(() => setIsShow(false));
    }
  }, [productId, selectedCategories, dispatch, setIsShow]);
  const onHide = (): void => setIsShow(false);
  const handleCategoriesCheckboxChange = useCallback(
    (selectedId: number) => {
      let data = [];

      if (selectedCategories.includes(selectedId)) {
        data = selectedCategories.filter((id) => id !== selectedId);
      } else {
        data = [...selectedCategories, selectedId];
      }

      setSelectedCategories(data);
    },
    [selectedCategories]
  );

  return (
    <Modal isShow={isShow} onHide={onHide} heading="Add Categories">
      <div className={styles.container}>
        <div>
          <h5>Food Marts</h5>
          {formatedCategories.map((data) => (
            <Row key={data[0].id}>
              {data.map((foodMart) => (
                <Col key={foodMart.id}>
                  <div className={styles.checkboxContainer}>
                    <div>
                      <input
                        type="checkbox"
                        onChange={() => handleCategoriesCheckboxChange(foodMart.id)}
                        checked={selectedCategories.includes(foodMart.id)}
                      />
                    </div>
                    <div>{foodMart.name}</div>
                  </div>
                </Col>
              ))}
            </Row>
          ))}
        </div>
        <div className={styles.buttonContainer}>
          <Button variant="outline-danger" onClick={onHide}>
            Close
          </Button>
          <Button variant="outline-success" onClick={() => handleSubmit()}>
            Add Categories
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default AddCategories;
