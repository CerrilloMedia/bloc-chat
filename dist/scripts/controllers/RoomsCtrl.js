(function() {
    function RoomsCtrl(Room) {
        this.rooms = Room.all; // should be an array of objects?
    }
    
    angular
        .module('blocChat')
        .controller('RoomsCtrl', ['Room', RoomsCtrl ]);
})();