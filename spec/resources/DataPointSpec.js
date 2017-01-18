import { expect } from 'chai';
import moment from 'moment';

import DataPoint from '../../lib/resources/DataPoint';

const rawDataPoint = {
  IntervalBeginTime: '2017-01-01',
  IntervalEndTime: '2017-01-02',
  AvgValue: 1.5,
  MinValue: 1,
  MaxValue: 2,
  DataQuality: 'Online',
  IntervalSeconds: 300,
  PointId: 1,
  Name: 'Foo',
  DisplayName: 'FooBar',
  UnitOfMeasure: 'C',
  SumValue: 6,
  RollupValue: 5,
  RollupUnitOfMeasure: 'C',
  SampleTime: 'Month'
};

describe('DataPoint', () => {
  describe('constructor', () => {
    const dataPoint = DataPoint(rawDataPoint);

    it('sets intervalBegin', () => {
      expect(dataPoint.intervalBegin).to.eql(moment(rawDataPoint.IntervalBeginTime));
    });

    it('sets intervalEnd', () => {
      expect(dataPoint.intervalEnd).to.eql(moment(rawDataPoint.IntervalEndTime));
    });

    it('sets averageValue', () => {
      expect(dataPoint.averageValue).to.eql(rawDataPoint.AvgValue);
    });

    it('sets minValue', () => {
      expect(dataPoint.minValue).to.eql(rawDataPoint.MinValue);
    });

    it('sets maxValue', () => {
      expect(dataPoint.maxValue).to.eql(rawDataPoint.MaxValue);
    });

    it('sets dataQuality', () => {
      expect(dataPoint.dataQuality).to.eql(rawDataPoint.DataQuality);
    });

    it('sets interval', () => {
      expect(dataPoint.interval).to.eql(rawDataPoint.IntervalSeconds);
    });

    it('sets pointId', () => {
      expect(dataPoint.pointId).to.eql(rawDataPoint.PointId);
    });

    it('sets name', () => {
      expect(dataPoint.name).to.eql(rawDataPoint.Name);
    });

    it('sets displayName', () => {
      expect(dataPoint.displayName).to.eql(rawDataPoint.DisplayName);
    });

    it('sets uom', () => {
      expect(dataPoint.uom).to.eql(rawDataPoint.UnitOfMeasure);
    });

    it('sets sumValue', () => {
      expect(dataPoint.sumValue).to.eql(rawDataPoint.SumValue);
    });

    it('sets rollupValue', () => {
      expect(dataPoint.rollupValue).to.eql(rawDataPoint.RollupValue);
    });

    it('sets rollupUom', () => {
      expect(dataPoint.rollupUom).to.eql(rawDataPoint.RollupUnitOfMeasure);
    });

    it('sets sampleTime', () => {
      expect(dataPoint.sampleTime).to.eql(rawDataPoint.SampleTime);
    });
  });
});
