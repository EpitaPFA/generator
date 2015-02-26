'use strict';

function Transaction(creditCardNumber, accoutNumber, transactionType, currency, merchantCode,
                       merchantName, merchantCity, merchantCountry, acquiererReference,
					  transactionDate) {
    this.creditCardNumber = creditCardNumber;
    this.accoutNumber = accoutNumber;
    this.transactionType = transactionType;
    this.currency = currency;
    this.merchantCode = merchantCode;
    this.merchantName = merchantName;
    this.merchantCity = merchantCity;
    this.merchantCountry = merchantCountry;
    this.acquiererReference = acquiererReference;
    this.transactionDate = transactionDate;
}

module.exports = Transaction;