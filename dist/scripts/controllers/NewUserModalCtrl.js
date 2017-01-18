(function() {
	function NewUserModalCtrl($scope, $uibModalInstance, $cookies, User, MyAuthSvc) {
		var auth = MyAuthSvc;
		
		this.email = "here@there.com";
		this.pswd = "testing";
		$scope.notification = null;
		
		this.firebaseUser = null;
		this.error = null;
		
		this.addUser = function() {
			if (this.email && this.pswd) {
				auth.$createUserWithEmailAndPassword(this.email, this.pswd)
				  .then(function(firebaseUser) {
					console.log("User " + firebaseUser.email + " created successfully!");
					// update user objcet
					User.updateUserInfo(null, firebaseUser.email, true);
					$uibModalInstance.close();
				  }).catch(function(error) {
					$scope.notification = error.message;
					console.error("Error: ", error.message);
				  });
			}
		}
			
		this.logIn = function() {
			if (this.email && this.pswd) {
				auth.$signInWithEmailAndPassword(this.email, this.pswd)
				  .then(function(firebaseUser) {
					console.log("User " + firebaseUser.email + " logged in successfully!");
					User.updateUserInfo(null, firebaseUser.email, true);
					/*
					pass UID to firebase object to fetch all user information				
					*/
					$uibModalInstance.close();
				  }).catch(function(error) {
					$scope.notification = error.message;
					console.error("Error: ", error.message);
				  });
			}
		}
			
	}
	
	angular
		.module('blocChat')
		.controller('NewUserModalCtrl', [ '$scope', '$uibModalInstance', '$cookies', 'User', 'MyAuthSvc', NewUserModalCtrl ]);
})();