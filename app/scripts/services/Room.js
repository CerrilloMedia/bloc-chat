(function() {
    function Room($firebaseArray) {
		
        var db = firebase.database();
        var roomsref = db.ref().child("rooms");
        var rooms = $firebaseArray(roomsref);
				
		var Room = {
            all: rooms,
            add: function(roomName) {
				rooms.$add({
					name: roomName,
					createdOn: Date.now()
				});
			}
        }
		
		return Room;
    }
    
    angular
        .module('blocChat')
        .factory('Room', ['$firebaseArray', Room ]);
})();