import { createSelector } from '@reduxjs/toolkit';

import { ProductState } from '../../types/productTypes';
import { RootState } from '../store/store';

const selectProductState = (state: RootState): ProductState => state.product;

export const selectAllProducts = createSelector(selectProductState, (productState) => productState.products);

export const isProductsLoading = createSelector(selectProductState, (productState) => productState.loading);

export const productCount = createSelector(selectProductState, (productState) => productState.totalCount);
