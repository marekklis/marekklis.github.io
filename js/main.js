var apteczkaConfig = function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'view/landing.html'
        })
        .when('/kit', {
            controller: 'KitCtrl',
            templateUrl: 'view/kit.html'
        })
        .when('/item/:itemId', {
            controller: 'ItemCtrl',
            templateUrl: 'view/item.html'
        })
        .when('/kit/:kitId/add', {
            controller: 'AddItemCtrl',
            templateUrl: 'view/addOrEditItem.html'
        })
        .when('/item/:itemId/edit', {
            controller: 'EditItemCtrl',
            templateUrl: 'view/addOrEditItem.html'
        })
    ;
};
var apteczka = angular.module('apteczka', ['ngRoute', 'ngResource', 'badgesFilter', 'services']).config(apteczkaConfig);
