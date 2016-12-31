(function() {
    function Room($firebaseArray) {
		
        var db = firebase.database();
        var roomsref = db.ref().child("rooms");
        var usersref = db.ref().child("users");
        var rooms = $firebaseArray(roomsref);
        var users = $firebaseArray(usersref);
		
		var newroomname;
		
		var Room = {
            all: rooms,
            add: function(roomName) {
				rooms.$add({
					name: roomName
				});
            },
			newroomname: newroomname
        }
		
		return Room;
    }
    
    angular
        .module('blocChat')
        .factory('Room', ['$firebaseArray', Room ]);
})();