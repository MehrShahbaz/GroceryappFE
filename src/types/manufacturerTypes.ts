export type ManufacturerParams = {
  name: string;
};

export type Manufacturer = {
  _id: string;
  name: string;
  products: string[];
  createdAt: Date;
};

export type ManufacturerState = {
  manufacturers: Manufacturer[];
  loading: boolean;
  error: string | null;
};

export type CreateManufacturerType = {
  name: string;
};
