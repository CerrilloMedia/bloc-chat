(function() {
	function User($firebaseArray, $cookies) {
		
		var db = firebase.database().ref().child("users");
		var users = $firebaseArray(db);
		
		// test the login modal
		var username = $cookies.get('differentThanExpected');
		
		var User = {
			add: function(username) {
				users.$add({
					name: username,
					joined: Date.now()
				});
			},
			name: username
		}
		return User;
	}
	
	angular
		.module('blocChat')
		.factory('User', ['$firebaseArray', '$cookies' , User]);
	
})();