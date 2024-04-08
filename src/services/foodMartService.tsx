import { AxiosPromise } from 'axios';

import { FoodMartParams } from '../types/foodMartTypes';

import baseService from './baseService';
import { foodMartURLS } from './urls';

export const getAllFoodMartService = (): AxiosPromise => baseService.get(foodMartURLS.getAllStores);

export const createFoodMartService = (params: FoodMartParams): AxiosPromise =>
  baseService.post(foodMartURLS.createStore, params);

export const updateFoodMartService = (params: FoodMartParams, id: number): AxiosPromise =>
  baseService.put(foodMartURLS.updateStore(id), params);

export const deleteFoodMartService = (id: number): AxiosPromise => baseService.delete(foodMartURLS.updateStore(id));
