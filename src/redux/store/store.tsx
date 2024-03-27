import { configureStore } from '@reduxjs/toolkit';

import categorySlice from '../slices/categorySlice';
import manufacturerSlice from '../slices/manufacturerSlice';
import productSlice from '../slices/productSlice';
import storeSlice from '../slices/storeSlice';

const store = configureStore({
  reducer: {
    category: categorySlice,
    manufacturer: manufacturerSlice,
    store: storeSlice,
    product: productSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>; // Define RootState type correctly
export type AppDispatch = typeof store.dispatch;

export default store;
