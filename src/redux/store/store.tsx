import { configureStore } from '@reduxjs/toolkit';

import categorySlice from '../slices/categorySlice';

const store = configureStore({
  reducer: {
    category: categorySlice,
  },
});

export type RootState = ReturnType<typeof store.getState>; // Define RootState type correctly
export type AppDispatch = typeof store.dispatch;

export default store;
