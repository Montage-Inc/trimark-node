declare type TrimarkDataPointInput = {
  IntervalBeginTime: string,
  IntervalEndTime: string,
  AvgValue: number,
  MinValue: number,
  MaxValue: number,
  DataQuality: string,
  IntervalSeconds: number,
  PointId: number,
  Name: string,
  DisplayName: ?string,
  UnitOfMeasure: ?string,
  SumValue: ?number,
  RollupValue: ?number,
  RollupUnitOfMeasure: ?string,
  SampleTime: ?SampleTime
};

declare type DataPoint = {
  intervalBegin: Object,
  intervalEnd: Object,
  averageValue: number,
  minValue: number,
  maxValue: number,
  dataQuality: string,
  interval: number,
  pointId: number,
  name: string,
  displayName: ?string,
  uom: ?string,
  sumValue: ?number,
  rollupValue: ?number,
  rollupUom: ?string,
  sampleTime: ?SampleTime
};
