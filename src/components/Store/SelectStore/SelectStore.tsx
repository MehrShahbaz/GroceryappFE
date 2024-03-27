import { useSelector } from 'react-redux';
import Select from 'react-select';
import { FieldProps } from 'formik';

import { selectAllStores } from '../../../redux/selectors/storeSelector';
import { Store } from '../../../types/storeTypes';

interface SelectStoreProps extends FieldProps {
  options: Store[];
}

const SelectStore: React.FC<SelectStoreProps> = ({ field, form }) => {
  const store = useSelector(selectAllStores);

  return (
    <div>
      <Select
        {...field}
        options={store}
        placeholder="Select Store"
        isClearable
        isSearchable
        isMulti={false}
        getOptionValue={(option: Store) => `${option._id}`}
        getOptionLabel={(option: Store) => `${option.name}`}
        onChange={(option) => form.setFieldValue(field.name, option)} // Set field value
      />
    </div>
  );
};

export default SelectStore;
