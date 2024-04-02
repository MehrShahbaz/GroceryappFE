export const categoryURLS = {
  getAllCategories: '/categories',
  createCategory: '/categories',
  updateCategory: (id: string) => `/categories/${id}`,
};

export const manufacturerURLS = {
  getAllManufacturers: '/manufacturers',
  createManufacturer: '/manufacturer',
  updateManufacturer: (id: string) => `/manufacturer/${id}`,
};

export const foodMartURLS = {
  getAllStores: '/food_marts',
  createStore: '/food_marts',
  updateStore: (id: string) => `/food_marts/${id}`,
};

export const productURLS = {
  getAllProducts: '/products',
  createProduct: '/product',
  updateProduct: (id: string) => `/product/${id}`,
};
