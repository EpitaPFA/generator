'use strict';

var CreditCardGenerator = function() {
    var _cli = require('cli');
    var _generator = require('creditcard-generator');
    
    this.genCC = function(type, number) {
        var ccs = _generator.GenCC(type, number);
        _cli.info('Generated ' + number + ' ' + type + ' cards.');
        return ccs;
    }
}

module.exports = new CreditCardGenerator();