import { createSelector } from '@reduxjs/toolkit';

import { CategoryState } from '../../types/categoryTypes';
import { RootState } from '../store/store';

const selectCategoryState = (state: RootState): CategoryState => state.category;

export const selectAllCategories = createSelector(selectCategoryState, (categoryState) => categoryState.categories);
