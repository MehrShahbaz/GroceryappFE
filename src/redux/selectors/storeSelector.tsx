import { createSelector } from '@reduxjs/toolkit';

import { StoreState } from '../../types/storeTypes';
import { RootState } from '../store/store';

const selectStoreState = (state: RootState): StoreState => state.store;

export const selectAllStores = createSelector(selectStoreState, (storeState) => storeState.stores);

export const isStoreLoading = createSelector(selectStoreState, (storeState) => storeState.loading);
