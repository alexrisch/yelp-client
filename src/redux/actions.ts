import { Coordinates, RequestData } from '../data/types';
import { Category } from '../lib/categories';

export const SET_CATEGORY = 'SET_CATEGORY';
export const SET_QUERY = 'SET_QUERY';
export const SET_LOCATION = 'SET_LOCATION';
export const SET_LOADING = 'SET_LOADING';
export const SET_RESULTS = 'SET_RESULTS';
export const SET_ERROR = 'SET_ERROR';

export interface SetCategory {
  type: typeof SET_CATEGORY;
  payload: Category | undefined;
}

export interface SetQuery {
  type: typeof SET_QUERY;
  payload?: string;
}

export interface SetLoading {
  type: typeof SET_LOADING;
  payload: boolean;
}

export interface SetError {
  type: typeof SET_ERROR;
  payload: string;
}

export interface SetResults {
  type: typeof SET_RESULTS;
  payload: RequestData;
}

export interface SetLocation {
  type: typeof SET_LOCATION;
  payload: string | Coordinates;
}

export type Actions = SetCategory | SetQuery | SetLoading | SetError | SetResults | SetLocation;
