import { expect } from 'chai';
import nock from 'nock';

import AlsoEnergy from '../../lib/AlsoEnergy';
import Site from '../../lib/resources/Site';

describe('Site', () => {
  describe('#getHardware', () => {
    let client;

    before(() => {
      nock.load('./spec/api.json');
      return AlsoEnergy({ username: 'foo', password: 'bar' }).then(c => client = c);
    });

    it('gets the hardware list', () => {
      const expected = {
        "deviceAddress": "41",
        "deviceCode": "WS",
        "deviceId": 506,
        "deviceNum": 0,
        "fields": [
          {
            "Name": "WindDirection",
            "Units": "Degrees",
          },
          {
            "Name": "TempF",
            "Units": "Degrees Fahrenheit",
          },
          {
            "Name": "Temp1",
            "Units": "Degrees Fahrenheit"
          },
          {
            "Name": "WindSpeed",
            "Units": "Miles/hour"
          },
          {
            "Name": "CabF",
            "Units": "Degrees Celsius"
          }
        ],
        "flags": 0,
        "gatewayId": "00-1E-C6-05-1A-73",
        "id": 56031,
        "name": "Weather Station (Basic)",
        "port": "0",
        "serialNum": null,
        "siteId": 35701,
        "sort": 41,
      };

      return client.getSites().then(sites => sites[0].getHardware()).then(hardware => {
        delete hardware[0].getAllBinData;
        delete hardware[0].getSummaryData;
        expect(hardware[0]).to.eql(expected);
      });
    });
  });
});
