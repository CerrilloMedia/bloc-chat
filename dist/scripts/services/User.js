(function() {
	function User($firebaseArray, $cookies) {
		
		var db = firebase.database().ref().child('users');
		var users = $firebaseArray(db);
		
		// test the login modal
		var username = null;
		var email = null;
		var signedIn = false;
		
		return {
			add: function(username) {
				users.$add({
					name: username,
					joined: Date.now()
				});
				this.name = username;
			},
			name: username,
			email: email,
			delete: function() {
				/* add delete options here*/ 
			},
			signedIn: signedIn,
			updateUserInfo: function(name, email, signedIn) {
				this.name = name;
				this.email = email;
				this.signedIn = signedIn;
			}
		}
	}
	
	angular
		.module('blocChat')
		.factory('User', ['$firebaseArray', '$cookies' , User]);
	
})();