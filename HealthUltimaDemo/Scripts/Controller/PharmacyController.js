(function () {

    var app = angular.module("HealthApp");
    var PharmacyController = function ($scope) {

        $scope.message = "Welcome to the Pharmacy Service Module";
        $scope.availableDrugs = [
         'Crocin',
         'Calpol',
         'Pan 40',
         'Alcasol',
         'YMOX'
        ];
        $scope.search = function () {
            $('#drugName').autocomplete({
                source: $scope.availableDrugs
            });
        }
        $scope.AddNew = function () {
            $('.searchDiv ul').append('<li><input type="text" placeholder="Drug/Generic Name" class="drugText" /><input type="text" placeholder="Qty" class="drugText" /><input type="text" placeholder="Price" class="drugText" /></li> ');

        }
        $scope.LocateStore = function (ctrl) {
            $('.StoreLocator').css("display", "block");
            $(ctrl).css("display", "none");
        }
        $scope.LoadMap = function () {
            $scope.InitializeMap();
        }

        $scope.CheckDelivery = function () {

            var pinCode = $('#pinCode').val();
            if (pinCode == '700145' || pinCode == '700001') {
                $('.Undeliverable').css("display", "none");
                $('.Deliverable').css("display", "block");
                $('.searchDiv').css("display", "block");
                $('.Order').css("display", "block");
                $('.StoreLocator').css("display", "none");
                $('#mapCanvas').css("display", "none");
            }
            else {
                $('.Undeliverable').css("display", "block");
                $('.Deliverable').css("display", "none");
                $('.searchDiv').css("display", "none");
                $('.Order').css("display", "none");
                $('.StoreLocator').css("display", "none");
                $('#mapCanvas').css("display", "block");
            }
        }





        //Map Functionality

        var map;
        var infowindow = null;
        var markers = [];
        var lat;
        var lon;

        var src = new google.maps.LatLng(22.57, 88.43);
        var dest = new google.maps.LatLng(22.61, 88.43);
        var directionsDisplay;
        var directionsService = new google.maps.DirectionsService();
        


        $scope.InitializeMap = function () {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition($scope.findLocation, $scope.errorLocation);
            } else {
                // Browser does not support GeoLocation
            }
        }
        $scope.findLocation = function (position) {
            var locations = [
      ['Baruipur', 22.35, 88.44,4, "Images/pharmacy.png"],
      ['Kolkata', 22.56, 88.36, 5, "Images/pharmacy.png"],
      ['Baguiati', 22.61, 88.43, 3, "Images/pharmacy.png"],
      ['Behala', 22.49, 88.31, 2,"Images/pharmacy.png"],
      ['Jadabpur', 22.48, 88.38, 1, "Images/pharmacy.png"],
      ['Your Location', 22.57, 88.43, 0, "Images/youarehere.jpg"]
            ];
            directionsDisplay = new google.maps.DirectionsRenderer();
            var map = new google.maps.Map(document.getElementById('mapCanvas'), {
                zoom: 10,
                center: new google.maps.LatLng(22.56, 88.36),
                mapTypeId: google.maps.MapTypeId.ROADMAP
            });
            directionsDisplay.setMap(map);
            var infowindow = new google.maps.InfoWindow();

            var marker, i;

            for (i = 0; i < locations.length; i++) {
                marker = new google.maps.Marker({
                    position: new google.maps.LatLng(locations[i][1], locations[i][2]),
                    map: map,
                    icon: locations[i][4]
                });
                var content;
                
                google.maps.event.addListener(marker, 'click', (function (marker, i) {
                    return function () {
                        dest = new google.maps.LatLng(locations[i][1], locations[i][2]);
                        content = locations[i][0];
                        if (locations[i][3] != 0)
                        {
                            content += '<p><a class="GeneralButton" target="_self" ng-click="ShowRoute()">View Direction</a></p>';
                        }
                        infowindow.setContent(content);
                        infowindow.open(map, marker);
                    }
                })(marker, i));
            }

        }
        $scope.errorLocation = function (position) {
            alert("error");
        }

        $scope.ShowRoute=function()
        {
            alert('ShowRoute');            
            var request = {
                origin: src,
                destination: dest,
                provideRouteAlternatives:true,
                travelMode: google.maps.TravelMode.DRIVING
            };
            directionsService.route(request, function (result, status) {
                if (status == google.maps.DirectionsStatus.OK) {
                    directionsDisplay.setDirections(result);
                }
            });

        }

    };


    app.controller("PharmacyController", PharmacyController);

}());

