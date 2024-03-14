import { AxiosPromise } from 'axios';

import { StoreParams } from '../types/storeTypes';

import baseService from './baseService';
import { storeURLS } from './urls';

export const getAllStoresService = (): AxiosPromise => baseService.get(storeURLS.getAllStores);

export const createStoreService = (params: StoreParams): AxiosPromise =>
  baseService.post(storeURLS.createStore, params);

export const updateStoreService = (params: StoreParams, id: string): AxiosPromise =>
  baseService.put(storeURLS.updateStore(id), params);
