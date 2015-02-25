angular.module('GeneratorService', ['CreditCardGenerator'])

.service('GeneratorService', ['CreditCardGenerator','$http', function(CreditCardGenerator, $http) {
	console.log('GeneratorService');
	
	
	console.log(CreditCardGenerator.genCC('VISA', 10));
	
	this.start = function(number) {
		var p = new Parallel({}, { evalPath: 'js/ui/eval.js' })
			.require('gencc.js');

		// Spawn a remote job (we'll see more on how to use then later)

		p.spawn(function (data) {
			
			console.log(credit_card_number(visaPrefixList, 16, 40));
			return ;
		}).then(function (data) {
			console.log(data);
		});
	}
}])