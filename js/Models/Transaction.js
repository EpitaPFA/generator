'use strict';

function Transaction(creditCardNumber, accoutNumer, transactionType, currency, merchantCode,
                      transactionDate, merchantName, merchantCity, merchantCountry, acquiererReference,
                     ecommerce, localTaxAmt, foreignTnxAmt, foreignTnx) {
    this.creditCardNumber = creditCardNumber;
    this.accoutNumer = accoutNumer;
    this.transactionType = transactionType;
    this.currency = currency;
    this.merchantCode = merchantCode;
    this.transactionDate = transactionDate;
    this.merchantName = merchantName;
    this.merchantCity = merchantCity;
    this.merchantCountry = merchantCountry;
    this.acquiererReference = acquiererReference;
    this.ecommerce = ecommerce;
    this.localTaxAmt = localTaxAmt;
    this.foreignTnxAmt = foreignTnxAmt;
    this.foreignTnx = foreignTnx;
}

module.exports = Transaction;