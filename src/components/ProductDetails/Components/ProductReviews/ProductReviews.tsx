import { Button, Table } from 'react-bootstrap';
import { ReviewType } from 'types/productTypes';

import styles from './ProductReviews.module.scss';

type ProductReviewsProps = {
  reviews: ReviewType[];
};

const ProductReviews = ({ reviews }: ProductReviewsProps): JSX.Element => (
  <div className={styles.container}>
    <div className={styles.headingContainer}>
      <h4>Reviews</h4>
      <Button variant="outline-success" onClick={() => console.log('Add Review')}>
        Add Review
      </Button>
    </div>
    {!reviews.length ? (
      <div>No Reviews ATM</div>
    ) : (
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Title</th>
            <th>Content</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          {reviews.map(({ id, content, rating, title }, index) => (
            <tr key={`${id} + ${index}`}>
              <td>{title ?? 'None'}</td>
              <td>{content}</td>
              <td>{rating}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    )}
  </div>
);

export default ProductReviews;
