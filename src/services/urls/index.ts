import { FetchProductsParams } from '../../types/productTypes';

export const categoryURLS = {
  getAllCategories: (params?: string) => `/categories${params ? `?search=${params}` : ''}`,
  createCategory: '/categories',
  updateCategory: (id: number) => `/categories/${id}`,
};

export const manufacturerURLS = {
  getAllManufacturers: '/manufacturers',
  updateManufacturer: (id: number) => `/manufacturer/${id}`,
};

export const foodMartURLS = {
  getAllStores: '/food_marts',
  createStore: '/food_marts',
  updateStore: (id: number) => `/food_marts/${id}`,
};

export const productURLS = {
  getAllProducts: ({ page, perPage, search, categories, foodMarts }: FetchProductsParams) =>
    `/products?page=${page ?? 1}&per_page=${perPage ?? 5}&search=${encodeURIComponent(search ?? '')}&category_ids=${
      categories ?? []
    }&food_marts_ids=${foodMarts ?? ''}`,
  createProduct: '/products',
  updateProduct: (id: number) => `/products/${id}`,
};
