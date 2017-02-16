import { expect } from 'chai';
import nock from 'nock';

import AlsoEnergy from '../lib/AlsoEnergy';

describe('AlsoEnergy', () => {
  describe('initialization', () => {
    before(() => nock.load('./spec/api.json'));

    it('logs in to the API and returns an AlsoEnergy object', () => {
      return AlsoEnergy({ username: 'foo', password: 'bar' }).then(client => {;
        const expected = ['client', 'sessionID', 'customerID', 'userID', 'getSites'];
        expect(Object.keys(client)).to.eql(expected);
        expect(client.sessionID).to.eql('99c267a2-e5f5-4646-b3b0-99342b3fe329');
        expect(client.customerID).to.eql(8852);
        expect(client.userID).to.eql(14138);
      });
    });
  });

  describe('#getSites', () => {
    let client;

    before(() => {
      nock.load('./spec/api.json');
      return AlsoEnergy({ username: 'foo', password: 'bar' }).then(c => client = c);
    });

    it('gets all the sites for the current logged in user', () => {
      return client.getSites().then(sites => {
        expect(sites[0].id).to.eql(35701);
        expect(sites[0].name).to.eql('PVP - Pleasant Valley Pistachio');
        expect(sites[0].type).to.eql(2);
      });
    });
  });
});
