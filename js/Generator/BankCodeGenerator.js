'use strict';

var _cli = require('cli');
var bankCodes = require('../../resources/bankCodes.json');
var _progressPrinter = require('../Commons/ProgressPrinter');
var ArrayUtils = require('../Commons/ArrayUtils');

var name = "BankCodenerator";
var BankCodenerator = function() {
	
	this.gen = function() {
		var bankCode = ArrayUtils.getRandom(bankCodes);
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
		_cli.info(name + " generated " + (bankCodes.length + " bank codes"));
		return bankCodes;
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