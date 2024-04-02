import { AxiosPromise } from 'axios';

import { StoreParams } from '../types/storeTypes';

import baseService from './baseService';
import { foodMartURLS } from './urls';

export const getAllStoresService = (): AxiosPromise => baseService.get(foodMartURLS.getAllStores);

export const createStoreService = (params: StoreParams): AxiosPromise => baseService.post(foodMartURLS.createStore, params);

export const updateStoreService = (params: StoreParams, id: string): AxiosPromise =>
  baseService.put(foodMartURLS.updateStore(id), params);

export const deleteStoreService = (id: string): AxiosPromise => baseService.delete(foodMartURLS.updateStore(id));
