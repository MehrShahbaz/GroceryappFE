import { useState } from 'react';

import styles from './SwitchBox.module.scss';

type CustomSwitchProps = {
  onChange: (value: boolean) => void;
  checked: boolean;
  label: string;
  className?: string;
};

const CustomSwitch = ({ onChange, checked, className, label }: CustomSwitchProps): JSX.Element => {
  const [isChecked, setIsChecked] = useState(checked || false);
  const handleChange = (): void => {
    const isNewValue = !isChecked;

    setIsChecked(isNewValue);
    onChange && onChange(isNewValue);
  };

  return (
    <label className={`${styles.customSwitch} ${className || ''}`}>
      <input type="checkbox" checked={isChecked} onChange={handleChange} />
      <span className={styles.slider}></span>
      <span>{label}</span>
    </label>
  );
};

export default CustomSwitch;
