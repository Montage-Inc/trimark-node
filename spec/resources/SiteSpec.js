import { expect } from 'chai';

import Site from '../../lib/resources/Site';

const rawSite = {
  SiteId: 60,
  Name: 'West Hills Farms',
  Type: 'Well',
};

const getData = function() {}

describe('Site', () => {
  describe('constructor', () => {
    const site = Site(getData, rawSite);

    it('sets the id', () => {
      expect(site.id).to.eql(rawSite.SiteId);
    });

    it('sets the name', () => {
      expect(site.name).to.eql(rawSite.Name);
    });

    it('sets the type', () => {
      expect(site.type).to.eql(rawSite.Type);
    });
  });
});
