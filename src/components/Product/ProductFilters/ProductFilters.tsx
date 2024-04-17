import { useCallback, useEffect, useMemo } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { splitFoodMartsArrayIntoChunks } from 'helper/helper';
import { AppDispatch } from 'redux/store/store';

import { selectAllFoodMarts } from '../../../redux/selectors/foodMartSelector';
import { fetchFoodMart } from '../../../redux/slices/foodMartSlice';
import { fetchManufacturers } from '../../../redux/slices/manufacturerSlice';
import Modal from '../../_shared/Modal/Modal';

import styles from './ProductFilters.module.scss';

type ProductFiltersProps = {
  isShow: boolean;
  setIsShow: (flag: boolean) => void;
  selectedFoodMart: number[];
  setSelectedFoodMart: (data: number[]) => void;
  onSubmit: () => void;
  onReset: () => void;
};

const ProductFilters = ({
  isShow,
  setIsShow,
  selectedFoodMart,
  setSelectedFoodMart,
  onSubmit,
  onReset,
}: ProductFiltersProps): JSX.Element => {
  const dispatch = useDispatch<AppDispatch>();
  const CATEGORY_PER_ROW = 3;
  const foodMarts = useSelector(selectAllFoodMarts);
  const onHide = useCallback(() => setIsShow(false), [setIsShow]);
  const formatedFoodMarts = useMemo(() => splitFoodMartsArrayIntoChunks(foodMarts, CATEGORY_PER_ROW), [foodMarts]);

  useEffect(() => {
    dispatch(fetchManufacturers());
    dispatch(fetchFoodMart());
  }, [dispatch]);

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
