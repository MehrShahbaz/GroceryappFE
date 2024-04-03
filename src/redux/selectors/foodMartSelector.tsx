import { createSelector } from '@reduxjs/toolkit';

import { FoodMartState } from '../../types/foodMartTypes';
import { RootState } from '../store/store';

const selectStoreState = (state: RootState): FoodMartState => state.store;

export const selectAllFoodMarts = createSelector(selectStoreState, (storeState) => storeState.foodMarts);

export const isStoreLoading = createSelector(selectStoreState, (storeState) => storeState.loading);
