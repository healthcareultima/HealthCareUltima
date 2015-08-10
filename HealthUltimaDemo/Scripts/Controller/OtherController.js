(function () {
    var app = angular.module("HealthApp");
    var OtherController = function ($scope) {
        $scope.message = "Welcome to the Other Services Module";
    };
    app.controller("OtherController", OtherController);
} ());