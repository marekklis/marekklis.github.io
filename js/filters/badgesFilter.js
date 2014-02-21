angular.module('badgesFilter', []).filter('badges', function () {
    return function (input) {
        if (input === 'overdue') {
            return 'glyphicon glyphicon-trash';
        }
        if (input === 'almost-overdue') {
            return 'glyphicon glyphicon-time';
        }
        if (input === 'favorite') {
            return 'glyphicon glyphicon-heart';
        }
    };
});
