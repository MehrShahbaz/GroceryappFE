export type StoreParams = {
  name: string;
};

export type Store = {
  _id: string;
  name: string;
  location: string;
  products: string[];
  createdAt: Date;
};

export type StoreState = {
  stores: Store[];
  loading: boolean;
  error: string | null;
};

export type CreateStoreType = {
  name: string;
  location: string;
};
