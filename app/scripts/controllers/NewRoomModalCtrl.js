(function() {
    function NewRoomModalCtrl($uibModalInstance, Room) {
        this.cancel = function() {
            $uibModalInstance.close();
        };
		
		this.newroomname = Room.newroomname;
        
        this.addRoom = function() {
			if (this.newroomname && this.newroomname !== '') {
				Room.add(this.newroomname);
				$uibModalInstance.close();
			} else {
				alert("please enter a valid room name")
			}
		};
		
     }
    
    angular
        .module('blocChat')
        .controller('NewRoomModalCtrl', ['$uibModalInstance', 'Room', NewRoomModalCtrl ]);
})();