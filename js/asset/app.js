var myApp = angular.module('myApp', ['ngRoute', 'ui.materialize']);
var myUrl = 'http://localhost:54786/api/';
myApp.config(function ($routeProvider) {
    var promiseCompanies = ['companies', function (companies) {
        return companies.getDataFromServer();
        }];
    var promiseFleet = ['fleets', function (fleets) {
        return fleets.getFleets();
        }];
    var promiseVehicle = ['vehicles', function (vehicles) {
        return vehicles.getVehicles();
        }];
    
    $routeProvider.when('/', {
        templateUrl: 'pages/companies.html'
    }).when('/companies/:idcompany/company/:id', {
        templateUrl: 'pages/home.html'
        , resolve: [promiseCompanies, promiseFleet, promiseVehicle]

    });
});