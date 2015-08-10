(function () {
    var app = angular.module("HealthApp");
    var DoctorBookController = function ($scope, $location, doctorService) {
        $scope.clinics = [
         {
             Name: "Ortho & Joint Clinic", Region: "Baguihati", City: "Kolkata", DetailedAdress: "#13, 4th Main, 8th Mile, Baguihati Landmark: Opp. Big Bazaar, Kolkata"
         },
         {
             Name: "Canasia Clinic", Region: "Behala", City: "Kolkata", DetailedAdress: "#15, 4th Main, 8th Mile, Behala Landmark: Opp. Big Bazaar, Kolkata"
         },
         {
             Name: "AMRI Hospitals", Region: "Jadavpur", City: "Kolkata", DetailedAdress: "#17, 4th Main, 8th Mile, Jadavpur Landmark: Opp. Big Bazaar, Kolkata"
         },
         {
             Name: "Apollo Gleneagles", Region: "Salt Lake", City: "Kolkata", DetailedAdress: "#27, 4th Main, 8th Mile, Salt Lake Landmark: Beside Swabhumi, Kolkata"
         }
        ];
        $scope.doctor = doctorService.getDoctorData($scope.clinics);
        $scope.relatedDocs = doctorService.getRelatedDoctors();
        $scope.setDocService = function (doc) {
            doctorService.setDoctorData(doc);
            $scope.doctor = doctorService.getDoctorData($scope.clinics);
            $scope.relatedDocs = doctorService.getRelatedDoctors();
        };
        $scope.BookAppointment = function () {
            alert("Your appointment with " + $scope.doctor.Name + " is in Progress..You will be redirected to payment gateway");
        }
        
    };
    app.controller("DoctorBookController", DoctorBookController);
} ())