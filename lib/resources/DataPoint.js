/* @flow */

import moment from 'moment';

const DataPoint = (dataPoint: TrimarkDataPointInput): DataPoint => (
  {
    intervalBegin: moment(dataPoint.IntervalBeginTime),
    intervalEnd: moment(dataPoint.IntervalEndTime),
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
  }
);

export default DataPoint;
