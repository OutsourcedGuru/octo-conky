#!/usr/bin/env node

var args =      process.argv.slice(2);
var OctoPrint = require('octo-client');

if (args[0] == 'version') {
  OctoPrint.version(function(response) {
    console.log('OctoPrint: ' + response.server);
  });
}

if (args[0] == 'temp') {
  OctoPrint.printerState(function(response) {
    var intPercentage = Math.round(((response.temperature.tool0.actual - 25.0) / 183.37) * 10);
    console.log('\u2593'.repeat(intPercentage) + '\u2591'.repeat(10-intPercentage) + ' ' + response.temperature.tool0.actual + '\u00b0C');
  });
}
