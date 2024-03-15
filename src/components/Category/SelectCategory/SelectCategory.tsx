// SelectCategory.tsx
import { useSelector } from 'react-redux';
import Select from 'react-select';
import { FieldProps } from 'formik';

import { selectAllCategories } from '../../../redux/selectors/categorySelector';
import { Category } from '../../../types/categoryTypes';

interface SelectCategoryProps extends FieldProps {
  options: Category[];
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
        getOptionValue={(option: Category) => `${option._id}`}
        getOptionLabel={(option: Category) => `${option.name}`}
        onChange={(option) => form.setFieldValue(field.name, option)} // Set field value
      />
    </div>
  );
};

export default SelectCategory;
