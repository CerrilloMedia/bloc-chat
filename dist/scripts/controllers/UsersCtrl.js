(function() {
	function UsersCtrl($scope, User, $cookies) {
		$scope.user = User;
	}
	
	angular
		.module('blocChat')
		.controller('UsersCtrl', ['$scope','User','$cookies', UsersCtrl] );
})();