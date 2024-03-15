import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import {
  createStoreService,
  deleteStoreService,
  getAllStoresService,
  updateStoreService,
} from '../../services/storeService';
import { Store, StoreParams, StoreState } from '../../types/storeTypes';

const initialState: StoreState = {
  stores: [],
  loading: false,
  error: null,
};
const StoreSlice = createSlice({
  name: 'Store',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchStoress.pending, (state, _action) => {
      state.loading = true;
    });
    builder.addCase(fetchStoress.fulfilled, (state, action) => {
      state.loading = false;

      if (action.payload) {
        state.stores = action.payload;
      }
    });
    builder.addCase(fetchStoress.rejected, (state, _action) => {
      state.loading = false;
    });
    builder.addCase(createStore.pending, (state, _action) => {
      state.loading = true;
    });
    builder.addCase(createStore.fulfilled, (state, action) => {
      state.loading = false;

      if (action.payload) {
        state.stores = [...state.stores, action.payload];
      }
    });
    builder.addCase(createStore.rejected, (state, _action) => {
      state.loading = false;
    });
    builder.addCase(deleteStore.pending, (state, _action) => {
      state.loading = true;
    });
    builder.addCase(deleteStore.fulfilled, (state, action) => {
      state.loading = false;

      const index = state.stores.findIndex((store) => store._id === action.payload);

      if (index !== -1) {
        state.stores.splice(index, 1);
      }
    });
    builder.addCase(deleteStore.rejected, (state, _action) => {
      state.loading = false;
    });
  },
});

export const fetchStoress = createAsyncThunk('Store/fetchStoress', async () => {
  try {
    const response = await getAllStoresService();

    return response.data.stores;
  } catch (err) {
    console.log(err);
  }
});

export const createStore = createAsyncThunk('Store/createStore', async (params: StoreParams) => {
  try {
    const response = await createStoreService(params);
    const data: Store = response.data;

    return data;
  } catch (err) {
    console.log(err);
  }
});

type UpdateStoreType = {
  params: StoreParams;
  id: string;
};

export const updateStore = createAsyncThunk('Store/updateStore', async ({ params, id }: UpdateStoreType) => {
  try {
    const response = await updateStoreService(params, id);
    const data: Store = response.data;

    return data;
  } catch (err) {
    console.log(err);
  }
});

export const deleteStore = createAsyncThunk('Store/deleteStore', async (id: string) => {
  try {
    await deleteStoreService(id);

    return id;
  } catch (err) {
    console.log(err);
  }
});

export default StoreSlice.reducer;
