export const categoryURLS = {
  getAllCategories: '/categories',
  createCategory: '/category',
  updateCategory: (id: string) => `/category/${id}`,
};

export const manufacturerURLS = {
  getAllManufacturers: '/manufacturers',
  createManufacturer: '/manufacturer',
  updateManufacturer: (id: string) => `/manufacturer/${id}`,
};

export const storeURLS = {
  getAllStores: '/stores',
  createStore: '/store',
  updateStore: (id: string) => `/store/${id}`,
};

export const productURLS = {
  getAllProducts: '/products',
  createProduct: '/product',
  updateProduct: (id: string) => `/product/${id}`,
};
