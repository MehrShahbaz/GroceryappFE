// SelectCategory.tsx
import { useSelector } from 'react-redux';
import Select from 'react-select';
import { FieldProps } from 'formik';

import { selectAllCategories } from '../../../redux/selectors/categorySelector';
import { CategoryType } from '../../../types/categoryTypes';

interface SelectCategoryProps extends FieldProps {
  options: CategoryType[];
}

const SelectCategory: React.FC<SelectCategoryProps> = ({ field, form }) => {
  const categories = useSelector(selectAllCategories);

  return (
    <div>
      <Select
        {...field}
        options={categories}
        placeholder="Select Category"
        isClearable
        isSearchable
        isMulti={false}
        getOptionValue={(option: CategoryType) => `${option.id}`}
        getOptionLabel={(option: CategoryType) => `${option.name}`}
        onChange={(option) => form.setFieldValue(field.name, option)} // Set field value
      />
    </div>
  );
};

export default SelectCategory;
