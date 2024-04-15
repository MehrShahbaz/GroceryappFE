import { useCallback, useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Product as ProductType } from 'types/productTypes';

import { productCount, selectAllProducts } from '../../redux/selectors/productSelector';
import { deleteProduct, fetchProducts } from '../../redux/slices/productSlice';
import { AppDispatch } from '../../redux/store/store';
import Pagination from '../_shared/Pagination/Pagination';
import PerPage from '../_shared/PerPage/PerPage';
import SearchField from '../_shared/SearchField/SearchField';

import CreateProduct from './CreateUpdateProduct/CreateUpdateProduct';
// import ProductCard from './ProductCard/ProductCard';
import ProductTable from './ProductTable/ProductTable';

import styles from './Product.module.scss';

const INITIAL_PER_PAGE = 5;
const Product = (): JSX.Element => {
  const products = useSelector(selectAllProducts);
  const totalCount = useSelector(productCount);
  const [isShow, setIsShow] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [perPage, setPerPage] = useState(INITIAL_PER_PAGE);
  const [product, setProduct] = useState<ProductType | undefined>(undefined);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchProducts({ page: currentPage, perPage }));
  }, [currentPage, dispatch, perPage]);

  const handleDelete = (id: number): void => {
    dispatch(deleteProduct(id));
  };
  const handleEdit = (id: number): void => {
    const data = products.find((prod) => prod.id === id);

    setProduct(data);
    setIsShow(true);
  };
  const handlePageChange = useCallback(
    (page: number) => {
      if (page === 0) {
        setCurrentPage(1);
      } else if (page >= totalCount / perPage) {
        setCurrentPage(Math.floor(totalCount / perPage));
      } else {
        setCurrentPage(page);
      }
    },
    [perPage, totalCount]
  );
  const handleOnSearch = useCallback(() => {
    dispatch(fetchProducts({ page: currentPage, perPage, search: searchTerm }));
  }, [currentPage, dispatch, perPage, searchTerm]);

  return (
    <div className={styles.container}>
      <div className={styles.headingContainer}>
        <h1>Products</h1>
        <Button variant="outline-success" onClick={() => setIsShow(true)}>
          Add Product
        </Button>
      </div>
      <div className={styles.searchContainer}>
        <div>
          <SearchField
            placeholder="Search Products"
            onSearch={handleOnSearch}
            searchTerm={searchTerm}
            setSearchTerm={(value) => setSearchTerm(value)}
          />
        </div>
        <div>
          <PerPage current={perPage} setCurrent={setPerPage} />
        </div>
      </div>
      <ProductTable
        products={products}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
        perPage={perPage}
        currentPage={currentPage}
      />
      <Pagination
        currentPage={currentPage}
        setCurrentPage={handlePageChange}
        totalPages={Math.floor(totalCount / perPage)}
      />
      {isShow && (
        <CreateProduct
          product={product}
          isShow={isShow}
          setIsShow={(willShow) => {
            setIsShow(willShow);
            setProduct(undefined);
          }}
        />
      )}
    </div>
  );
};

export default Product;
