'use strict'

var _cli = require('cli');
var _countries = require('../../resources/countries.json');
var _progressPrinter = require('../Commons/ProgressPrinter');

var Merchant = require('../Models/Merchant');

var _France = {};
for (var i = 0; i < _countries.length; i++) {
	if (_countries[i].name === 'France') {
		_France = _countries[i];
		_cli.info('Default country set to ' + JSON.stringify(_France));
	}
}

var MerchantGenerator = function() {

	
	this.genCode = function() {
		return Math.floor(Math.random() * 99999 + 10000);
	}
	
	this.genName = function() {
		return Math.floor(Math.random() * 99999 + 10000);;
	}
	
	this.getCity = function(cities) {
		return cities[Math.floor(Math.random() * cities.length)];
	}
    
    this.genAcquiereRef = function() {
        return Math.floor(Math.random() * 99999 + 10000);
    }
	
	this.getCountry = function() {
		return _France;
	}
	
	this.genBatch = function(number, cities) {
		var printer = new _progressPrinter("MerchantGenerator", number);
		var merchants = [];
		
		for (var i = 0; i < number ; i ++) {
			var merchant = new Merchant();
			merchant.code = this.genCode();
			merchant.name = "" + this.genName();
			merchant.city = this.getCity(cities);
			merchant.country = this.getCountry();
            merchant.ref = this.genAcquiereRef();
			printer.print(i);
			merchants.push(merchant);
		}
		_cli.info("MerchantGenerator generated " + merchants.length + " merchants");
		return merchants;
	}
}

module.exports = new MerchantGenerator();