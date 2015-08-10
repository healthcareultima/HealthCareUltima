(function () {
    var doctorService = function () {
        var selectedDoctor;
        var docs = [];
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
            var suggestDocs = [];
            $(doctors).each(function () {
                if (this.Spec == speciality) {
                    suggestDocs.push(this);
                }
            });
            docs = suggestDocs;
            return docs;
        };
        var getRelatedDoctors = function () {
            var relatedDocs = [];
            $(docs).each(function () {
                if (this.ID != selectedDoctor.ID) {
                    relatedDocs.push(this);
                }
            });
            return relatedDocs;
        };
        return {
            setDoctorData: setDoctorData,
            getDoctorData: getDoctorData,
            searchDoctor: searchDoctor,
            getRelatedDoctors: getRelatedDoctors
        };
    };
    var app = angular.module("HealthApp");
    app.factory("doctorService", doctorService);
} ());