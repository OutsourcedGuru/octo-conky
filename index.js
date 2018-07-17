#!/usr/bin/env node

var args =      process.argv.slice(2);
var OctoPrint = require('octo-client');

function pad2(number) { return (number < 10 ? '0' : '') + number; }

if (args[0] == 'version') {
  OctoPrint.version(function(response) {
    if (response.server == undefined) {console.log('N/A'); return;}
    console.log('v' + response.server);
  });
}

if (args[0] == 'temp') {
  OctoPrint.printerState(function(response) {
    if (response.temperature == undefined) {console.log('N/A'); return;}
    var intPercentage = Math.round(((response.temperature.tool0.actual - 25.0) / 183.37) * 10);
    console.log('\u2593'.repeat(intPercentage) + '\u2591'.repeat(10 - intPercentage) + ' ' + response.temperature.tool0.actual + '\u00b0C');
  });
}

if (args[0] == 'percentage') {
  OctoPrint.job(function(response) {
    if (response.progress == undefined || response.progress.completion == null) {console.log('N/A'); return;}
    var intPercentage = Math.round(response.progress.completion);
    console.log('\u2593'.repeat(Math.round(intPercentage/10)) + '\u2591'.repeat(10 - Math.round(intPercentage/10)) + ' ' + intPercentage + '%');
  });
}

if (args[0] == 'file') {
  OctoPrint.job(function(response) {
    if (response.job == undefined || response.job.file.name == null) {console.log('N/A'); return;}
    console.log(response.job.file.name.replace('.gcode', '').substr(0, 24));
  });
}

if (args[0] == 'estimated') {
  OctoPrint.job(function(response) {
    if (response.job == undefined || response.job.estimatedPrintTime == null) {console.log('N/A'); return;}
    var seconds = Math.round(response.job.estimatedPrintTime);
    var hours = parseInt(seconds / 3600);        seconds %= 3600;
    var minutes = parseInt(seconds / 60);        seconds %= 60;
    seconds = parseInt(seconds);
    console.log(pad2(hours) + ':' + pad2(minutes) + ':' + pad2(seconds));
  });
}

