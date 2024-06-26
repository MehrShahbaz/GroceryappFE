/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { errorNotification, showNotification } from 'helper/helper';

import {
  createProductService,
  deleteProductService,
  getAllProductssService,
  getProductService,
  updateProductService,
} from '../../services/productService';
import {
  CreateProductParams,
  FetchProductsParams,
  Product,
  ProductParams,
  ProductState,
} from '../../types/productTypes';

const initialState: ProductState = {
  currentProduct: undefined,
  products: [],
  loading: false,
  error: null,
  totalCount: 0,
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
        state.products = action.payload.products;
        state.totalCount = action.payload.count;
      }
    });
    builder.addCase(fetchProducts.rejected, (state, _action) => {
      state.loading = false;
    });
    builder.addCase(getProduct.pending, (state, _action) => {
      state.loading = true;
    });
    builder.addCase(getProduct.fulfilled, (state, action) => {
      state.loading = false;

      if (action.payload) {
        state.currentProduct = action.payload;
      }
    });
    builder.addCase(getProduct.rejected, (state, _action) => {
      state.loading = false;
    });
    builder.addCase(updateProduct.pending, (state, _action) => {
      state.loading = true;
    });
    builder.addCase(updateProduct.fulfilled, (state, action) => {
      state.loading = false;

      if (action.payload) {
        state.currentProduct = action.payload;
      }
    });
    builder.addCase(updateProduct.rejected, (state, _action) => {
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

      const index = state.products.findIndex((product) => product.id === action.payload);

      if (index !== -1) {
        state.products.splice(index, 1);
      }
    });
    builder.addCase(deleteProduct.rejected, (state, _action) => {
      state.loading = false;
    });
  },
});

export const fetchProducts = createAsyncThunk('Product/fetchProductss', async (params: FetchProductsParams) => {
  try {
    const response = await getAllProductssService(params);

    return response.data;
  } catch (err: any) {
    errorNotification(err, 5000);
  }
});

export const getProduct = createAsyncThunk('Product/getProduct', async (id: string) => {
  try {
    const response = await getProductService(id);

    return response.data;
  } catch (err: any) {
    errorNotification(err, 5000);
  }
});

export const createProduct = createAsyncThunk('Product/createProduct', async (params: CreateProductParams) => {
  try {
    const response = await createProductService(params).then((res) => {
      showNotification({ title: 'Product Created', message: '', type: 'success' });

      return res;
    });
    const data: Product = response.data;

    return data;
  } catch (err: any) {
    errorNotification(err, 5000);
  }
});

export type UpdateProductType = {
  params: ProductParams;
  id: number | string;
  successMessage?: string;
};

export const updateProduct = createAsyncThunk(
  'Product/updateProduct',
  async ({ params, id, successMessage }: UpdateProductType) => {
    try {
      const response = await updateProductService(params, id).then((res) => {
        showNotification({ title: 'Product Updated', message: successMessage ?? '', type: 'success' });

        return res;
      });
      const data: Product = response.data;

      console.log(data);

      return data;
    } catch (err: any) {
      errorNotification(err, 5000);
    }
  }
);

export const deleteProduct = createAsyncThunk('Product/deleteProduct', async (id: number) => {
  try {
    await deleteProductService(id);

    return id;
  } catch (err: any) {
    errorNotification(err, 5000);
  }
});

export default ProductSlice.reducer;
