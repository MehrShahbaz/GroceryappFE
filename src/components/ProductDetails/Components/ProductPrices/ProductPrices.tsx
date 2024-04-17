import { useMemo, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Line } from 'react-chartjs-2';
import { CategoryScale, Chart as ChartJs, LinearScale, LineElement, PointElement } from 'chart.js';
import { format } from 'date-fns';
import { calculateAveragePrice } from 'helper/helper';
import { PriceType } from 'types/productTypes';

import AddPrice from './AddPrice/AddPrice';

import styles from './ProductPrices.module.scss';

type ProductPricesProps = {
  prices: PriceType[];
};

ChartJs.register(CategoryScale, LinearScale, LineElement, PointElement);

const ProductPrices = ({ prices }: ProductPricesProps): JSX.Element => {
  const [isShow, setIsShow] = useState(false);
  const priceArray = useMemo(() => prices.map(({ amount }) => amount), [prices]);
  const labelsArray = useMemo(
    () => prices.map(({ created_at: createdAt }) => format(new Date(createdAt ?? 0), 'dd-MM-yyyy')),
    [prices]
  );
  const data = {
    labels: labelsArray,
    datasets: [
      {
        label: 'Sales of the week',
        data: priceArray,
        backgroundColor: 'aqua',
        borderColor: 'black',
        pointBorderColor: 'aqua',
      },
    ],
  };

  return (
    <div className={styles.container}>
      <div className={styles.headingContainer}>
        <h4>Prices</h4>
        <Button variant="outline-success" onClick={() => setIsShow(true)}>
          Add Price
        </Button>
      </div>
      <h6>Average Price: {calculateAveragePrice(prices)}</h6>
      <div className={styles.graphContainer}>
        <Line data={data} />
      </div>
      {isShow && <AddPrice isShow={isShow} setIsShow={(willShow) => setIsShow(willShow)} />}
    </div>
  );
};

export default ProductPrices;
