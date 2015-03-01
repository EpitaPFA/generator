'use strict';

var Generator = function() {
    var self = this,
        _cli = require('cli'),
        _creditCardGenerator = require('./CreditCardGenerator'),
        _transaction = require('../Models/Transaction'),
        _progressPrinter = require('../Commons/ProgressPrinter'),
        _IBANGenerator = require('./IBANGenerator'),
        _merchantGenerator = require('./MerchantGenerator'),
        _userGenerator = require('./UserGenerator'),
        ArrayUtils = require('../Commons/ArrayUtils');
	
    var _transactionTypes = require('../../resources/transactionTypes.json'),
        _cities = require('../../resources/cities.json'),
        _currency = "euro";
	
	var _dayInMiliseconds = 86400000;
	
    this.gen = function(options) {
        
        var printer = new _progressPrinter("Generator", options.iterations);
		var ibans = _IBANGenerator.gen(options.bankNumber, options.accountNumber);
        var creditCards = _creditCardGenerator.genCC('VISA', ibans.length);
        var users = _userGenerator.genBatch(ibans, creditCards); 
        
            
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
				var type = ArrayUtils.getRandom(_transactionTypes);
				var merchant = ArrayUtils.getRandom(merchants);
                var creditCard = ArrayUtils.getRandom(creditCards);
                var user = ArrayUtils.getRandom(users);
                
				var cityNumber = options.cities;
				
				if (options.cities > _cities.length){
					cityNumber = _cities.length;
				}
				var city = _cities[Math.floor(Math.random() * cityNumber)];
				
				var aquierer = Math.floor(Math.random() * 99999 + 10000);
                
                

				var transaction = new _transaction(user.creditCard,
												   user.account,
												   type,
												   _currency,
												   merchant.code,
												   merchant.name,
												   merchant.city,
												   merchant.country.code,
												   merchant.ref,
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