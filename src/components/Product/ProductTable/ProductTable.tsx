import { useMemo } from 'react';
import { Table } from 'react-bootstrap';

import StarRating from 'components/_shared/ReviewStars/ReviewStars';

// import { ReactComponent as DeleteIcon } from '../../../assets/deleteIcon.svg';
// import { ReactComponent as EditIcon } from '../../../assets/editIcon.svg';
import { calculateReview } from '../../../helper/helper';
import { Product } from '../../../types/productTypes';

import styles from './ProductTable.module.scss';

type ProductTableProps = {
  products: Product[];
  perPage: number;
  currentPage: number;
};

const ProductTable = ({ products, perPage, currentPage }: ProductTableProps): JSX.Element => {
  const offset = useMemo(() => (currentPage - 1) * perPage, [currentPage, perPage]);

  return (
    <div className={styles.container}>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Price</th>
            <th>Store</th>
            <th>Review</th>
            <th>Categories</th>
            <th>Manufacturers</th>
            {/* <th>Actions</th> */}
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => {
            const { name, id, prices, food_mart: foodMart, reviews, categories, manufacturer } = product;

            return (
              <tr key={`${id} + ${name}`}>
                <td>{index + offset + 1}</td>
                <td>{name}</td>
                <td>€{prices[0].amount}</td>
                <td>
                  <a href={foodMart.location} target="_blank" rel="noreferrer">
                    {foodMart.name} - {foodMart.note}
                  </a>
                </td>
                <td>
                  {' '}
                  <StarRating rating={calculateReview(reviews)} />
                </td>
                <td>
                  <div className={styles.categories}>{categories.map(({ name: cName }) => `${cName}, `)}</div>
                </td>
                <td>
                  <div className={styles.categories}>{manufacturer?.name ?? 'None'}</div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default ProductTable;
