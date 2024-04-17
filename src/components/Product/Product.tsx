import { useCallback, useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Product as ProductType } from 'types/productTypes';

import SearchField from 'components/_shared/SearchField/SearchField';

import { productCount, selectAllProducts } from '../../redux/selectors/productSelector';
import { fetchProducts } from '../../redux/slices/productSlice';
import { AppDispatch } from '../../redux/store/store';
import Pagination from '../_shared/Pagination/Pagination';
import PerPage from '../_shared/PerPage/PerPage';

import CreateProduct from './CreateUpdateProduct/CreateUpdateProduct';
import ProductFilters from './ProductFilters/ProductFilters';
import ProductTable from './ProductTable/ProductTable';

import styles from './Product.module.scss';

const INITIAL_PER_PAGE = 5;
const Product = (): JSX.Element => {
  const products = useSelector(selectAllProducts);
  const totalCount = useSelector(productCount);
  const [isShow, setIsShow] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(INITIAL_PER_PAGE);
  const [product, setProduct] = useState<ProductType | undefined>(undefined);
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState<number[]>([]);
  const [selectedFoodMart, setSelectedFoodMart] = useState<number[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');

  useEffect(() => {
    dispatch(fetchProducts({ page: 1, perPage: INITIAL_PER_PAGE }));
  }, [dispatch]);

  // const handleDelete = (id: number): void => {
  //   dispatch(deleteProduct(id));
  // };
  // const handleEdit = (id: number): void => {
  //   const data = products.find((prod) => prod.id === id);

  //   setProduct(data);
  //   setIsShow(true);
  // };
  const handleOnFilter = useCallback(
    (value?: number) => {
      if (value) {
        setPerPage(value);
      }

      dispatch(
        fetchProducts({
          page: currentPage,
          perPage: value ?? perPage,
          categories: selectedCategories,
          foodMarts: selectedFoodMart,
          search: searchTerm,
        })
      );
    },
    [currentPage, dispatch, perPage, searchTerm, selectedCategories, selectedFoodMart]
  );
  const handlePageChange = useCallback(
    (page: number) => {
      if (page === currentPage) {
        return;
      }

      let data = 0;

      if (page === 0) {
        data = 1;
      } else if (page >= totalCount / perPage) {
        data = Math.floor(totalCount / perPage);
      } else {
        data = page;
      }

      setCurrentPage(data);

      dispatch(
        fetchProducts({
          page: data,
          perPage: perPage,
          categories: selectedCategories,
          foodMarts: selectedFoodMart,
          search: searchTerm,
        })
      );
    },
    [currentPage, dispatch, perPage, searchTerm, selectedCategories, selectedFoodMart, totalCount]
  );

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
            onSearch={handleOnFilter}
            searchTerm={searchTerm}
            setSearchTerm={(value) => setSearchTerm(value)}
          />
        </div>
        <div className={styles.filterContainer}>
          <Button variant="outline-success" onClick={() => setIsFilterModalOpen(true)}>
            Filters
          </Button>
          <PerPage current={perPage} onChange={handleOnFilter} />
        </div>
      </div>
      <ProductTable
        products={products}
        // handleDelete={handleDelete}
        // handleEdit={handleEdit}
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
      {isFilterModalOpen && (
        <ProductFilters
          isShow={isFilterModalOpen}
          setIsShow={(willShow) => setIsFilterModalOpen(willShow)}
          selectedCategories={selectedCategories}
          setSelectedCategories={setSelectedCategories}
          selectedFoodMart={selectedFoodMart}
          setSelectedFoodMart={setSelectedFoodMart}
          onSubmit={() => {
            handleOnFilter();
            setIsFilterModalOpen(false);
          }}
          onReset={() => setSelectedCategories([])}
        />
      )}
    </div>
  );
};

export default Product;
