apteczka.controller('ItemCtrl', function ($scope, $routeParams, $location, ItemREST, UserModel) {
    if (!UserModel.isSignedIn()) {
        $location.path('/');
    }

    $scope.item = ItemREST.get({itemId: $routeParams.itemId});

    $scope.amount = function (item) {
        if (item.quantity) {
            return item.amount + " " + item.amountType + "(z " + +")";
        }
        return item.amount + " " + item.amountType;
    }

    $scope.goToKit = function () {
        $location.path('/kit');
    }

    $scope.goToEdit = function () {
        $location.path('/item/' + $scope.item.id + '/edit');
    }
});
