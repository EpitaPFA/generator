'use strict';

var _cli = require('cli');
var _progressPrinter = require('../Commons/ProgressPrinter');

var name = "AccountNumberGenerator";
var AccountNumberGenerator = function() {
    
    this.gen = function() {
		var accountNumber = Math.floor((Math.random() * 99999999999) + 100000);
		if (this.validate(accountNumber)) {
       		return accountNumber;
		}
		else {
			return null;
		}
    }
	
	this.genBatch = function(iterations) {
		var accounts = [];
		var progress = new _progressPrinter("AcccountNumberGenerator", iterations);
		var i = 0;
		while(accounts.length != iterations) {
			var accountNumber = this.gen();
			if (accountNumber) {
				progress.print(i);
				accounts.push(accountNumber);
				i += 1;
			}
		}
		_cli.info(name + " generated " + (accounts.length + " accounts"));
		return accounts;
	}
	
	this.validate = function(accountNumber) {
		var isValide = ("" + accountNumber).length === 10;
		if (isValide) {
			_cli.debug("Account number " + accountNumber + " is valid");
		}
		else {
			_cli.debug("Account number " + accountNumber + " is invalid");
		}
		return isValide;
	}
}

module.exports = new AccountNumberGenerator();