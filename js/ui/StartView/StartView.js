angular.module('StartView', ['GeneratorService'])

.directive('startView', [function() {
	return {
		scope : {},
		controller : 'StartViewCtrl',
		link : function(element, scope, attrs) {
			
		},
		templateUrl : 'js/ui/StartView/StartView.html'
	}
}])

.controller('StartViewCtrl', ['$scope', 'GeneratorService', function($scope, GeneratorService) {
	$scope.start = function()
	{
		console.log("Starting generation");
		GeneratorService.start(40000);
		
	}
}])