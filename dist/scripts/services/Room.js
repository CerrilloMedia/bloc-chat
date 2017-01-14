(function() {
    function Room($firebaseArray) {
		
        var db = firebase.database();
        var roomsref = db.ref().child("rooms");
        var rooms = $firebaseArray(roomsref);
		
		var roomId = null;
		var currentRoom = null;
				
		var Room = {
            all: rooms,
            add: function(roomName) {
				rooms.$add({
					name: roomName,
					createdOn: Date.now()
				});
			},
			roomId: roomId,
			currentRoom: currentRoom
        };
		
		return Room;
    }
    
    angular
        .module('blocChat')
        .factory('Room', ['$firebaseArray', Room ]);
})();