(function() {
	function NewUserModalCtrl($uibModalInstance, $cookies, User) {
		
		this.name = User.name;
		
		this.addUser = function() {
			if (this.name) {
				$cookies.put('blocChatCurrentUser', this.name);
				User.add(this.name);
				$uibModalInstance.close();
				console.log("submitted username: " + $cookies.get('blocChatCurrentUser'));
			} else {
				alert("please enter a valid name");
			}
		};
	}
	
	angular
		.module('blocChat')
		.controller('NewUserModalCtrl', [ '$uibModalInstance', '$cookies', 'User', NewUserModalCtrl ]);
})();