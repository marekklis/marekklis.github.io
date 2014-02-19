var apteczkaConfig = function ($routeProvider) {
    $routeProvider
        .when('/', {
            controller: 'ItemsCtrl',
            templateUrl: 'view/items.html'
        })
    ;
};
var apteczka = angular.module('apteczka', ['ngRoute']).config(apteczkaConfig);
