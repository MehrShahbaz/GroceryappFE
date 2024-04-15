/* eslint-disable @typescript-eslint/no-explicit-any */
import styles from './InputField.module.scss';

type InputFieldProps = {
  field: any;
  form: any;
  heading: string;
  [key: string]: any;
};

const InputField = ({ field, heading, ...props }: InputFieldProps): JSX.Element => (
  <div>
    <label htmlFor={field.name} className={styles.heading}>
      {heading}
    </label>
    <input {...field} {...props} className={styles.inputField} />
  </div>
);

export default InputField;
