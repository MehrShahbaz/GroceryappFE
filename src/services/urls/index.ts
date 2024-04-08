import { FetchProductsParams } from '../../types/productTypes';

export const categoryURLS = {
  getAllCategories: (params?: string) => `/categories${params ? `?search=${params}` : ''}`,
  createCategory: '/categories',
  updateCategory: (id: number) => `/categories/${id}`,
};

export const manufacturerURLS = {
  getAllManufacturers: '/manufacturers',
  createManufacturer: '/manufacturer',
  updateManufacturer: (id: number) => `/manufacturer/${id}`,
};

export const foodMartURLS = {
  getAllStores: '/food_marts',
  createStore: '/food_marts',
  updateStore: (id: number) => `/food_marts/${id}`,
};

export const productURLS = {
  getAllProducts: ({ page, perPage, search }: FetchProductsParams) =>
    `/products?page=${page}&per_page=${perPage}&search=${encodeURIComponent(search ?? '')}`,
  createProduct: '/products',
  updateProduct: (id: number) => `/products/${id}`,
};
