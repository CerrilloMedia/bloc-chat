(function() {
	function RoomsCtrl(Room, $uibModal) {
		this.all = Room.all;
		
		this.totalRooms = Room.totalRooms;
		
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
		.controller('RoomsCtrl', ['Room', '$uibModal', RoomsCtrl]);
})();