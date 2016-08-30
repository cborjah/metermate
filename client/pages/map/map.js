angular
  .module('metermate.map', [])
  .controller('mapCtrl', function($scope, $window) {
    var markers = [];
    $scope.defaultLocation = new google.maps.LatLng(34.0210418,-118.4922241);
    $scope.mapType = google.maps.MapTypeId.ROADMAP;
    var locations = [
      {
      meterlat: 34.01633,
      meterlong: -118.49191,
      name: 'broadway1',
      active: 'active',
      area: '3rd street promenade area',
      street_address: '12 broadway'
      },
      {
      meterlat: 34.01103,
      meterlong: -118.49176,
      name: 'broadway2',
      active: 'active',
      area: 'near ROC',
      street_address: '123 broadway'

      },
      {
      meterlat: 34.03303,
      meterlong: -118.48035,
      name: 'broadway3',
      active: 'inactive',
      area: 'downtown',
      street_address: '1234 broadway'

      },
      {
      meterlat: 34.03224,
      meterlong: -118.47578,
      name: 'broadway4',
      active: 'active',
      area: 'the pier',
      street_address: '12345 broadway'

      },
      {
      meterlat: 34.02135,
      meterlong: -118.49573,
      name: 'broadway5',
      active: 'inactive',
      area: 'next to mendocino',
      street_address: '123456 broadway'

      }
    ] //This is our dummy data, btw.


    var mapProp = {
      center: $scope.defaultLocation,
      zoom: 14,
      mapTypeId: $scope.mapType
    };

    $scope.map = new google.maps.Map(document.getElementById("map"), mapProp);
    google.maps.event.addDomListener(window, 'load', mapProp);

    var createMarker = function (eachMeter){
      markers.push(new google.maps.Marker({
        position: new google.maps.LatLng(eachMeter.meterlat, eachMeter.meterlong)
      }));
    };

    for(var i=0; i<locations.length;i++){
      createMarker(locations[i]);
    }

    for(var i=0; i<markers.length;i++){
      markers[i].setMap($scope.map);
    }
  });
