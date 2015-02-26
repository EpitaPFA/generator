'use strict';

var Generator = function() {
    var _cli = require('cli');
    var _creditCardGenerator = require('./CreditCardGenerator');
    var _transaction = require('../Models/Transaction');
    var _progressPrinter = require('../Commons/ProgressPrinter');
	var _IBANGenerator = require('./IBANGenerator');
    var _transactionTypes = require('../../resources/transactionTypes.json');
	var _currency = "euro";
	
    this.gen = function(options) {
        var transactionList = [];
        var creditCards = _creditCardGenerator.genCC('VISA', options.iterations);
        var printer = new _progressPrinter("Generator", options.iterations);
		var ibans = _IBANGenerator.gen(options.bankNumber, options.accountNumber);
		
		
        for(var i = 0; i < options.iterations; i++) {
			var iban = ibans[Math.floor(Math.random() * ibans.length)];
			var type = _transactionTypes[Math.floor(Math.random() * _transactionTypes.length)];
			
			var ecommerce = Math.floor(Math.random() * 1);
            var transaction = new _transaction(creditCards[i], iban, type, _currency);
			
			
            // _cli.debug('Iteration ' + i + ' ' + JSON.stringify(transaction));
            transactionList.push(transaction);
            printer.print(i);
        }
		// ibans = accountnumber = people or companies
        
		
		
		
		
        return transactionList;
    }
}

module.exports = new Generator();