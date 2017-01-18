'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toQuery = exports.get = undefined;

var _ramda = require('ramda');

// Constants
var BASE_PATH = 'https://vantage.trimarkassoc.com/vapi/';

var HEADERS = {
  'User-Agent': 'Trimark Node v1.0',
  'Content-Type': 'application/json',
  'Accept': '*/*',
  api_token: ''
};

var get = exports.get = (0, _ramda.curry)(function (token, path) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var query = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  return fetch(BASE_PATH + '/' + path + '?' + toQuery(query), {
    method: 'GET',
    headers: Object.assign(HEADERS, { api_token: token }, options)
  }).then(function (response) {
    return response.json();
  });
});

var toQuery = exports.toQuery = function toQuery(params) {
  return (0, _ramda.keys)(params).map(function (key) {
    return key + '=' + params[key];
  }).join('&');
};