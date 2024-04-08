import { useCallback, useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import { productCount, selectAllProducts } from '../../redux/selectors/productSelector';
import { deleteProduct, fetchProducts } from '../../redux/slices/productSlice';
import { AppDispatch } from '../../redux/store/store';
import Pagination from '../_shared/Pagination/Pagination';
import PerPage from '../_shared/PerPage/PerPage';

import CreateProduct from './CreateUpdateProduct/CreateUpdateProduct';
// import ProductCard from './ProductCard/ProductCard';
import ProductTable from './ProductTable/ProductTable';

import styles from './Product.module.scss';

const INITIAL_PER_PAGE = 25;
const Product = (): JSX.Element => {
  const products = useSelector(selectAllProducts);
  const totalCount = useSelector(productCount);
  const [isShow, setIsShow] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(INITIAL_PER_PAGE);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchProducts({ page: currentPage, perPage }));
  }, [currentPage, dispatch, perPage]);

  const handleDelete = (id: number): void => {
    dispatch(deleteProduct(id));
  };
  const handlePageChange = useCallback(
    (page: number) => {
      if (page === 0) {
        setCurrentPage(1);
      } else if (page >= totalCount / perPage) {
        setCurrentPage(totalCount / perPage);
      } else {
        setCurrentPage(page);
      }
    },
    [perPage, totalCount]
  );

  return (
    <div className={styles.container}>
      <div className={styles.headingContainer}>
        <h1>Products</h1>
        <Button variant="outline-success" onClick={() => setIsShow(true)}>
          Create Product
        </Button>
      </div>
      <PerPage current={perPage} setCurrent={setPerPage} />
      <ProductTable products={products} handleDelete={handleDelete} perPage={perPage} currentPage={currentPage} />
      <Pagination currentPage={currentPage} setCurrentPage={handlePageChange} totalPages={totalCount / perPage} />
      {isShow && <CreateProduct isShow={isShow} setIsShow={(willShow) => setIsShow(willShow)} />}
    </div>
  );
};

export default Product;
