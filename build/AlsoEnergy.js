'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Utils = require('../lib/Utils');

var _Site = require('./resources/Site');

var _Site2 = _interopRequireDefault(_Site);

var _soapPromise = require('../lib/soapPromise');

var _soapPromise2 = _interopRequireDefault(_soapPromise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

// Local


// Types
var AlsoEnergy = function () {
  var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(_ref2) {
    var username = _ref2.username,
        password = _ref2.password;
    var client, result, sessionID, customerID, userID;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _soapPromise2.default.createClient(_Utils.WSDL_PATH);

          case 2:
            client = _context2.sent;

            client.setEndpoint(_Utils.BASE_PATH);
            _context2.next = 6;
            return client.Login({ username: username, password: password });

          case 6:
            result = _context2.sent;
            sessionID = void 0, customerID = void 0, userID = void 0;

            if (!(result.LoginResult.Code === 200)) {
              _context2.next = 14;
              break;
            }

            sessionID = result.LoginResult.SessionID;
            customerID = result.LoginResult.CustomerID;
            userID = result.LoginResult.UserID;
            _context2.next = 15;
            break;

          case 14:
            throw new Error('Username/Password incorrect, login failed!');

          case 15:
            return _context2.abrupt('return', {
              client: client,
              sessionID: sessionID,
              customerID: customerID,
              userID: userID,
              getSites: function () {
                var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
                  var response;
                  return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          _context.next = 2;
                          return client.GetSiteList({ sessionID: sessionID });

                        case 2:
                          response = _context.sent;

                          if (!(response.GetSiteListResult.Code === 200)) {
                            _context.next = 11;
                            break;
                          }

                          if (!Array.isArray(response.GetSiteListResult.Items)) {
                            _context.next = 8;
                            break;
                          }

                          return _context.abrupt('return', response.GetSiteListResult.Items.map(function (item) {
                            return (0, _Site2.default)(item.ListItem, client, sessionID);
                          }));

                        case 8:
                          return _context.abrupt('return', [(0, _Site2.default)(response.GetSiteListResult.Items.ListItem, client, sessionID)]);

                        case 9:
                          _context.next = 12;
                          break;

                        case 11:
                          throw new Error('Error retrieving site hardware');

                        case 12:
                        case 'end':
                          return _context.stop();
                      }
                    }
                  }, _callee, undefined);
                }));

                return function getSites() {
                  return _ref3.apply(this, arguments);
                };
              }()
            });

          case 16:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, undefined);
  }));

  return function AlsoEnergy(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.default = AlsoEnergy;