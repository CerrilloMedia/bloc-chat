(function() {
	function NewUserModalCtrl($uibModalInstance, $cookies, User) {
		
		this.name = null;
		
		this.addUser = function() {
			if (this.name) {
				$cookies.put('blocChatCurrentUser', this.name);
				
				User.add(this.name)
				$uibModalInstance.close();
			} else {
				alert("please enter a valid name");
			}
		};
	}
	
	angular
		.module('blocChat')
		.controller('NewUserModalCtrl', [ '$uibModalInstance', '$cookies', 'User', NewUserModalCtrl ]);
})();