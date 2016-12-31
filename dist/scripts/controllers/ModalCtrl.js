(function() {
    function ModalCtrl($uibModalInstance, Room) {
        this.cancel = function() {
            $uibModalInstance.close();
        };
		
		this.newroomname = Room.newroomname;
        
        this.addRoom = function() {
			// add new room
			Room.add(this.newroomname);
			// close modal
			$uibModalInstance.close();
			// $location.path( path );
        };
		
     }
    
    angular
        .module('blocChat')
        .controller('ModalCtrl', ['$uibModalInstance', 'Room', ModalCtrl ]);
})();