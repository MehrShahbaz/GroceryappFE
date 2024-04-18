/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useState } from 'react';

import styles from './InputField.module.scss';

type InputFieldProps = {
  field: any;
  form: any;
  heading: string;
  errors?: string;
  [key: string]: any;
};

const InputField = ({ field, heading, errors, ...props }: InputFieldProps): JSX.Element => {
  const [isBlur, setIsBlur] = useState(false);
  const handleFocus = useCallback((isBlured: boolean) => {
    setIsBlur(isBlured);
  }, []);

  return (
    <div>
      <label htmlFor={field.name} className={styles.heading}>
        {heading}
      </label>
      <input
        {...field}
        {...props}
        className={styles.inputField}
        onBlur={() => handleFocus(true)}
        onFocus={() => handleFocus(false)}
      />
      {errors && isBlur && <span className={styles.errors}>{errors}</span>}
    </div>
  );
};

export default InputField;
