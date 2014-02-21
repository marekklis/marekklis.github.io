apteczka.controller('KitCtrl', function ($scope, $location, UserModel) {
    if (!UserModel.isSignedIn()) {
        $location.path('/');
    }
    $scope.items = [
        {'name': 'Rutinoscorbin', 'amount': 25, warning: 'Data ważności upływa za 7 dni', badges: ['almost-overdue']},
        {'name': 'Lorinden A', 'amount': 50},
        {'name': 'Aspirin C', 'amount': 3, danger: 'Lek stracił swoją ważność', badges: ['overdue', 'favorite']},
        {'name': 'Elocom', 'amount': 17},
        {'name': 'Chlorchinaldin', 'amount': 12, badges: ['favorite']}
    ];
});
