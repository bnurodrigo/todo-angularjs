angular.module('todoList').factory('listService', function () {
    var lists = [
        {
            name: "List 1",
            description: "Description 1",
            items: [
                {name: "Item 1", description: "Description 1", completed: true}, 
                {name: "Item 2", description: "Description 2", completed: true}, 
                {name: "Item 3", description: "Description 3", completed: true}, 
                {name: "Item 4", description: "Description 4", completed: false}, 
                {name: "Item 5", description: "Description 5", completed: false}
            ]
        },
        {
            name: "List 2",
            description: "Description 2",
            items: [
                {name: "Item 1", description: "Description 1", completed: true},
                {name: "Item 2", description: "Description 2", completed: false},
                {name: "Item 3", description: "Description 3", completed: false}
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