import { Dispatch } from 'redux';
import { GraphQLClient, gql } from 'graphql-request';
import { Actions } from '../redux/actions';
import { Coordinates, RequestData } from './types';

interface RequestParams {
  query?: string;
  category?: string;
  location?: string | Coordinates;
}

const ENDPOINT = 'https://api.yelp.com/v3/graphql';
const token =
  'Rhjx1CgdtvZs8XY8GT6ZJiZk0XxqG3pmQ_-q1PbK8oOh_XKZTO6mElZIShuU1XghFts25WDD4JXQVomBGNEQnMQLFZgDxrvB3wZ0gsQlzWEsRrX633D9X03YS45DYHYx';

const client = new GraphQLClient(ENDPOINT, {
  headers: {
    authorization: 'Bearer ' + token,
    'Accept-Language': 'en_US'
  },
});

export async function makeRequest(
  dispatch: Dispatch,
  params: RequestParams
): Promise<void> {
  const loadingAction: Actions = {
    type: 'SET_LOADING',
    payload: true,
  };

  dispatch(loadingAction);

  try {
    const data: RequestData = await client.request(createRequestQuery(params));
    const dataAction: Actions = {
      type: 'SET_RESULTS',
      payload: data,
    };

    dispatch(dataAction);
  } catch (e) {
    const errorAction: Actions = {
      type: 'SET_ERROR',
      payload: e.response?.errors?.[0]?.message || e?.message || 'Error',
    };

    dispatch(errorAction);
  }
}

function createRequestQuery(params: RequestParams): string {
  // location: "san francisco"
  // latitude: 37.761591
  // longitude: -122.4080729

  const locationStr = createLocationQuery(params.location);
  const categoryStr = params.category ? `categories: "${params.category}"` : '';
  const termStr = params.query ? `term: "${params.query}"` : ''
  return gql`
    {
      search(${termStr}
        ${locationStr}
        ${categoryStr}
        limit: 10) {
        total
        business {
          name
          location {
            address1
            city
            state
            country
          }
          coordinates {
            latitude
            longitude
          }
        }
      }
    }
  `;
}

function createLocationQuery(location?: string | Coordinates): string {
  if (!location) {
    return '';
  }
  if (typeof location === 'string') {
    const locStr = location as string;
    return `location: "${locStr}"`;
  } else {
    const locObj = location as Coordinates;

    return `longitude: ${locObj.longitude}
    latitude: ${locObj.latitude}`;
  }
}
