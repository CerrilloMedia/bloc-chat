(function() {
    function RoomsCtrl(Room) {
        this.all = Room.all; // should be an array of objects?
        console.log(this.all);
    }
    
    angular
        .module('blocChat')
        .controller('RoomsCtrl', ['Room', RoomsCtrl ]);
})();