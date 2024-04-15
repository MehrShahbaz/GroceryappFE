import { useSelector } from 'react-redux';
import Select from 'react-select';
import { FieldProps } from 'formik';

import { selectAllFoodMarts } from '../../../redux/selectors/foodMartSelector';
import { FoodMart } from '../../../types/foodMartTypes';

import styles from '../Store.module.scss';

interface SelectStoreProps extends FieldProps {
  options: FoodMart[];
}

const SelectFoodMart: React.FC<SelectStoreProps> = ({ field, form }) => {
  const foodMart = useSelector(selectAllFoodMarts);

  return (
    <div>
      <div className={styles.heading}>Food Mart</div>
      <Select
        {...field}
        options={foodMart}
        placeholder="Select Food Mart"
        isClearable
        isSearchable
        isMulti={false}
        getOptionValue={(option: FoodMart) => `${option.id}`}
        getOptionLabel={(option: FoodMart) => `${option.name} - ${option.note}`}
        onChange={(option) => form.setFieldValue(field.name, option)} // Set field value
      />
    </div>
  );
};

export default SelectFoodMart;
