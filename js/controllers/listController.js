angular.module('todoList').controller('listController', ['$scope', 'listService', function ($scope, listService) {
    $scope.lists = listService.getLists();

    $scope.changeCompleted = function (lists, listKey, itemKey) {
        lists[listKey].items[itemKey].completed = !lists[listKey].items[itemKey].completed;
    };

    $scope.removeList = function (lists, index) {
        lists.splice(index, 1);
    };
}]);