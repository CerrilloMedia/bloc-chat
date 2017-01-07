(function() {
	function RoomsCtrl(Room, Message, $uibModal) {
		this.all = Room.all; // < assign Room.all to a scope variable
		
		this.setActiveRoom = function(roomId){
			this.messages = Message.getByRoomId(roomId);
		};
		
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