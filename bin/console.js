require('babel-polyfill');
require('legit-inflectors');
var fs = require('fs')
var repl = require('./babel-node')

// Preload the client
var Trimark = require('../lib/Trimark');

// Run the console
var replServer = repl.start()
replServer.context.Trimark = Trimark.default;
replServer.on('exit', function() {
  process.exit()
})
