import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import {
  createFoodMartService,
  deleteFoodMartService,
  getAllFoodMartService,
  updateFoodMartService,
} from '../../services/foodMartService';
import { FoodMart, FoodMartParams, FoodMartState } from '../../types/foodMartTypes';

const initialState: FoodMartState = {
  foodMarts: [],
  loading: false,
  error: null,
};
const FoodMartSlice = createSlice({
  name: 'Store',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchFoodMart.pending, (state, _action) => {
      state.loading = true;
    });
    builder.addCase(fetchFoodMart.fulfilled, (state, action) => {
      state.loading = false;

      if (action.payload) {
        state.foodMarts = action.payload;
      }
    });
    builder.addCase(fetchFoodMart.rejected, (state, _action) => {
      state.loading = false;
    });
    builder.addCase(createFoodMart.pending, (state, _action) => {
      state.loading = true;
    });
    builder.addCase(createFoodMart.fulfilled, (state, action) => {
      state.loading = false;

      if (action.payload) {
        state.foodMarts = [...state.foodMarts, action.payload];
      }
    });
    builder.addCase(createFoodMart.rejected, (state, _action) => {
      state.loading = false;
    });
    builder.addCase(updateFoodMart.pending, (state, _action) => {
      state.loading = true;
    });
    builder.addCase(updateFoodMart.fulfilled, (state, _action) => {
      state.loading = false;

      // const index = state.foodMarts.findIndex((foodMart) => foodMart.id === action.payload.id);

      // if (index !== -1) {
      //   state.foodMarts.splice(index, 1);
      // }
    });
    builder.addCase(updateFoodMart.rejected, (state, _action) => {
      state.loading = false;
    });
  },
});

export const fetchFoodMart = createAsyncThunk('Store/fetchStoress', async () => {
  try {
    const response = await getAllFoodMartService();

    return response.data;
  } catch (err) {
    console.log(err);
  }
});

export const createFoodMart = createAsyncThunk('Store/createStore', async (params: FoodMartParams) => {
  try {
    const response = await createFoodMartService(params);
    const data: FoodMart = response.data;

    return data;
  } catch (err) {
    console.log(err);
  }
});

type UpdateStoreType = {
  params: FoodMartParams;
  id: number;
};

export const updateFoodMart = createAsyncThunk('Store/updateStore', async ({ params, id }: UpdateStoreType) => {
  try {
    const response = await updateFoodMartService(params, id);
    const data: FoodMart = response.data;

    return data;
  } catch (err) {
    console.log(err);
  }
});

export const deleteFoodMart = createAsyncThunk('Store/deleteStore', async (id: number) => {
  try {
    await deleteFoodMartService(id);

    return id;
  } catch (err) {
    console.log(err);
  }
});

export default FoodMartSlice.reducer;
