/* @flow */

import { flatten } from 'ramda';
import moment from 'moment';

export type HardwareInput = {
  Baud: ?any,
  DeviceAddress: string,
  DeviceCode: string,
  DeviceID: string,
  DeviceNum: string,
  Flags: string,
  GatewayID: string,
  HardwareID: string,
  Name: string,
  Port: string,
  SerialNum: string,
  SiteID: string,
  Sort: string,
  FieldList: ?Object
};

const Hardware = (hardware: HardwareInput, client: Object, sessionID: string): Hardware => (
  {
    deviceAddress: hardware.DeviceAddress,
    deviceCode: hardware.DeviceCode,
    deviceId: hardware.DeviceID,
    deviceNum: hardware.DeviceNum,
    flags: hardware.Flags,
    gatewayId: hardware.GatewayID,
    id: hardware.HardwareID,
    name: hardware.Name,
    port: hardware.Port,
    serialNum: hardware.SerialNum,
    siteId: hardware.SiteID,
    sort: hardware.Sort,
    fields: hardware.FieldList ? hardware.FieldList.FieldInfo : [],
    getAllBinData: function(fromLocal: string, toLocal: string): Promise<any> {
      return client.GetBinData({
        sessionID,
        fromLocal,
        toLocal,
        binSize: 'BinRaw',
        Fields: { DataField: this.fields.map(field => ({ FieldName: field.Name, Function: 'Avg', HID: this.id })) }
      })
      .then(data => {
        const fieldList = this.fields.map(field => field.Name);

        const dataPoints = data.GetBinDataResult.DataSet.DataBin.map(point => {
          return point.Data.float.map((value, index) => ({
            value,
            name: fieldList[index],
            timestamp: moment(point.Timestamp)
          }));
        });

        return flatten(dataPoints);
      });
    }
  }
);

export default Hardware;
