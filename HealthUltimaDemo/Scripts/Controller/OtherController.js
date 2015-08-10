(function () {
    var app = angular.module("HealthApp");
    var OtherController = function ($scope) {
        $scope.Misc = [
        { src: 'Images/People-Doctor-Male-icon.png', url: '#VCP', CSSclass: 'DAS', text: "Visiting Card Print" },
        { src: 'Images/SampleCollection.png', url: '#BC', CSSclass: 'SCS', text: "Book CAB" },
        { src: 'Images/EmergencyServices.jpg', url: '#HT', CSSclass: 'ES', text: "Health Tips" }        
        ];
    };
    app.controller("OtherController", OtherController);
}());