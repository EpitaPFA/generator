'use strict';

var _cli = require('cli');
var _iban = require('iban');
var _countries = require('../../resources/countries.json');
var _bankCodeGenerator = require('./BankCodeGenerator');
var _accountNumberGenerator = require('./AccountNumberGenerator');
var _codeGuichetsGenerator = require('./CodeGuichetGenerator');
var _progressPrinter = require('../Commons/ProgressPrinter');

var name = "IBANGenerator";
var IBANGenerator = function() {
	
	var _France = {};
    for (var i = 0; i < _countries.length; i++) {
        if (_countries[i].name === 'France') {
            _France = _countries[i];
            _cli.info('Default country set to ' + JSON.stringify(_France));
        }
    }
	
	this.gen = function(bankNumber, accountNumber) {
		var ibans = [];
		var bankCodes = _bankCodeGenerator.genBatch(bankNumber);
		var accounts = _accountNumberGenerator.genBatch(accountNumber);
		var banks = [];
		for (var i = 0; i < bankCodes.length; i++) {
			var guichetsNb = Math.floor((Math.random() * 4) + 1);
			var codeGuichets = _codeGuichetsGenerator.genBatch(guichetsNb);
			var bank = {
				code : bankCodes[i],
				guichets : codeGuichets
			}
			banks.push(bank);
		}
		var progress = new _progressPrinter("IBANGenerator", accountNumber);
		for (var i = 0; i < accountNumber; i ++) {
			var key = Math.floor(Math.random * 96 + 2);
			if (key < 10) {
				key = "0" + key;
			}
			var bank = banks[Math.floor(Math.random() * banks.length)];
			var codeGuichet = bank.guichets[Math.floor(Math.random() * bank.guichets.length)];
			var accountCode  = accounts[Math.floor(Math.random() * accounts.length)];
			var rib = this.genRIB(bank.code, codeGuichet, accountNumber);
			var bban = bank.code + codeGuichet + accountNumber;
			
			var iban = _France + key ;
			progress.print(i);
			ibans.push(iban);
		}
		_cli.info(name + " generated " + banks.length + " ibans");
		return ibans;
	}
	
	this.genRIB = function(bankCode, codeGuichet, accountNumber) {
		
		var bban = 97 - ((89 * bankCode + 15 * codeGuichet + 3* accountNumber) % 97);
		/*var valid = _iban.isValidBBAN(_France.code, bban);
		if (valid) {
			_cli.debug("BBAN " + bban + " is valid");
		}
		else {
			_cli.error("BBAN " + bban + " is invalid");
		}*/
		return bban;
	}
	
	this.validateIban = function(iban) {
		var valid = _iban.isValid(iban);
		if (valid) {
			_cli.info("Iban " + iban + " is valid");
		}
		else {
			_cli.error("Iban " + iban + " is invalid");
		}
		return ;
	}
}

module.exports = new IBANGenerator();