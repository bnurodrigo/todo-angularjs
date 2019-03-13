angular.module('todoList').controller('formController', ['$scope', '$location', 'listService', 'listKey', function ($scope, $location, listService, listKey) {
    $scope.list = null === listKey ? { items: [] } : listService.getLists()[listKey];

    $scope.addItem = function (list) {
        list.items.push({ name: "", description: "", completed: false });
    };

    $scope.removeItem = function (list, index) {
        list.items.splice(index, 1);
    };

    $scope.createList = function (list) {
        if (null === listKey) {
            listService.addList(list);
        } else {
            listService.replaceList(listKey, list);
        }

        $location.path('/');
    };
}]);