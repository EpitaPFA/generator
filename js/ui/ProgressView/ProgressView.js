angular.module('ProgressView', ['angular-svg-round-progress'])

.directive('progressView', [function() {
	return {
		scope : {},
		controller : 'ProgressViewCtrl',
		link: function(scope, element, attrs) {
			
		},
		templateUrl : 'js/ui/ProgressView/ProgressView.html'
	}
}])

.controller('ProgressViewCtrl', ['$scope', '$rootScope', 'EVENTS',
								 function($scope, $rootScope, EVENTS) {
									 
	$scope.max = 40000;
	$scope.current = 0;
									 
	$rootScope.$on(EVENTS.GEN.ONE, function(event, data) {
		console.log("one done");
		$scope.current = $scope.current + 1;
	});
}]);