apteczka.controller('ItemCtrl', function ($scope, $routeParams, $location, ItemREST, UserModel) {
    if (!UserModel.isSignedIn()) {
        $location.path('/');
    }

    $scope.item = $scope.kit = ItemREST.get({itemId: $routeParams.itemId});
});
