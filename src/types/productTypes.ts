type Manufacturer = {
  id: number;
  name: string;
};

type FoodMart = {
  id: number;
  name: string;
  location: string;
  note: string;
};

type Category = {
  id: number;
  name: string;
};

type Price = {
  amount: string;
};

export type Review = {
  content: string | undefined;
  rating: number;
  title: string | undefined;
};

type PriceType = {
  amount: number;
};

export type CreateProductType = {
  name: string;
  manufacturer_id: number | undefined;
  category_ids?: number[] | undefined;
  food_mart_id: number | undefined;
  prices_attributes: PriceType[];
};

export type ProductParams = {
  id: string;
  name: string;
  manufacturer: string;
  category: string;
  price: number;
};

export type Product = {
  id: number;
  name: string;
  manufacturer: Manufacturer;
  food_mart: FoodMart;
  categories: Category[];
  prices: Price[];
  reviews: Review[];
};

export type ProductIntialType = {
  name: string;
  categories: Category | null;
  manufacturer: Manufacturer | null;
  foodMart: FoodMart | null;
  price: number;
};

export type ProductState = {
  totalCount: number;
  products: Product[];
  loading: boolean;
  error: string | null;
};

export const PRODUCY_INTIAL_VALUES: ProductIntialType = {
  name: '',
  categories: null,
  manufacturer: null,
  foodMart: null,
  price: 0,
};

export type FetchProductsParams = {
  page?: number;
  perPage?: number;
  search?: string;
};
