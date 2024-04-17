import { useCallback, useEffect, useMemo } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { splitCategoryArrayIntoChunks, splitFoodMartsArrayIntoChunks } from 'helper/helper';
import { AppDispatch } from 'redux/store/store';

import { selectAllCategories } from '../../../redux/selectors/categorySelector';
import { selectAllFoodMarts } from '../../../redux/selectors/foodMartSelector';
import { fetchCategories } from '../../../redux/slices/categorySlice';
import { fetchFoodMart } from '../../../redux/slices/foodMartSlice';
import { fetchManufacturers } from '../../../redux/slices/manufacturerSlice';
import Modal from '../../_shared/Modal/Modal';

import styles from './ProductFilters.module.scss';

type ProductFiltersProps = {
  isShow: boolean;
  setIsShow: (flag: boolean) => void;
  selectedCategories: number[];
  setSelectedCategories: (data: number[]) => void;
  selectedFoodMart: number[];
  setSelectedFoodMart: (data: number[]) => void;
  onSubmit: () => void;
  onReset: () => void;
};

const ProductFilters = ({
  isShow,
  setIsShow,
  selectedCategories,
  setSelectedCategories,
  selectedFoodMart,
  setSelectedFoodMart,
  onSubmit,
  onReset,
}: ProductFiltersProps): JSX.Element => {
  const dispatch = useDispatch<AppDispatch>();
  const CATEGORY_PER_ROW = 3;
  const categories = useSelector(selectAllCategories);
  const foodMarts = useSelector(selectAllFoodMarts);
  const onHide = useCallback(() => setIsShow(false), [setIsShow]);
  const formatedCategories = useMemo(() => splitCategoryArrayIntoChunks(categories, CATEGORY_PER_ROW), [categories]);
  const formatedFoodMarts = useMemo(() => splitFoodMartsArrayIntoChunks(foodMarts, CATEGORY_PER_ROW), [foodMarts]);

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchManufacturers());
    dispatch(fetchFoodMart());
  }, [dispatch]);

  const handleCategoryCheckboxChange = (categoryId: number): void => {
    let data = [];

    if (selectedCategories.includes(categoryId)) {
      data = selectedCategories.filter((id) => id !== categoryId);
    } else {
      data = [...selectedCategories, categoryId];
    }

    setSelectedCategories(data);
  };
  const handleFoodMartCheckboxChange = (foodMartId: number): void => {
    let data = [];

    if (selectedFoodMart.includes(foodMartId)) {
      data = selectedFoodMart.filter((id) => id !== foodMartId);
    } else {
      data = [...selectedFoodMart, foodMartId];
    }

    setSelectedFoodMart(data);
  };

  console.log(formatedFoodMarts);

  return (
    <Modal isShow={isShow} onHide={onHide} heading="Filters">
      <div className={styles.switchContainer}>
        <div>
          <h5>Categories</h5>
          {formatedCategories.map((data) => (
            <Row key={data[0].id}>
              {data.map((category) => (
                <Col key={category.id}>
                  <div className={styles.checkboxContainer}>
                    <div>
                      <input
                        type="checkbox"
                        onChange={() => handleCategoryCheckboxChange(category.id)}
                        checked={selectedCategories.includes(category.id)}
                      />
                    </div>
                    <div>{category.name}</div>
                  </div>
                </Col>
              ))}
            </Row>
          ))}
        </div>

        <div>
          <h5>Food Marts</h5>
          {formatedFoodMarts.map((data) => (
            <Row key={data[0].id}>
              {data.map((foodMart) => (
                <Col key={foodMart.id}>
                  <div className={styles.checkboxContainer}>
                    <div>
                      <input
                        type="checkbox"
                        onChange={() => handleFoodMartCheckboxChange(foodMart.id)}
                        checked={selectedFoodMart.includes(foodMart.id)}
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
          <Button variant="outline-danger" onClick={onReset}>
            Reset
          </Button>
          <Button variant="outline-success" onClick={onSubmit}>
            Filter
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default ProductFilters;
