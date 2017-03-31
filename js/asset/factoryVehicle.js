  myApp.factory('vehicles', ['$http', function ($http) {
      var vehicles = {};
      vehicles.list = [];

      vehicles.getVehicles = function getVehicles() {
          if (!_.isEmpty(vehicles.list)) {
              return;
          } else {
              return $http.get(myUrl + 'vehicles').then(requestSuccessful, requestUnsuccessful);
          }

          function requestSuccessful(response) {
              if (_.isEmpty(response.data)) {
                  throw new Error();
              } else {
                  vehicles.list = response.data;
              }

          }

          function requestUnsuccessful() {
              throw new Error();
          }
      };
      vehicles.getVehicleFleet = function getVehicleFleet(id) {
          return _.filter(vehicles.list, {
              'id_fleet': id
          });
      };
      return vehicles;
  }]);