/* eslint-disable no-unused-vars */
import Card from 'react-bootstrap/Card';

// import { ReactComponent as DeleteIcon } from '../../../assets/deleteIcon.svg';
// import { ReactComponent as EditIcon } from '../../../assets/editIcon.svg';
import { calculateReview } from '../../../helper/helper';
import { Product } from '../../../types/productTypes';

// import styles from '../Product.module.scss';

type ProductCardProps = {
  product: Product;
  handleDelete: (id: number) => void;
};

const ProductCard = ({ product, handleDelete }: ProductCardProps): JSX.Element => {
  const { id, name, prices, food_mart: foodMart, reviews, categories } = product;

  return (
    <Card style={{ width: '24rem' }} key={id}>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">€{prices[0].amount}</Card.Subtitle>
        <Card.Text>
          <a href={foodMart.location} target="_blank" rel="noreferrer">
            {foodMart.name} - {foodMart.note}
          </a>
        </Card.Text>
        <Card.Text>
          <div>Reviews: {calculateReview(reviews)}</div>
        </Card.Text>
        <Card.Text>
          <ul>
            {categories.map(({ name: cName }) => (
              <li>{cName}</li>
            ))}
          </ul>
        </Card.Text>
        {/* <div className={styles.actions}>
          <button>
            <EditIcon className={styles.icon} />
          </button>
          <button onClick={() => handleDelete(id)}>
            <DeleteIcon className={styles.icon} />
          </button>
        </div> */}
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
