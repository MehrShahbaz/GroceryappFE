import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { createCategoryService, getAllCategoriesService, updateCategoryService } from '../../services/categoryService';
import { Category, CategoryParams, CategoryState } from '../../types/categoryTypes';

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
    builder.addCase(createCategory.pending, (state, _action) => {
      state.loading = true;
    });
    builder.addCase(createCategory.fulfilled, (state, action) => {
      state.loading = false;

      if (action.payload) {
        state.categories = [...state.categories, action.payload];
      }
    });
    builder.addCase(createCategory.rejected, (state, _action) => {
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

export const createCategory = createAsyncThunk('category/createCategory', async (params: CategoryParams) => {
  try {
    const response = await createCategoryService(params);
    const data: Category = response.data;

    return data;
  } catch (err) {
    console.log(err);
  }
});

type UpdateCategoryType = {
  params: CategoryParams;
  id: string;
};

export const updateCategory = createAsyncThunk(
  'category/updateCategory',
  async ({ params, id }: UpdateCategoryType) => {
    try {
      const response = await updateCategoryService(params, id);
      const data: Category = response.data;

      return data;
    } catch (err) {
      console.log(err);
    }
  }
);

export default categorySlice.reducer;
