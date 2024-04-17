import ReactSelect from 'react-select';

import styles from './PerPage.module.scss';

type PerPageProps = {
  current: number;
  onChange: (value: number) => void;
};

const options = [
  { value: 5, label: 5 },
  { value: 10, label: 10 },
  { value: 15, label: 15 },
  { value: 20, label: 20 },
  { value: 25, label: 25 },
];
const PerPage = ({ current, onChange }: PerPageProps): JSX.Element => (
  <div className={styles.container}>
    <div className={styles.selectContainer}>
      <ReactSelect
        options={options}
        value={{ value: current, label: current }}
        onChange={(value) => onChange(value?.label || 5)}
        placeholder="Per Page"
      />
    </div>
  </div>
);

export default PerPage;
