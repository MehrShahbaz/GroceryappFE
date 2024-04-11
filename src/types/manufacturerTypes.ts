export type ManufacturerParams = {
  name: string;
};

export type Manufacturer = {
  id: number;
  name: string;
};

export type ManufacturerState = {
  manufacturers: Manufacturer[];
  loading: boolean;
  error: string | null;
};

export type CreateManufacturerType = {
  name: string;
};
