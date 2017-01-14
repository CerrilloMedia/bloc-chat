(function() {
	function Message(User, Room, $firebaseArray) {
		var ref, messages;
		
		return {
			getByRoomId: function(roomId) {
				ref = firebase.database().ref().child("messages").orderByChild('roomId').equalTo(roomId);
				messages = $firebaseArray(ref);
				return messages;
			},
			submitMessage: function(input) {
				if (input || !input === "") {
					messages.$add({
						content: input,
						roomId: Room.roomId,
						sentAt: Date.now(),
						username: User.name
					});
				}
			}
		};
	}
	
	angular
		.module('blocChat')
		.factory('Message', ['User', 'Room','$firebaseArray', Message ]);
})();