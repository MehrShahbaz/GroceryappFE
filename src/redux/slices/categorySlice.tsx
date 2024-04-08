import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import {
  createCategoryService,
  deleteCategoryService,
  getAllCategoriesService,
  updateCategoryService,
} from '../../services/categoryService';
import { CategoryParams, CategoryState, CategoryType } from '../../types/categoryTypes';

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
    builder.addCase(deleteCategory.pending, (state, _action) => {
      state.loading = true;
    });
    builder.addCase(deleteCategory.fulfilled, (state, action) => {
      state.loading = false;

      const index = state.categories.findIndex((category) => category.id === action.payload);

      if (index !== -1) {
        state.categories.splice(index, 1);
      }
    });
    builder.addCase(deleteCategory.rejected, (state, _action) => {
      state.loading = false;
    });
  },
});

export const fetchCategories = createAsyncThunk('category/fetchCategories', async (params?: string) => {
  try {
    const response = await getAllCategoriesService(params);

    return response.data;
  } catch (err) {
    console.log(err);
  }
});

export const createCategory = createAsyncThunk('category/createCategory', async (params: CategoryParams) => {
  try {
    const response = await createCategoryService(params);
    const data: CategoryType = response.data;

    return data;
  } catch (err) {
    console.log(err);
  }
});

type UpdateCategoryType = {
  params: CategoryParams;
  id: number;
};

export const updateCategory = createAsyncThunk(
  'category/updateCategory',
  async ({ params, id }: UpdateCategoryType) => {
    try {
      const response = await updateCategoryService(params, id);
      const data: CategoryType = response.data;

      return data;
    } catch (err) {
      console.log(err);
    }
  }
);

export const deleteCategory = createAsyncThunk('category/delete', async (id: number) => {
  try {
    await deleteCategoryService(id);

    return id;
  } catch (err) {
    console.log(err);
  }
});

export default categorySlice.reducer;
