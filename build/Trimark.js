'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _es6Promise = require('es6-promise');

var _es6Promise2 = _interopRequireDefault(_es6Promise);

require('fetch-everywhere');

var _Site = require('./resources/Site');

var _Site2 = _interopRequireDefault(_Site);

var _Utils = require('./Utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_es6Promise2.default.polyfill();

// Local


var Trimark = function Trimark(apiToken) {
  if (!apiToken) {
    throw new Error("An API token is required");
  }
  var getData = (0, _Utils.get)(apiToken);

  return {
    sites: null,
    getSites: function getSites() {
      var _this = this;

      return getData('sites').then(function (sites) {
        _this.sites = sites.map(function (site) {
          return (0, _Site2.default)(getData, site);
        });
      });
    }
  };
};

exports.default = Trimark;