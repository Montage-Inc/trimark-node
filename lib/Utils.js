/* @flow */

import { keys, curry } from 'ramda';

// Constants
const BASE_PATH = 'https://vantage.trimarkassoc.com/vapi/';
const HEADERS = {
  'User-Agent': 'Trimark Node v1.0',
  'Content-Type': 'application/json',
  'Accept': '*/*',
  api_token: ''
};

export const get = curry((
  token: string,
  path: string,
  options: Object = {},
  query: Object = {}
): Promise<any> =>
  fetch(`${BASE_PATH}/${path}?${toQuery(query)}`, {
    method: 'GET',
    headers: Object.assign(HEADERS, { api_token: token }, options)
  })
  .then(response => response.json())
);

export const toQuery = (params: Object): string =>
  keys(params).map(key => `${key}=${params[key]}`).join('&');
