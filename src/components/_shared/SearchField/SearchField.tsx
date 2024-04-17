import { ChangeEvent } from 'react';
import { debounce } from 'lodash';

import styles from './SearchField.module.scss';

type SearchFieldProps = {
  placeholder: string;
  onSearch: (value: string) => void;
};

const SearchField = ({ placeholder, onSearch }: SearchFieldProps): JSX.Element => {
  const handleDeBounceChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const data = event.target.value;

    onSearch(data);
  };
  const debouncedOnChange = debounce(handleDeBounceChange, 800);

  return (
    <div className={styles.container}>
      <input type="text" onChange={debouncedOnChange} placeholder={placeholder} className={styles.input} />{' '}
    </div>
  );
};

export default SearchField;
