(function() {	
	function MyAuthSvc($firebaseAuth) {
		return $firebaseAuth();
	}
	
	angular
		.module('blocChat')
		.factory('MyAuthSvc', ['$firebaseAuth', MyAuthSvc ]);
})();