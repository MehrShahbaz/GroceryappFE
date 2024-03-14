/* eslint-disable @typescript-eslint/no-explicit-any */
import styles from './InputField.module.scss';

type InputFieldProps = {
  field: any;
  form: any;
  [key: string]: any;
};

const InputField = ({ field, ...props }: InputFieldProps): JSX.Element => (
  <input {...field} {...props} className={styles.inputField} />
);

export default InputField;
