type Manufacturer = {
  id: number;
  name: string;
};

export type FoodMartType = {
  id: number;
  name: string;
  location: string;
  note: string;
};

export type CategoryType = {
  id: number;
  name: string;
};

export type ReviewType = {
  id?: number;
  content: string | undefined;
  rating: number;
  title: string | undefined;
};

export type PriceType = {
  amount: number;
  created_at?: number;
};

export type ProductParams = {
  name?: string;
  prices_attributes?: PriceType[];
  reviews_attributes?: ReviewType[];
  category_ids?: number[];
  manufacturer_id?: number;
};

export type ProductState = {
  currentProduct: Product | undefined;
  totalCount: number;
  products: Product[];
  loading: boolean;
  error: string | null;
};

export type Product = {
  id: number;
  name: string;
  manufacturer: Manufacturer;
  food_mart: FoodMartType;
  categories: CategoryType[];
  prices: PriceType[];
  reviews: ReviewType[];
};

export type ProductIntialType = {
  id?: number;
  name: string;
  manufacturer?: Manufacturer;
  food_mart?: FoodMartType;
  categories?: CategoryType[];
  prices: PriceType[];
};

export const PRODUCY_INTIAL_VALUES: ProductIntialType = {
  id: undefined,
  name: '',
  categories: undefined,
  manufacturer: undefined,
  food_mart: undefined,
  prices: [{ amount: 0 }],
};

export type FetchProductsParams = {
  page?: number;
  perPage?: number;
  search?: string;
  categories?: number[];
  foodMarts?: number[];
};

export type CreateProductParams = {
  food_mart_id?: number;
  manufacturer_id?: number;
  name: string;
  prices_attributes?: [{ amount?: number | string }];
  category_ids?: number[];
};

export type HandleOnFilterProps = {
  productsPerPage?: number;
  searchProductTerm?: string;
};
