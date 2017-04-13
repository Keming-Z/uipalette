angular.module('uipalette', [
    'ngRoute'
])
.config([
    '$routeProvider',
    function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'home.html',
                controller: 'HomeCtrl'
            });
    }
]);
