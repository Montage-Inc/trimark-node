/* @flow */

// Local
import { WSDL_PATH, BASE_PATH } from '../lib/Utils';
import Site from './resources/Site';
import soap from '../lib/soapPromise';

// Types
export type AlsoEnergyInput = {
  username: string,
  password: string
};

const AlsoEnergy = async ({ username, password }: AlsoEnergyInput): AlsoEnergy => {
  const client = await soap.createClient(WSDL_PATH);
  client.setEndpoint(BASE_PATH);
  const result = await client.Login({ username, password });
  let sessionID, customerID, userID;

  if (result.LoginResult.Code === 200) {
    sessionID = result.LoginResult.SessionID;
    customerID = result.LoginResult.CustomerID;
    userID = result.LoginResult.UserID;
  } else {
    throw new Error('Username/Password incorrect, login failed!');
  }

  return {
    client,
    sessionID,
    customerID,
    userID,
    getSites: async (): Promise<any> => {
      const response = await client.GetSiteList({ sessionID });

      if (response.GetSiteListResult.Code === 200) {
        if (Array.isArray(response.GetSiteListResult.Items)) {
          return response.GetSiteListResult.Items.map(item => {
            return Site(item.ListItem, client, sessionID);
          });
        } else {
          return [Site(response.GetSiteListResult.Items.ListItem, client, sessionID)];
        }
      } else {
        throw new Error('Error retrieving site hardware');
      }
    }
  };
}

export default AlsoEnergy;
