import { createSelector } from '@reduxjs/toolkit';

import { ManufacturerState } from '../../types/manufacturerTypes';
import { RootState } from '../store/store';

const selectCategoryState = (state: RootState): ManufacturerState => state.manufacturer;

export const selectAllManufacturers = createSelector(
  selectCategoryState,
  (categoryState) => categoryState.manufacturers
);

export const isCategoryLoading = createSelector(selectCategoryState, (categoryState) => categoryState.loading);
