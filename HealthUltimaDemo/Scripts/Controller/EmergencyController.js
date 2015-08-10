(function () {
    var app = angular.module("HealthApp");
    var EmergencyController = function ($scope) {
        $scope.message = "Welcome to the Emergency Service Module";
    };
    app.controller("EmergencyController", EmergencyController);
} ());