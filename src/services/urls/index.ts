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
