import { configureStore } from '@reduxjs/toolkit';

import categorySlice from '../slices/categorySlice';
import storeSlice from '../slices/foodMartSlice';
import manufacturerSlice from '../slices/manufacturerSlice';
import productSlice from '../slices/productSlice';

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
