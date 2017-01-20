/* @flow */

import promise from 'es6-promise';
promise.polyfill();
import 'fetch-everywhere';

// Local
import Site from './resources/Site';
import { get } from './Utils';

const Trimark = (apiToken: string): Trimark => {
  if (!apiToken) { throw new Error("An API token is required") }
  const getData = get(apiToken);

  return {
    sites: null,
    getSites: function() {
      return getData('sites')
      .then(sites => {
        this.sites = sites.map(site => Site(getData, site));
        return this.sites;
      });
    }
  }
}

export default Trimark;
