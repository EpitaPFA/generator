'use strict';

var Generator = function() {
    var _cli = require('cli');
    var _creditCardGenerator = require('./CreditCardGenerator');
    var _transaction = require('../Models/Transaction');
    var _progressPrinter = require('../Commons/ProgressPrinter');
    
    this.gen = function(iteration) {
        var transactionList = [];
        var creditCards = _creditCardGenerator.genCC('VISA', iteration);
        var printer = new _progressPrinter("Generator", iteration);
        
        for(var i = 0; i < iteration; i++) {
            var transaction = new _transaction(creditCards[i]);
            // _cli.debug('Iteration ' + i + ' ' + JSON.stringify(transaction));
            transactionList.push(transaction);
            printer.print(i);
        }
        return transactionList;
    }
}

module.exports = new Generator();