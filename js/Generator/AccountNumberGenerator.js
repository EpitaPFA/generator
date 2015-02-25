'use strict';

var _cli = require('cli');
var _countries = require('../../resources/countries.json');

var AccountNumberGenerator = function() {
    
    var _France = {};
    for (var i = 0; i < _countries.length; i++) {
        if (_countries[i].name === 'France') {
            _France = _countries[i];
            _cli.info('Default country set to ' + JSON.stringify(_France));
        }
    }
    
    
    this.gen = function() {
        
    }
}

module.exports = new AccountNumberGenerator();