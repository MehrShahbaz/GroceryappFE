import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { getAllCategoriesService } from '../../services/categoryService';
import { CategoryState } from '../../types/categoryTypes';

const initialState: CategoryState = {
  categories: [],
  loading: false,
  error: null,
};
const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCategories.pending, (state, _action) => {
      state.loading = true;
    });
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.loading = false;

      if (action.payload) {
        state.categories = action.payload;
      }
    });
    builder.addCase(fetchCategories.rejected, (state, _action) => {
      state.loading = false;
    });
  },
});

export const fetchCategories = createAsyncThunk('category/fetchCategories', async () => {
  try {
    const response = await getAllCategoriesService();

    return response.data.categories;
  } catch (err) {
    console.log(err);
  }
});

export default categorySlice.reducer;
