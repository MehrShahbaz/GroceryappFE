import { AxiosPromise } from 'axios';

import { FoodMartParams } from '../types/foodMartTypes';
import { FetchProductsParams, ProductParams } from '../types/productTypes';

import baseService from './baseService';
import { productURLS } from './urls';

export const getAllProductssService = (params: FetchProductsParams): AxiosPromise =>
  baseService.get(productURLS.getAllProducts(params));

export const createProductService = (params: FoodMartParams): AxiosPromise =>
  baseService.post(productURLS.createProduct, { product: params });

export const updateProductService = (params: ProductParams, id: number | string): AxiosPromise =>
  baseService.put(productURLS.updateProduct(id), params);

export const deleteProductService = (id: number): AxiosPromise => baseService.delete(productURLS.updateProduct(id));

export const getProductService = (id: string): AxiosPromise => baseService.get(productURLS.updateProduct(id));
