(function() {
	function BlocChatCookies($cookies, $uibModal, User) {
		var currentUser = $cookies.get('blocChatCurrentUser');
		if (currentUser !== User.name) {
			// if user doesn' exist or name is empty
			$uibModal.open({
                controller: 'NewUserModalCtrl',
                controllerAs: 'usermodal',
                templateUrl: '/templates/newusermodal.html',
                size: 'sm',
				backdrop: 'static', // prevent from exiting without
				keyboard: false		// proper user login
			});
		};
	}
	
	
	angular
		.module('blocChat')
		.run(['$cookies', '$uibModal', 'User', BlocChatCookies ]);
})();