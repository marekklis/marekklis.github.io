var apteczkaConfig = function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'view/landing.html'
        })
        .when('/kit', {
            controller: 'KitCtrl',
            templateUrl: 'view/kit.html'
        })
    ;
};
var apteczka = angular.module('apteczka', ['ngRoute', 'badgesFilter']).config(apteczkaConfig);
