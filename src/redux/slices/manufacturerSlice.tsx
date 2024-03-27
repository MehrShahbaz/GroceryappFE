import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import {
  createManufacturerService,
  deleteManufacturerService,
  getAllManufacturersService,
  updateManufacturerService,
} from '../../services/manufacturerService';
import { Manufacturer, ManufacturerParams, ManufacturerState } from '../../types/manufacturerTypes';

const initialState: ManufacturerState = {
  manufacturers: [],
  loading: false,
  error: null,
};
const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetcManufacturers.pending, (state, _action) => {
      state.loading = true;
    });
    builder.addCase(fetcManufacturers.fulfilled, (state, action) => {
      state.loading = false;

      if (action.payload) {
        state.manufacturers = action.payload;
      }
    });
    builder.addCase(fetcManufacturers.rejected, (state, _action) => {
      state.loading = false;
    });
    builder.addCase(createManufacturer.pending, (state, _action) => {
      state.loading = true;
    });
    builder.addCase(createManufacturer.fulfilled, (state, action) => {
      state.loading = false;

      if (action.payload) {
        state.manufacturers = [...state.manufacturers, action.payload];
      }
    });
    builder.addCase(createManufacturer.rejected, (state, _action) => {
      state.loading = false;
    });
    builder.addCase(deleteManufacturer.pending, (state, _action) => {
      state.loading = true;
    });
    builder.addCase(deleteManufacturer.fulfilled, (state, action) => {
      state.loading = false;

      const index = state.manufacturers.findIndex((manufacturer) => manufacturer._id === action.payload);

      if (index !== -1) {
        state.manufacturers.splice(index, 1);
      }
    });
    builder.addCase(deleteManufacturer.rejected, (state, _action) => {
      state.loading = false;
    });
  },
});

export const fetcManufacturers = createAsyncThunk('manufacturers/fetchMnufacturers', async () => {
  try {
    const response = await getAllManufacturersService();

    return response.data.manufacturers;
  } catch (err) {
    console.log(err);
  }
});

export const createManufacturer = createAsyncThunk(
  'manufacturers/createManufacturer',
  async (params: ManufacturerParams) => {
    try {
      const response = await createManufacturerService(params);
      const data: Manufacturer = response.data;

      return data;
    } catch (err) {
      console.log(err);
    }
  }
);

type UpdateCategoryType = {
  params: ManufacturerParams;
  id: string;
};

export const updateManufacturer = createAsyncThunk(
  'manufacturers/updateCategory',
  async ({ params, id }: UpdateCategoryType) => {
    try {
      const response = await updateManufacturerService(params, id);
      const data: Manufacturer = response.data;

      return data;
    } catch (err) {
      console.log(err);
    }
  }
);

export const deleteManufacturer = createAsyncThunk('manufacturers/delete', async (id: string) => {
  try {
    await deleteManufacturerService(id);

    return id;
  } catch (err) {
    console.log(err);
  }
});

export default categorySlice.reducer;
