(function() {
    function config($stateProvider, $locationProvider) {
        $locationProvider
            .html5Mode({
                enabled: true,
                requireBase: false
            });
        
        $stateProvider
            .state('mainview', {
                url: "/",
                controller: "MainviewCtrl as mainview",
                templateUrl: "/templates/mainview.html"
            })
            .state('rooms', {
                url: "/rooms",
                controller: "RoomsCtrl as rooms",
                templateUrl: "/templates/roomsview.html"
            });
    }
	
    angular
        .module('blocChat', ['firebase',  'ui.bootstrap', 'ui.router', 'ngCookies'])
        .config(config);
})();