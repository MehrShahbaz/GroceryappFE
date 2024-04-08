/* eslint-disable @typescript-eslint/ban-types */
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MultiValue } from 'react-select';
import CreatableSelect from 'react-select/creatable';
import debounce from 'lodash/debounce';

import { convertListSelectable } from '../../../helper/helper';
import { selectAllCategories } from '../../../redux/selectors/categorySelector';
import { createCategory, fetchCategories } from '../../../redux/slices/categorySlice';
import { AppDispatch } from '../../../redux/store/store';

const SelectCategories = (): JSX.Element => {
  const dispatch = useDispatch<AppDispatch>();
  const categories = useSelector(selectAllCategories);
  const [selectedValues, setSelectedValues] = useState<{}>([]);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const convertedList = useMemo(() => convertListSelectable(categories), [categories]);
  const handleCreate = useCallback(
    (value: string) => {
      dispatch(createCategory({ name: value }));
    },
    [dispatch]
  );
  const handleSelect = useCallback((value: MultiValue<{}>) => {
    setSelectedValues(value);
  }, []);
  const handleInputChange = debounce((value: string) => {
    dispatch(fetchCategories(value));
  }, 500);

  return (
    <div>
      <CreatableSelect
        options={convertedList}
        isMulti
        onCreateOption={handleCreate}
        value={selectedValues}
        onChange={handleSelect}
        onInputChange={(value: string) => {
          handleInputChange(value);
        }}
      />
    </div>
  );
};

export default SelectCategories;
