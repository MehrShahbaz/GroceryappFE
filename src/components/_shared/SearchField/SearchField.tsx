import { ChangeEvent } from 'react';
import { Button, Form, FormControl } from 'react-bootstrap';

import styles from './SearchField.module.scss';

type SearchFieldProps = {
  placeholder: string;
  onSearch: () => void;
  searchTerm: string;
  setSearchTerm: (value: string) => void;
};

const SearchField = ({ placeholder, onSearch, searchTerm, setSearchTerm }: SearchFieldProps): JSX.Element => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setSearchTerm(event.target.value);
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    onSearch();
  };
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    handleChange(event);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <div className={styles.container}>
        <FormControl
          type="text"
          placeholder={placeholder}
          className="mr-sm-2"
          value={searchTerm}
          onChange={handleInputChange}
        />
        <Button type="submit" variant="outline-success">
          Search
        </Button>
      </div>
    </Form>
  );
};

export default SearchField;
