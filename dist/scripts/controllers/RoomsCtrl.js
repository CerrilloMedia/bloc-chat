(function() {
	function RoomsCtrl(Room, Message, $uibModal) {
		this.all = Room.all; // < assign Room.all to a scope variable
		
		this.setActiveRoom = function(roomId){
			this.messages = Message.getByRoomId(roomId);
			console.log(roomId);
		}
		 
		
        this.openModal = function() {
			Room.newroomname = this.chatroomname;
			
            $uibModal.open({
                controller: 'ModalCtrl',
                controllerAs: 'modal',
                templateUrl: '/templates/modal.html',
                size: 'sm'
			});
		};
	}
	
	angular
		.module('blocChat')
		.controller('RoomsCtrl', ['Room', 'Message', '$uibModal', RoomsCtrl]);
})();