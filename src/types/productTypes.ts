import { Category } from './categoryTypes';
import { Manufacturer } from './manufacturerTypes';
import { Store } from './storeTypes';

export type ProductParams = {
  _id: string;
  name: string;
  manufacturer: string;
  category: string;
  price: number;
};

type ReferenceItem = {
  _id: string;
  name: string;
};

export type Product = {
  _id: string;
  name: string;
  manufacturer: ReferenceItem;
  category: ReferenceItem;
  store: ReferenceItem;
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
  manufacturer: string | null;
  category: string | null;
  store: string | null;
  price: number | null;
};

export type ProductIntialType = {
  name: string;
  category: Category | null;
  manufacturer: Manufacturer | null;
  store: Store | null;
  price: number;
};

export type ProductSubmitType = {
  name: string;
  category: Category;
  manufacturer: Manufacturer;
  store: Store;
  price: number;
};

export const PRODUCY_INTIAL_VALUES: ProductIntialType = {
  name: '',
  category: null,
  manufacturer: null,
  store: null,
  price: 0,
};
