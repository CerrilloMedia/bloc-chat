(function() {
	function User($firebaseArray, $cookies) {
		
		var db = firebase.database().ref().child('users');
		var users = $firebaseArray(db);
		
		// test the login modal
		var username = "visitor";
		
		return {
			add: function(username) {
				users.$add({
					name: username,
					joined: Date.now()
				});
				this.name = username;
			},
			name: username
		}
	}
	
	angular
		.module('blocChat')
		.factory('User', ['$firebaseArray', '$cookies' , User]);
	
})();