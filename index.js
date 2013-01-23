var log = require('basic-log');

function tick() {
	var args = Array.prototype.join.call(arguments);
	log('tick ' + args);
}

function start() {
	log('start');
}

function end() {
	log('end');
}

tick.start = start;
tick.end = end;

module.exports = tick;

