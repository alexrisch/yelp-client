import {createStore } from 'redux';
import { Coordinates, RequestData } from '../data/types';
import { Category } from '../lib/categories';
import { Actions } from './actions';

export interface RequestStore {
  query?: string;
  loading: boolean;
  results?: RequestData;
  location?: string | Coordinates;
  category?: Category;
  error?: string;
}

const INITIAL_STORE: RequestStore = {
  loading: false
}


function requestStore(state: RequestStore = INITIAL_STORE, action: Actions): RequestStore {
  switch (action.type) {
    case 'SET_CATEGORY':
      return {
        ...state,
        category: action.payload
      }
    case 'SET_QUERY':
      return {
        ...state,
        query: action.payload
      }
    case 'SET_LOADING':
      return {
        ...state,
        loading: action.payload,
        error: undefined
      }
    case 'SET_ERROR': 
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    case 'SET_RESULTS':
      return {
        ...state,
        error: undefined,
        loading: false,
        results: action.payload
      }
    case 'SET_LOCATION':
      return {
        ...state,
        location: action.payload
      }
    default:
      return state;
  }
}

export const store = createStore(requestStore);
export const dispatch = store.dispatch;
