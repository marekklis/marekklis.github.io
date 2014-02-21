var services = angular.module('services', ['ngResource']);

services.factory('KitREST', ['$resource',
    function ($resource) {
        return $resource('data/kit.json');
    }]);

services.factory('ItemREST', ['$resource',
    function ($resource) {
        return $resource('data/:itemId.json');
    }]);