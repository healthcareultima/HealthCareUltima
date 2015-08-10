(function () {
    var app = angular.module("HealthApp");
    var DoctorController = function ($scope, doctorService, $location) {
        $scope.message = "Welcome to the Doctor Appointment Module";
        $scope.doctors = [
            {
                ID: 1,Name: "Dr. Debashish Ghosh", Timing: [{ Day: "MON-SUN", TIME: "12.30PM-3.30PM"}]
                , Spec: "Orthopedist", Exp: "4 Years Experience", Qualifications: "MBBS, MS", fee: "INR 400", locality: "Baguihati, Kolkata", Rating: 2, Clinic: "Ortho & Joint Clinic"
            },
            {
                ID: 2, Name: "Dr. Nilanjan Dutta", Timing: [{ Day: "MON-TUE,THU-FRI", TIME: "10.30AM-7.00PM" }, { Day: "WED,SAT", TIME: "6.00P.M-7.00PM" }]
                , Spec: "Cardiologist", Exp: "6 Years Experience", Qualifications: "MBBS, M.Sc", fee: "INR 400", locality: "Behala, Kolkata", Rating: 9, Clinic: "Canasia Clinic"
            },
            {
                ID: 3, Name: "Dr. Arindam Deb", Timing: [{ Day: "TUE,THU,SAT", TIME: "6.00PM-8.00PM" }]
                , Spec: "ENT", Exp: "8Years Experience", Qualifications: "MBBS, D.Ortho", fee: "INR 800", locality: "Jadavpur, Kolkata", Rating: 7, Clinic: "AMRI Hospitals"
            },
            {
                ID: 4, Name: "Dr.Sourav Bhattacharya", Timing: [{ Day: "TUE,FRI", TIME: "6.00PM-8.00PM" }]
                , Spec: "Orthopedist", Exp: "5 Years Experience", Qualifications: "MBBS, M.Ch", fee: "INR 700", locality: "Ultadanga, Kolkata", Rating: 6, Clinic: "Apollo Gleneagles"
            },
            {
                ID: 5, Name: "Dr.Tuhin Som", Timing: [{ Day: "TUE,FRI", TIME: "6.00PM-8.00PM" }]
                , Spec: "Orthopedist", Exp: "8 Years Experience", Qualifications: "MBBS, M.Ch", fee: "INR 600", locality: "New Town, Kolkata", Rating: 6, Clinic: "Apollo Gleneagles"
            },
            {
                ID: 6, Name: "Dr.Soumitra Biswas", Timing: [{ Day: "TUE-WED", TIME: "6.00PM-8.00PM" }]
                , Spec: "ENT", Exp: "1 Years Experience", Qualifications: "MBBS, M.Ch", fee: "INR 100", locality: "Hazra, Kolkata", Rating: 6, Clinic: "AMRI Hospitals"
            },
            {
                ID: 7, Name: "Dr.Ramanuj Mukherjee", Timing: [{ Day: "WED,FRI", TIME: "6.00PM-8.00PM" }]
                , Spec: "Cardiologist", Exp: "11 Years Experience", Qualifications: "MBBS, M.S", fee: "INR 700", locality: "Garia, Kolkata", Rating: 6, Clinic: "Canasia Clinic"
            },
        ];
        $scope.searchDoc = function () {
            $scope.speciality = $("#specs").val();
            $scope.selectedDoctors = doctorService.searchDoctor($scope.doctors, $scope.speciality);
        };
        $scope.selectedDoctors = [];
        $scope.setDocService = function (doc) {
            doctorService.setDoctorData(doc);
            $location.path("/DDTL")
        };
        $scope.specialities = ["Orthopedist", "Cardiologist", "ENT"];
        $scope.speciality = "";
        $("#specs").autocomplete({
            source: $scope.specialities
        });
        
    };


    app.controller("DoctorController", DoctorController);
} ());