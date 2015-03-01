'use strict';

var _cli = require('cli');
var _iban = require('iban');
var _countries = require('../../resources/countries.json');
var _bankCodeGenerator = require('./BankCodeGenerator');
var _accountNumberGenerator = require('./AccountNumberGenerator');
var _codeGuichetsGenerator = require('./CodeGuichetGenerator');
var _progressPrinter = require('../Commons/ProgressPrinter');
var _ibanKeys = require('../../resources/ibanKeys.json');
var ArrayUtils = require('../Commons/ArrayUtils');

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
				code : bankCodes[i].code,
				guichets : codeGuichets
			}
			banks.push(bank);
		}
		var progress = new _progressPrinter("IBANGenerator", accountNumber);
		for (var i = 0; i < accountNumber; i ++) {
			var key = Math.floor(Math.random() * 96 + 2);
			if (key < 10) {
				key = "0" + key;
			}
			var bank = ArrayUtils.getRandom(banks);
			var codeGuichet = ArrayUtils.getRandom(bank.guichets);
			var accountCode  = ArrayUtils.getRandom(accounts);
            
			var rib = this.genRIB(bank.code, codeGuichet, accountCode);
			var bban = bank.code + codeGuichet + accountNumber;
            
            var valid = _iban.isValidBBAN(_France.code, rib);
   
			var iban = _France.code.concat(key).concat(bban).concat(key);
            this.numberize(iban);
			progress.print(i);
			ibans.push(iban);
		}
		_cli.info(name + " generated " + banks.length + " ibans");
		return ibans;
	}
    
    this.numberize = function(code) {
        for (var i = 0; i < 2 ; i++) {
            var c = code.charAt(i);
            if (/[A-Z]/.test(c)) {
                
                c = _ibanKeys[c];
                code = code.substr(0, i) + c + code.substr(i+1);
            }
        }
        return code;
    }
	
	this.genRIB = function(bankCode, codeGuichet, accountNumber) {
		
		var key = 97 - ((89 * bankCode + 15 * codeGuichet + 3* accountNumber) % 97);
        var rib = "".concat(bankCode).concat(codeGuichet).concat(accountNumber).concat(key);
		return rib;
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