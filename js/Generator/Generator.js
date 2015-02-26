'use strict';

var Generator = function() {
    var _cli = require('cli');
    var _creditCardGenerator = require('./CreditCardGenerator');
    var _transaction = require('../Models/Transaction');
    var _progressPrinter = require('../Commons/ProgressPrinter');
	var _IBANGenerator = require('./IBANGenerator');
	var _merchantGenerator = require('./MerchantGenerator');
	
    var _transactionTypes = require('../../resources/transactionTypes.json');
	var _cities = require('../../resources/cities.json');
	var _currency = "euro";
	
	var _dayInMiliseconds = 86400000;
	
    this.gen = function(options) {
        
        var creditCards = _creditCardGenerator.genCC('VISA', options.iterations);
        var printer = new _progressPrinter("Generator", options.iterations);
		var ibans = _IBANGenerator.gen(options.bankNumber, options.accountNumber);
		var cityTronc = [];
		
		for (var i = 0; i < options.cities; i++) {
			cityTronc.push(_cities[i]);
		}
		var merchants = _merchantGenerator.genBatch(options.merchants, cityTronc);
		
		var transactionMoy = Math.floor(options.iterations / options.days);
		
		_cli.info("Average is " + transactionMoy + " transactions per days");
		var transactionList = [];
        for(var i = 0; i < options.days; i++) {
			var day = new Date();
			day.setTime(day.getTime() + i * _dayInMiliseconds);
			for (var j = 0; j < transactionMoy; j++) {
				//_cli.info("lol");
				var iban = ibans[Math.floor(Math.random() * ibans.length)];
				var type = _transactionTypes[Math.floor(Math.random() * _transactionTypes.length)];
				var cityNumber = options.cities;
				
				if (options.cities > _cities.length){
					cityNumber = _cities.length;
				}
				var city = _cities[Math.floor(Math.random() * cityNumber)];
				
				var merchant = merchants[Math.floor(Math.random() * merchants.length)];
				var aquierer = Math.floor(Math.random() * 99999 + 10000);

				var transaction = new _transaction(creditCards[i],
												   iban,
												   type,
												   _currency,
												   merchant.code,
												   merchant.namee,
												   merchant.city,
												   merchant.country.code,
												   aquierer,
												   day.getTime());

				//_cli.info('Iteration ' + i + ' ' + JSON.stringify(transaction));
				transactionList.push(transaction);
				printer.print(i);
				
				
			}
        }
		// ibans = accountnumber = people or companies
        return transactionList;
    }
}

module.exports = new Generator();