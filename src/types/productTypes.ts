export type ProductParams = {
  _id: string;
  name: string;
  manufacturer: string;
  category: string;
  price: number;
};

export type Product = {
  _id: string;
  name: string;
  manufacturer: string;
  category: string;
  createdAt: string;
  price: number;
};

export type ProductState = {
  products: Product[];
  loading: boolean;
  error: string | null;
};

export type CreateProductType = {
  name: string;
};
