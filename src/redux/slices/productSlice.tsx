import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import {
  createProductService,
  deleteProductService,
  getAllProductssService,
  updateProductService,
} from '../../services/productService';
import { CreateProductType, Product, ProductParams, ProductState } from '../../types/productTypes';

const initialState: ProductState = {
  products: [],
  loading: false,
  error: null,
};
const ProductSlice = createSlice({
  name: 'Product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state, _action) => {
      state.loading = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.loading = false;

      if (action.payload) {
        state.products = action.payload;
      }
    });
    builder.addCase(fetchProducts.rejected, (state, _action) => {
      state.loading = false;
    });
    builder.addCase(createProduct.pending, (state, _action) => {
      state.loading = true;
    });
    builder.addCase(createProduct.fulfilled, (state, action) => {
      state.loading = false;

      if (action.payload) {
        state.products = [...state.products, action.payload];
      }
    });
    builder.addCase(createProduct.rejected, (state, _action) => {
      state.loading = false;
    });
    builder.addCase(deleteProduct.pending, (state, _action) => {
      state.loading = true;
    });
    builder.addCase(deleteProduct.fulfilled, (state, action) => {
      state.loading = false;

      const index = state.products.findIndex((product) => product._id === action.payload);

      if (index !== -1) {
        state.products.splice(index, 1);
      }
    });
    builder.addCase(deleteProduct.rejected, (state, _action) => {
      state.loading = false;
    });
  },
});

export const fetchProducts = createAsyncThunk('Product/fetchProductss', async () => {
  try {
    const response = await getAllProductssService();

    return response.data.products;
  } catch (err) {
    console.log(err);
  }
});

export const createProduct = createAsyncThunk('Product/createProduct', async (params: CreateProductType) => {
  try {
    const response = await createProductService(params);
    const data: Product = response.data;

    return data;
  } catch (err) {
    console.log(err);
  }
});

type UpdateProductType = {
  params: ProductParams;
  id: string;
};

export const updateProduct = createAsyncThunk('Product/updateProduct', async ({ params, id }: UpdateProductType) => {
  try {
    const response = await updateProductService(params, id);
    const data: Product = response.data;

    return data;
  } catch (err) {
    console.log(err);
  }
});

export const deleteProduct = createAsyncThunk('Product/deleteProduct', async (id: string) => {
  try {
    await deleteProductService(id);

    return id;
  } catch (err) {
    console.log(err);
  }
});

export default ProductSlice.reducer;