(function () {
    var app = angular.module("HealthApp");
    var AdmissionController = function ($scope) {
        $scope.message = "Welcome to the Admission Module";
    };
    app.controller("AdmissionController", AdmissionController);
} ());