apteczka.controller('SignInCtrl', function ($scope, $location, $log, UserModel) {
    $scope.signIn = function () {
        if ($scope.email && ($scope.email === $scope.password)) {
            UserModel.signIn($scope.email, $scope.password);
            $location.path('/kit');
            $scope.email = '';
            $scope.password = '';
        } else {
            $log.info('zjebałeś');
        }
    }
    $scope.signOut = function () {
        UserModel.signOut();
        $location.path('/');
    }
    $scope.isSignedIn = function () {
        return UserModel.isSignedIn();
    }
});
