import { FoodMartType } from 'types/productTypes';

type ProductFoodMartProps = {
  foodMart: FoodMartType;
};

const ProductFoodMart = ({ foodMart }: ProductFoodMartProps): JSX.Element => {
  const { name, note, location } = foodMart;

  return (
    <div>
      <div>{name}</div>
      <div>{location}</div>
      <div>{note}</div>
    </div>
  );
};

export default ProductFoodMart;
