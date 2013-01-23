var log = require('basic-log');

function Tick(opts) {
	function tick() {
		var args = Array.prototype.join.call(arguments);
		log('tick ' + args);
	}

	tick.__proto__ = this.__proto__;

	return tick;
}

Tick.prototype = Object.create(Function.prototype);

Tick.prototype.start = function() {
	log('start');
}

Tick.prototype.end = function() {
	log('end');
}

var tick = new Tick();

module.exports = tick;

