import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { AppDispatch } from 'redux/store/store';

import { selectedProduct } from '../../redux/selectors/productSelector';
import { getProduct } from '../../redux/slices/productSlice';

import ProductName from './Components/ProductName/ProductName';
import { ProductCategories, ProductFoodMart, ProductManufacturer, ProductPrices, ProductReviews } from './Components';

import styles from './ProductDetails.module.scss';

const ProductDetails = (): JSX.Element => {
  const dispatch = useDispatch<AppDispatch>();
  const { productId } = useParams<{ productId: string }>();
  const product = useSelector(selectedProduct);

  useEffect(() => {
    if (productId) {
      dispatch(getProduct(productId));
    }
  }, [dispatch, productId]);

  if (!product) {
    return <div>Product not found</div>;
  }

  const { name, manufacturer, food_mart: foodMart, prices, categories, reviews } = product;

  return (
    <div className={styles.container}>
      <ProductName name={name} />
      <ProductManufacturer manufacturer={manufacturer} />
      <ProductFoodMart foodMart={foodMart} />
      <ProductCategories categories={categories} />
      <ProductPrices prices={prices} />
      <ProductReviews reviews={reviews} />
    </div>
  );
};

export default ProductDetails;
