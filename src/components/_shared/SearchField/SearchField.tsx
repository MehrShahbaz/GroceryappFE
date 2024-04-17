import { ChangeEvent } from 'react';
import { Button, Form, FormControl } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';

import styles from './SearchField.module.scss';

type SearchFieldProps = {
  placeholder: string;
  onSearch: () => void;
  searchTerm: string;
  setSearchTerm: (value: string) => void;
};

const SearchField = ({ placeholder, onSearch, searchTerm, setSearchTerm }: SearchFieldProps): JSX.Element => {
  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
  const [searchParams, setSearchParams] = useSearchParams({});
  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setSearchTerm(event.target.value);
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    setSearchParams({ searchTerm });
    onSearch();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <div className={styles.container}>
        <FormControl
          type="text"
          placeholder={placeholder}
          className="mr-sm-2"
          value={searchTerm}
          onChange={handleChange}
        />
        <Button type="submit" variant="outline-success">
          Search
        </Button>
      </div>
    </Form>
  );
};

export default SearchField;
