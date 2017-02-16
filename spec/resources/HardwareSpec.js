import { expect } from 'chai';
import nock from 'nock';
import moment from 'moment';

import AlsoEnergy from '../../lib/AlsoEnergy';
import Site from '../../lib/resources/Site';
import Hardware from '../../lib/resources/Hardware';

describe('Hardware', () => {
  describe('#getAllBinData', () => {
    let client, site, hardware;

    before(() => {
      nock.load('./spec/api.json');
      return AlsoEnergy({ username: 'foo', password: 'bar' })
      .then(c => {
        client = c;
        return client.getSites();
      })
      .then(sites => {
        site = sites[0];
        return site.getHardware();
      })
      .then(h => hardware = h);
    });

    it('gets the data points', () => {
      const expected = {
        value: 6674.7,
        name: 'KwhAC',
        timestamp: moment('2017-01-08T00:00:00.000    Z')
      };

      return hardware[2].getAllBinData("01/08/2017", "01/09/2017").then(data => {
        expect(data[0]).to.eql(expected);
      });
    });
  });
});
