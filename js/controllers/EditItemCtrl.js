apteczka.controller('EditItemCtrl', function ($scope, $routeParams, $log, $location, ItemREST, UserModel) {
    if (!UserModel.isSignedIn()) {
        $location.path('/');
    }

    $scope.item = ItemREST.get({itemId: $routeParams.itemId});

    $scope.onlyNumbers = /^\d+$/;

    $scope.cancel = function () {
        $location.path('/kit');
    }

    $scope.save = function () {
        $log.info('EditItemCtrl SAVE ' + JSON.stringify($scope.item));
        $location.path('/kit');
    }

});
