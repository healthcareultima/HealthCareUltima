(function () {
    var app = angular.module("HealthApp");
    var SampleCollController = function ($scope) {
        $scope.message = "Welcome to the Sample Collection and Test Module";
        $scope.populateClinics = function () {          
            $('.docResults').css("display", "block");
            $scope.TestName = $('#testName').val();
        };
        $scope.openMapModal=function()
        {
            alert('hi');
            return false;
        }
        $scope.clinics = [
            {
                Name: "Clinic A", Timing: [{ Day: "MON-SUN", TIME: "12.30PM-3.30PM" }]
                , Spec: "Orthopedist", Qualifications: "MBBS, MS", fee: "INR 400", locality: "Baguihati, Kolkata", Rating: "2", Clinic: "Ortho & Joint Clinic"
            },
            {
                Name: "Clinic B", Timing: [{ Day: "MON-TUE,THU-FRI", TIME: "10.30AM-7.00PM" }, { Day: "WED,SAT", TIME: "6.00P.M-7.00PM" }]
                , Spec: "Cardiologist", Qualifications: "MBBS, M.Sc", fee: "INR 400", locality: "Behala, Kolkata", Rating: "9", Clinic: "Canasia Clinic"
            },
            {
                Name: "Clinic C", Timing: [{ Day: "TUE,THU,SAT", TIME: "6.00PM-8.00PM" }]
                , Spec: "ENT Surgeon", Qualifications: "MBBS, D.Ortho", fee: "INR 800", locality: "Jadavpur, Kolkata", Rating: "7", Clinic: "AMRI Hospitals - Salt Lake"
            },
            {
                Name: "Clinic D", Timing: [{ Day: "TUE,FRI", TIME: "6.00PM-8.00PM" }]
                , Spec: "Neurologist", Qualifications: "MBBS, M.Ch", fee: "INR 700", locality: "Ultadanga, Kolkata", Rating: "6", Clinic: "Apollo GLeneagles"
            },
        ];
        $scope.setDocService = function (doc) {
            doctorService.setDoctorData(doc);
            $location.path("/DDTL")
        };
    };
  
    app.controller("SampleCollController", SampleCollController);
} ());