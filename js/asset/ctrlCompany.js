myApp.factory('companiesFactory', function ($http) {
    return {
        getAll: getAll,
        getItem: getItem
    };

    function getAll() {
        return $http.get(myUrl + 'Companies')
    }

    function getItem(id) {
        return $http.get(myUrl + 'Companies/' + id)
    }
});
myApp.controller('companiesCtrl', function ($scope, companiesFactory) {
    activateList();

    function activateList() {
        companiesFactory.getAll().then(function (companies) {
            Materialize.toast('Conexion exitosa', 3000);
            $scope.list = companies.data;
        }).catch(function () {
            Materialize.toast('Error en la conexion', 3000);
        });
    }
});
myApp.controller('companyCtrl', function ($scope, $http, $routeParams, companiesFactory) {
    $scope.insertCompany = function () {
        var data = [{
            "idvendedor": 1,
            "idcliente": 1,
            "idproducto": 1,
            "cantidad": 2,
            "precio": 12.0,
            "fecha": "10/18/2016"
        }, {
            "idvendedor": 1,
            "idcliente": 1,
            "idproducto": 2,
            "cantidad": 4,
            "precio": 23.0,
            "fecha": "10/18/2016"
        }, {
            "idvendedor": 1,
            "idcliente": 1,
            "idproducto": 1,
            "cantidad": 4,
            "precio": 35.0,
            "fecha": "10/18/2016"
        }];



        $http.put("http://localhost:54233/api/ventas/Add", JSON.stringify(data)).then(function () {
            toastr.info('Elemento insertado correctamente');
        });
    }
});