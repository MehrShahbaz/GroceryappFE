import { AxiosPromise } from 'axios';

import { ManufacturerParams } from '../types/manufacturerTypes';

import baseService from './baseService';
import { manufacturerURLS } from './urls';

export const getAllManufacturersService = (): AxiosPromise => baseService.get(manufacturerURLS.getAllManufacturers);

export const createManufacturerService = (params: ManufacturerParams): AxiosPromise =>
  baseService.post(manufacturerURLS.getAllManufacturers, { manufacturer: params });

export const updateManufacturerService = (params: ManufacturerParams, id: number): AxiosPromise =>
  baseService.put(manufacturerURLS.updateManufacturer(id), params);

export const deleteManufacturerService = (id: number): AxiosPromise =>
  baseService.delete(manufacturerURLS.updateManufacturer(id));
