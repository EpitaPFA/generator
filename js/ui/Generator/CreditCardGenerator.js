angular.module('CreditCardGenerator', [])

.factory('CreditCardGenerator', [function() {
	
	console.log('CreditCardGenerator');
	var generator = require('creditcard-generator');
	var CreditCardGenerator = function() {
		
	};
	
	
	CreditCardGenerator.genCC = function(type, number) {
		return generator.GenCC(type, number);
	};
	
	return CreditCardGenerator;
}])