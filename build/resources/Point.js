'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _DataPoint = require('./DataPoint');

var _DataPoint2 = _interopRequireDefault(_DataPoint);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Point = function Point(getData, siteId, point) {
  return {
    siteId: siteId,
    id: point.PointId,
    name: point.Name,
    uom: point.UnitOfMeasure,
    displayName: point.DisplayName,
    history: function history(query) {
      return getData('sites/' + this.siteId + '/points/interval/history/' + this.id, {}, query).then(function (dataPoints) {
        return dataPoints.map(function (dataPoint) {
          return (0, _DataPoint2.default)(dataPoint);
        });
      });
    }
  };
};

exports.default = Point;