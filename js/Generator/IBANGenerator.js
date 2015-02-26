'use strict';

var _cli = require('cli');
var _iban = require('iban');
var _countries = require('../../resources/countries.json');

var IBANGenerator = function() {
	
	var _France = {};
    for (var i = 0; i < _countries.length; i++) {
        if (_countries[i].name === 'France') {
            _France = _countries[i];
            _cli.info('Default country set to ' + JSON.stringify(_France));
        }
    }
	
	this.gen = function(countyCode, bankCode, accountNumber) {
		
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