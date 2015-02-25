'use strict';

var Generator = function() {
    var _cli = require('cli');
    var _creditCardGenerator = require('./CreditCardGenerator');
    var _Transaction = require('../Models/Transaction');
    
    this.gen = function(iteration) {
        var transactionList = [];
        var creditCards = _creditCardGenerator.genCC('VISA', iteration);
        
        for(var i = 0; i < iteration; i++) {
            var transaction = new _Transaction(creditCards[i]);
            _cli.debug('Iteration ' + i + ' ' + JSON.stringify(transaction));
            transactionList.push(transaction);
        }
        return transactionList;
    }
}

module.exports = new Generator();