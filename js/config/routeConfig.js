angular.module('todoList').config(function ($routeProvider) {
    $routeProvider.when("/", {
		templateUrl: "view/list.html",
		controller: "listController"
	});
	$routeProvider.when("/create", {
		templateUrl: "view/form.html",
		controller: "formController",
		resolve: {
			listKey: function () {
				return null;
			}
		}
    });
    $routeProvider.when("/update/:listKey", {
		templateUrl: "view/form.html",
		controller: "formController",
		resolve: {
			listKey: function ($route) {
				return $route.current.params.listKey;
			}
		}
	});
    $routeProvider.otherwise({ redirectTo: "/" });
});