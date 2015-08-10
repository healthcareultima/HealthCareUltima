(function () {
    var doctorService = function () {
        var selectedDoctor;
        var setDoctorData = function (data) {
            selectedDoctor = data;
        };
        var getDoctorData = function (clinics) {
            $(clinics).each(function () {
                if (this.Name == selectedDoctor.Clinic) {
                    selectedDoctor.ClinicDet = this;
                }
            });
            return selectedDoctor;
        };
        var searchDoctor = function (doctors, speciality) {
            var docs = [];
            $(doctors).each(function () {
                if (this.Spec == speciality) {
                    docs.push(this);
                }
            });
            return docs;
        };
        return {
            setDoctorData: setDoctorData,
            getDoctorData: getDoctorData,
            searchDoctor: searchDoctor
        };
    };
    var app = angular.module("HealthApp");
    app.factory("doctorService", doctorService);
} ());