/* @flow */

import DataPoint from './DataPoint';

const Point = (
  getData: Function,
  siteId: number,
  point: TrimarkPointInput
): Point => (
  {
    siteId,
    id: point.PointId,
    name: point.Name,
    uom: point.UnitOfMeasure,
    displayName: point.DisplayName,
    history: function(query: Query): Promise<Array<DataPoint>> {
      return getData(
        `sites/${this.siteId}/points/interval/history/${this.id}`,
        {},
        query
      )
      .then(dataPoints => dataPoints.map(dataPoint => DataPoint(dataPoint)));
    }
  }
);

export default Point;
