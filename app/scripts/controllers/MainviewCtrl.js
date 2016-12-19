(function() {
    function MainviewCtrl() {
        this.heroTitle = "Welcome to Bloc Chat";
    }
    
    angular
        .module('blocChat')
        .controller('MainviewCtrl', MainviewCtrl );    
})();