(function () {
    var app = angular.module("HealthApp");
    var TilesController = function ($scope) {
        $scope.tiles = [
        { src: 'Images/People-Doctor-Male-icon.png', url: '#DAS', CSSclass:'DAS', text: "Doctor Appointment" },
        { src: 'Images/SampleCollection.png', url: '#SCS', CSSclass: 'SCS', text: "Sample Collection" },
        { src: 'Images/EmergencyServices.jpg', url: '#ES', CSSclass: 'ES', text: "Emergency" },
        { src: 'Images/AdmissionService.png', url: '#AS', CSSclass: 'AS', text: "Admission" },
        { src: 'Images/PharmacyService.jpg', url: '#PS', CSSclass: 'PS', text: "Pharmacy" },
        { src: 'Images/OtherService.png', url: '#OS', CSSclass: 'OS', text: "Other Services" }
       ];
    };
    app.controller("TilesController", TilesController);
} ());