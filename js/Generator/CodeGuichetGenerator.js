'use strict';

var _cli = require('cli');

var CodeGuichetGenerator = function() {
	
	this.gen = function() {
		return Math.floor((Math.random() * 99999) + 1);
	}
	
	this.genBatch = function(iterations) {
		_cli.info("Generating " + iterations + " guichet codes");
		var guichets = [];
		for(var i = 0; i < iterations; i++) {
			guichets.push(iterations);
		}
		_cli.debug("Guichet codes " + JSON.stringify(guichets));
		return guichets;
	}
}

module.exports = new CodeGuichetGenerator();