angular.module('GeneratorService', ['CreditCardGenerator'])

.factory('GeneratorService', ['CreditCardGenerator', 
							  function(CreditCardGenerator) {
	console.log('GeneratorService');
								  
	var GeneratorService = function() {
		
	}
	
	
	return GeneratorService;
}])