import { AxiosPromise } from 'axios';

import { StoreParams } from '../types/storeTypes';

import baseService from './baseService';
import { productURLS } from './urls';

export const getAllProductssService = (): AxiosPromise => baseService.get(productURLS.getAllProducts);

export const createProductService = (params: StoreParams): AxiosPromise =>
  baseService.post(productURLS.createProduct, params);

export const updateProductService = (params: StoreParams, id: string): AxiosPromise =>
  baseService.put(productURLS.updateProduct(id), params);

export const deleteProductService = (id: string): AxiosPromise => baseService.delete(productURLS.updateProduct(id));
