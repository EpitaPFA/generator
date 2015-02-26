'use strict';

var _cli = require('cli');

var CodeGuichetGenerator = function() {
	
	this.gen = function() {
		return Math.floor((Math.random() * 99999) + 1);
	}
	
	this.genBatch = function(iterations) {
		var guichets = [];
		for(var i = 0; i < iterations; i++) {
			guichets.push(this.gen());
		}
		return guichets;
	}
}

module.exports = new CodeGuichetGenerator();