(function() {
	function RoomsCtrl(Room, Message, $uibModal) {
		this.all = Room.all; // < assign Room.all to a scope variable
		this.active = false;
		
		this.setActiveRoom = function(roomId, name) {
			
			Room.roomId = roomId;
			Room.currentRoom = name;
			
			this.name = name;
			this.messages = Message.getByRoomId(roomId);
			this.active = true;
		};
		
		this.submitMessage = function(newMessage) {
			Message.submitMessage(newMessage);
			// reset text-area
			this.textinput = "";
		}	
		
        this.newroomopenModal = function() {
			Room.newroomname = this.chatroomname;
			this.chatroomname = "";
			
            $uibModal.open({
                controller: 'NewRoomModalCtrl',
                controllerAs: 'roommodal',
                templateUrl: '/templates/newroommodal.html',
                size: 'sm'
			});
		};
	}
	
	angular
		.module('blocChat')
		.controller('RoomsCtrl', ['Room', 'Message', '$uibModal', RoomsCtrl]);
})();