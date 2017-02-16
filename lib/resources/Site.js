/* @flow */

import Hardware from './Hardware';

export type AlsoEnergySiteInput = {
  ID: string,
  Name: string,
  Type: string
};

const Site = (site: AlsoEnergySiteInput, client: Object, sessionID: string): Site => (
  {
    id: site.ID,
    name: site.Name,
    type: site.Type,
    getHardware: async (): Promise<any> => (
      client.GetSiteHardwareList({ sessionID, siteID: site.ID })
      .then(response => (
        response
        .GetSiteHardwareListResult
        .HardwareList
        .HardwareComplete.map(h => Hardware(h, client, sessionID))
      ))
    )
  }
);

export default Site;
