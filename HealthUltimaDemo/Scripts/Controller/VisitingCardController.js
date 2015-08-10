(function () {
    var app = angular.module("HealthApp");
    var VisitingCardController = function ($scope) {
        $scope.message = "Welcome to the Visiting Card Print Module";
    };
    app.controller("VisitingCardController", VisitingCardController);
}());