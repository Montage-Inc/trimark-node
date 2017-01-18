'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Point = require('./Point');

var _Point2 = _interopRequireDefault(_Point);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Site = function Site(getData, site) {
  return {
    id: site.SiteId,
    name: site.Name,
    type: site.Type,
    points: null,
    getPoints: function getPoints() {
      var _this = this;

      getData('sites/' + this.id + '/points').then(function (points) {
        _this.points = points.map(function (point) {
          return (0, _Point2.default)(getData, _this.id, point);
        });
      });
    }
  };
};

exports.default = Site;