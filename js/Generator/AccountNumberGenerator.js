'use strict';

var _cli = require('cli');

var AccountNumberGenerator = function() {
    
    this.gen = function() {
		var accountNumber = Math.floor(Math.random() * 9999999999);
		if (this.validate(accountNumber)) {
       		return accountNumber;
		}
		else {
			return null;
		}
    }
	
	this.validate = function(accountNumber) {
		var isValide = accountNumber.length === 10;
		if (isValide) {
			_cli.info("Account number " + accountNumber + " is valid");
		}
		else {
			_cli.error("Account number " + accountNumber + " is invalid");
		}
		return accountNumber.length === 10;
	}
}

module.exports = new AccountNumberGenerator();