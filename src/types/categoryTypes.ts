export interface CategoryResponse {
  categories: Category[];
}

export interface Category {
  _id: string;
  name: string;
  products: string[];
  createdAt: Date;
}

export interface CategoryState {
  categories: Category[];
  loading: boolean;
  error: string | null;
}
