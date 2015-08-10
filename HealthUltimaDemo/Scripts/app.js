(function () {
    var app = angular.module("HealthApp", ["ngRoute"]);
    app.config(function ($routeProvider) {
        $routeProvider.when("/landing", {
            templateUrl: "HealthOptions.htm",
            controller: "TilesController"
        })
        .when("/DAS", {
            templateUrl: "DocAppt.htm",
            controller: "DoctorController"
        })
        .when("/SCS", {
            templateUrl: "SampleColl.htm",
            controller: "SampleCollController"
        })
           .when("/ES", {
                templateUrl: "EmergencyServices.htm",
                controller: "EmergencyController"
            })
            .when("/AS", {
                templateUrl: "AdmissionServices.htm",
                controller: "AdmissionController"
            })
            .when("/PS", {
                templateUrl: "PharmacyServices.htm",
                controller: "PharmacyController"
            })
            .when("/OS", {
                templateUrl: "OthersErvices.htm",
                controller: "OtherController"
            })
            .when("/DDTL", {
                templateUrl: "BookDocDetail.html",
                controller: "DoctorBookController"
            })
      .otherwise({ redirectTo: "/landing" });
    });

}());