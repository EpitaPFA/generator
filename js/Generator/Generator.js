'use strict';

var Generator = function() {
    var _cli = require('cli');
    var _creditCardGenerator = require('./CreditCardGenerator');
    var _transaction = require('../Models/Transaction');
    var _progressPrinter = require('../Commons/ProgressPrinter');
	
	var _IBANGenerator = require('./IBANGenerator');
    
    this.gen = function(options) {
        var transactionList = [];
        var creditCards = _creditCardGenerator.genCC('VISA', options.iterations);
        var printer = new _progressPrinter("Generator", options.iterations);
        var ibans = _IBANGenerator.gen(options.bankNumber, options.accountNumber); 
        for(var i = 0; i < options.iterations; i++) {
            var transaction = new _transaction(creditCards[i]);
            // _cli.debug('Iteration ' + i + ' ' + JSON.stringify(transaction));
            transactionList.push(transaction);
            printer.print(i);
        }
        return transactionList;
    }
}

module.exports = new Generator();