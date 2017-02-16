/* @flow */

import moment from 'moment';

export type DataPointInput = {
  name: string,
  value: number,
  timestamp: string
}

const DataPoint = (dataPoint: DataPointInput): DataPoint => (
  dataPoint
);

export default DataPoint;
