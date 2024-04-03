import Card from 'react-bootstrap/Card';

import { ReactComponent as DeleteIcon } from '../../../assets/deleteIcon.svg';
import { ReactComponent as EditIcon } from '../../../assets/editIcon.svg';
import { calculateReview } from '../../../helper/helper';
import { Product } from '../../../types/productTypes';

import styles from '../Product.module.scss';

type ProductCardProps = {
  product: Product;
  handleDelete: (id: number) => void;
};

const ProductCard = ({ product, handleDelete }: ProductCardProps): JSX.Element => {
  const { id, name, prices, food_mart: foodMart, reviews } = product;

  return (
    <Card style={{ width: '18rem' }} key={id}>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">€{prices[0].amount}</Card.Subtitle>
        <Card.Text>
          <div>
            <div>
              {foodMart.name} - {foodMart.note}
            </div>
            <div>
              <a href={foodMart.location} target="_blank" rel="noreferrer">
                Location
              </a>
            </div>
          </div>
        </Card.Text>
        <Card.Text>
          <div>
            <div>Reviews: {calculateReview(reviews)}</div>
          </div>
        </Card.Text>
        <div className={styles.actions}>
          <button>
            <EditIcon className={styles.icon} />
          </button>
          <button onClick={() => handleDelete(id)}>
            <DeleteIcon className={styles.icon} />
          </button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
