(function () {
    var app = angular.module("HealthApp");
    var BookCABController = function ($scope) {
        $scope.message = "Welcome to the Book CAB Module";
    };
    app.controller("BookCABController", BookCABController);
}());