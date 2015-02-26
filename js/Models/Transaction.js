'use strict';

function Transaction(creditCardNumber, accoutNumber, transactionType, currency, merchantCode,
                      transactionDate, merchantName, merchantCity, merchantCountry, acquiererReference,
                     ecommerce, localTaxAmt, foreignTnxAmt, foreignTnx) {
    this.creditCardNumber = creditCardNumber;
    this.accoutNumber = accoutNumber;
    this.transactionType = transactionType;
    this.currency = currency;
    this.merchantCode = merchantCode;
    this.transactionDate = transactionDate;
    this.merchantName = merchantName;
    this.merchantCity = merchantCity;
    this.merchantCountry = merchantCountry;
    this.acquiererReference = acquiererReference;
}

module.exports = Transaction;