import { AxiosPromise } from 'axios';

import { FoodMartParams } from '../types/foodMartTypes';

import baseService from './baseService';
import { productURLS } from './urls';

export const getAllProductssService = (): AxiosPromise => baseService.get(productURLS.getAllProducts);

export const createProductService = (params: FoodMartParams): AxiosPromise =>
  baseService.post(productURLS.createProduct, { product: params });

export const updateProductService = (params: FoodMartParams, id: number): AxiosPromise =>
  baseService.put(productURLS.updateProduct(id), params);

export const deleteProductService = (id: number): AxiosPromise => baseService.delete(productURLS.updateProduct(id));
