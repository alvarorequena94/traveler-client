'use strict';
moduloSistema.controller('PasschangeController', ['$scope', '$routeParams', '$location', 'serverService', 'sessionService',
    function ($scope, $routeParams, $location, serverService, sessionService) {
        $scope.title = "Formulario de cambio de password";
        $scope.icon = "fa-key";
        $scope.debugging = serverService.debugging();
        $scope.status = null;
        $scope.old = '';
        $scope.new = '';
        $scope.passchange = function () {
            serverService.getPasswordChangePromise($scope.old, $scope.new).then(function (response) {
                $scope.response = response;
                if (response.status == 200) {
                    if (response.data.status == 200) {
                        $scope.status = "El password se ha cambiado";
                        $scope.result = response.data.message;

                    } else {
                        $scope.status = "No se ha cambiado el password";
                    }
                } else {
                    $scope.status = "No se ha cambiado el password";
                }
            }).catch(function (data) {
                $scope.status = "No se ha cambiado el password";
            });
        }
    }]);


