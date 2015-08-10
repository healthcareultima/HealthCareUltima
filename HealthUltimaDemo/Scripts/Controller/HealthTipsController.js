(function () {
    var app = angular.module("HealthApp");
    var HealthTipsController = function ($scope) {
        $scope.message = "Welcome to the Health Tips Module";
    };
    app.controller("HealthTipsController", HealthTipsController);
}());