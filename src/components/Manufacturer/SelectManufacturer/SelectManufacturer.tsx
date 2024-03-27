import { useSelector } from 'react-redux';
import Select from 'react-select';
import { FieldProps } from 'formik';

import { selectAllManufacturers } from '../../../redux/selectors/manufacturerSelector';
import { Manufacturer } from '../../../types/manufacturerTypes';

interface SelectManufacturerProps extends FieldProps {
  options: Manufacturer[];
}

const SelectManufacturer: React.FC<SelectManufacturerProps> = ({ field, form }) => {
  const manufacturer = useSelector(selectAllManufacturers);

  return (
    <div>
      <Select
        {...field}
        options={manufacturer}
        placeholder="Select Manufacturer"
        isClearable
        isSearchable
        isMulti={false}
        getOptionValue={(option: Manufacturer) => `${option._id}`}
        getOptionLabel={(option: Manufacturer) => `${option.name}`}
        onChange={(option) => form.setFieldValue(field.name, option)} // Set field value
      />
    </div>
  );
};

export default SelectManufacturer;
