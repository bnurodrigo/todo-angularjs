angular.module('todoList').factory('listService', function () {
    var lists = [
        {
            name: "List 1",
            items: [
                {description: "Item 1", completed: true}, 
                {description: "Item 2", completed: true}, 
                {description: "Item 3", completed: true}, 
                {description: "Item 4", completed: false}, 
                {description: "Item 5", completed: false}
            ]
        },
        {
            name: "List 2",
            items: [
                {description: "Item 1", completed: true},
                {description: "Item 2", completed: false},
                {description: "Item 3", completed: false}
            ]
        }
    ];

	var _getLists = function () {
		return lists;
	};

	var _setLists = function (newLists) {
		lists = newLists;
    };
    
    var _addList = function (list) {
        lists.push(list);
    };
    
    var _replaceList = function (key, list) {
        lists[key] = list;
    };

	return {
		getLists: _getLists,
        setLists: _setLists,
        addList: _addList,
        replaceList: _replaceList
	};
});