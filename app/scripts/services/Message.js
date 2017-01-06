(function() {
	function Message($firebaseArray) {
		var ref, messages;
		
		return {
			getByRoomId: function(roomId) {
				ref = firebase.database().ref().child("messages").orderByChild('roomId').equalTo(roomId);
				messages = $firebaseArray(ref);
				return messages;
			}
		};
	}
	
	angular
		.module('blocChat')
		.factory('Message', ['$firebaseArray', Message ]);
})();