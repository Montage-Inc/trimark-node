'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ramda = require('ramda');

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Hardware = function Hardware(hardware, client, sessionID) {
  return {
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
    getAllBinData: function getAllBinData(fromLocal, toLocal) {
      var _this = this;

      return client.GetBinData({
        sessionID: sessionID,
        fromLocal: fromLocal,
        toLocal: toLocal,
        binSize: 'BinRaw',
        Fields: { DataField: this.fields.map(function (field) {
            return { FieldName: field.Name, Function: 'Avg', HID: _this.id };
          }) }
      }).then(function (data) {
        var fieldList = _this.fields.map(function (field) {
          return field.Name;
        });

        var dataPoints = data.GetBinDataResult.DataSet.DataBin.map(function (point) {
          return point.Data.float.map(function (value, index) {
            return {
              value: value,
              name: fieldList[index],
              timestamp: (0, _moment2.default)(point.Timestamp)
            };
          });
        });

        return (0, _ramda.flatten)(dataPoints);
      });
    }
  };
};

exports.default = Hardware;