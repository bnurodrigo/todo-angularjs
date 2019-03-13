angular.module('todoList').directive('todoList', function () {
    return {
        templateUrl: 'view/todoList.html',
        replace: true,
        transclude: true,
        restrict: 'AE'
    };
});

angular.module('todoList').directive('todoListHeader', function () {
    return {
        templateUrl: 'view/todoListHeader.html',
        restrict: 'AE',
        require: '^todoList',
        scope: {
            update: '@',
            title: '=',
            description: '=?'
        }
    };
});

angular.module('todoList').directive('todoListItems', function () {
    return {
        templateUrl: 'view/todoListItems.html',
        transclude: true,
        restrict: 'AE',
        require: '^todoList'
    };
});

angular.module('todoList').directive('todoListItem', function () {
    return {
        templateUrl: 'view/todoListItem.html',
        restrict: 'AE',
        require: '^todoListItems',
        replace: true,
        scope: {
            title: '=',
            description: '=?',
            completed: '='
        }
    };
});