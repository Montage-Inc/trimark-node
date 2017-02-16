'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Hardware = require('./Hardware');

var _Hardware2 = _interopRequireDefault(_Hardware);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var Site = function Site(site, client, sessionID) {
  return {
    id: site.ID,
    name: site.Name,
    type: site.Type,
    getHardware: function () {
      var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt('return', client.GetSiteHardwareList({ sessionID: sessionID, siteID: site.ID }).then(function (response) {
                  return response.GetSiteHardwareListResult.HardwareList.HardwareComplete.map(function (h) {
                    return (0, _Hardware2.default)(h, client, sessionID);
                  });
                }));

              case 1:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, undefined);
      }));

      return function getHardware() {
        return _ref.apply(this, arguments);
      };
    }()
  };
};

exports.default = Site;