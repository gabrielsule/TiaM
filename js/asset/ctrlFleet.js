myApp.controller('fleetsCtrl', function ($scope, fleets) {
    $scope.list = fleets.list;
});
myApp.controller('fleetCtrl', function ($scope, $routeParams, $rootScope, fleets, parameters) {
    $scope.fleet = fleets.getFleet(parseInt($routeParams.id));

    $scope.clickevent = function (id) {
        $scope.$broadcast('transfer', {
            message: id
        });
        
                
    }
});

myApp.controller('fleetVehiculeCtrl', function ($scope, vehicles, parameters) {
    $scope.$on('transfer', function (event, data) {
        $scope.vehicles = vehicles.getVehicleFleet(data.message);
        //$scope.broadcastmessage = data.message;
    });

});