# tick

A simple profiling utility for Node.js.

TODO change name, npm already has `tick`

## Installing

## Usage

	var tick = require('tick');

	tick.start('x');

	tick('this');
	tick('that');

	for (var i = 0; i < 10; i++) {
		tick('third');
	}

	tick.end('x');

Output:

	// TODO

