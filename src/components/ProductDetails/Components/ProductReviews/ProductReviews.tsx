import { useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import { ReviewType } from 'types/productTypes';

import StarRating from 'components/_shared/ReviewStars/ReviewStars';

import AddReview from './AddReview/AddReview';

import styles from './ProductReviews.module.scss';

type ProductReviewsProps = {
  reviews: ReviewType[];
};

const ProductReviews = ({ reviews }: ProductReviewsProps): JSX.Element => {
  const [isShow, setIsShow] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.headingContainer}>
        <h4>Reviews</h4>
        <Button variant="outline-success" onClick={() => setIsShow(true)}>
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
              <th>Ratings</th>
            </tr>
          </thead>
          <tbody>
            {reviews.map(({ id, content, rating, title }, index) => (
              <tr key={`${id} + ${index}`}>
                <td>{title ?? 'None'}</td>
                <td>{content}</td>
                <td>
                  <StarRating rating={rating} />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
      {isShow && <AddReview isShow={isShow} setIsShow={(willShow) => setIsShow(willShow)} />}
    </div>
  );
};

export default ProductReviews;
