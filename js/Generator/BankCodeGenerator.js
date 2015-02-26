'use strict';

var _cli = require('cli');
var bankCodes = require('../../resources/bankCodes.json');
var _progressPrinter = require('../Commons/ProgressPrinter');

var BankCodenerator = function() {
	
	this.gen = function() {
		var bankCode = bankCodes[Math.floor((Math.random() * bankCodes.length))];
		if (this.validate(bankCode)) {
			return bankCode;
		}
		return null;
	}
	
	this.genBatch = function(iterations) {
		var printer = new _progressPrinter("BankCodeGenerator", iterations);
		var bankCodes = [];
		for (var i = 0; i < iterations; i ++) {
			var bankCode = this.gen();
			if (bankCode) {
				bankCodes.push(bankCode);
			}
			printer.print(i);
		}
		_cli.info(bankCodes.length + " bank codes generated");
	}
	
	this.validate = function(bankCode) {
		var bankCodeAsString = "" + bankCode.code;
		var isValid = bankCodeAsString.length === 5;
		if (isValid) {
			_cli.debug("Bank code " + bankCode.code + " for " + bankCode.name + " is valid");
		}
		else
		{
			_cli.error("Bank code " + bankCode.code + " for " + bankCode.name + " is invalid");
		}
		return isValid;
	}
}

module.exports = new BankCodenerator();