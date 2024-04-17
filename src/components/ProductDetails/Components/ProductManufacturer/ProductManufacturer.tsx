import { Manufacturer } from 'types/manufacturerTypes';

type ProductManufacturerProps = {
  manufacturer?: Manufacturer;
};

const ProductManufacturer = ({ manufacturer }: ProductManufacturerProps): JSX.Element => {
  if (!manufacturer) {
    return <div>Manufacturer: Not Assigned</div>;
  }

  const { name } = manufacturer;

  return (
    <div>
      <div>Manufacturer: {name}</div>;
    </div>
  );
};

export default ProductManufacturer;
