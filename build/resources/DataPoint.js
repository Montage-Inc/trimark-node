'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DataPoint = function DataPoint(dataPoint) {
  return {
    intervalBegin: (0, _moment2.default)(dataPoint.IntervalBeginTime),
    intervalEnd: (0, _moment2.default)(dataPoint.IntervalEndTime),
    averageValue: dataPoint.AvgValue,
    minValue: dataPoint.MinValue,
    maxValue: dataPoint.MaxValue,
    dataQuality: dataPoint.DataQuality,
    interval: dataPoint.IntervalSeconds,
    pointId: dataPoint.PointId,
    name: dataPoint.Name,
    displayName: dataPoint.DisplayName,
    uom: dataPoint.UnitOfMeasure,
    sumValue: dataPoint.SumValue,
    rollupValue: dataPoint.RollupValue,
    rollupUom: dataPoint.RollupUnitOfMeasure,
    sampleTime: dataPoint.SampleTime
  };
};

exports.default = DataPoint;