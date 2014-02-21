apteczka.controller('JumbotronCtrl', function ($scope, $location) {
    $scope.isVisible = function () {
        return $location.path() === '/';
    }
});

