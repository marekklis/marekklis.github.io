apteczka.controller('KitCtrl', function ($scope, $location, KitREST, UserModel) {
    if (!UserModel.isSignedIn()) {
        $location.path('/');
    }

    $scope.kit = KitREST.get();

    $scope.danger = function (item) {
        return item.badges && item.badges.indexOf('overdue') >= 0;
    }

    $scope.goToDetails = function (itemId) {
        $location.path('/item/' + itemId);
    };
});
