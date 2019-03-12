angular.module('todoList').directive('todoList', function () {
    return {
        templateUrl: 'view/todoList.html',
        replace: true,
        restrict: 'AE',
        scope: {
            title: '@',
            description: '@'
        }
    };
});