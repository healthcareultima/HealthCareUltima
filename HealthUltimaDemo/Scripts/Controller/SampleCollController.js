(function () {
    var app = angular.module("HealthApp");
    var SampleCollController = function ($scope) {
        $scope.message = "Welcome to the Sample Collection and Test Module";
    };
    app.controller("SampleCollController", SampleCollController);
} ());