'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _strongSoap = require('strong-soap');

function cb2promise(fn, bind, position) {
  if (fn._promisified === true) {
    return fn;
  }
  var promisifiedFn = function promisifiedFn() {
    var args = [].slice.call(arguments, 0);
    return new Promise(function (resolve, reject) {
      function nodeCallback(err, result, raw) {
        if (err) {
          reject(err);
        } else {
          if (!result) {
            result = { return: null };
          }
          result._rawResponse = raw;
          resolve(result);
        }
      }
      if (position !== undefined) {
        args.splice(position, 0, nodeCallback);
      } else {
        args.push(nodeCallback);
      }
      fn.apply(bind, args);
    });
  };
  promisifiedFn._promisified = true;
  return promisifiedFn;
}

function objForEach(obj, fn) {
  for (var prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      fn(prop, obj[prop]);
    }
  }
}

function promisify(client) {
  if (client._promisified === true) {
    return client;
  }

  client._promisified = true;
  var services = client.describe();

  objForEach(services, function (service, ports) {
    objForEach(ports, function (port, methods) {
      objForEach(methods, function (method) {
        var fn = client[service][port][method].bind(client[service][port]);
        var fnPromised = cb2promise(fn, client, 1);
        client[service][port][method] = fnPromised;
        client[method] = fnPromised;
      });
    });
  });
  if (!client._promisifiedSetEndpoint) {
    (function () {
      client._promisifiedSetEndpoint = true;
      var originalSetEndpoint = client.setEndpoint;
      client.setEndpoint = function () {
        var result = originalSetEndpoint.apply(client, arguments);
        client._promisified = false;
        promisify(client);
        return result;
      };
    })();
  }
  return client;
}
var originalCreateClient = _strongSoap.soap.createClient;

exports.default = Object.assign(_strongSoap.soap, {
  createClient: function createClient() {
    var args = [].slice.call(arguments, 0);
    var createClient = cb2promise(originalCreateClient, _strongSoap.soap, 2);
    return createClient.apply(null, args).then(function (client) {
      return promisify(client);
    });
  }
});