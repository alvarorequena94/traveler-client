'use strict';
moduloSistema.controller('LogoutController', ['$scope', '$routeParams', '$location', 'serverService', 'sessionService',
    function ($scope, $routeParams, $location, serverService, sessionService) {
        $scope.title = "Bye";
        $scope.icon = "fa-sign-out";
        serverService.getLogoutPromise().then(function (response) {
            if (response.status == 200) {
                if (response.data.status == 200) {
                    sessionService.setSessionInactive();
                    sessionService.setUsername('');
                    $scope.status = "Has salido del sistema";
                    //$location.path('home');
                } else {
                    $scope.status = "Error en la recepción de datos del servidor";
                }
            } else {
                $scope.status = "Error en la recepción de datos del servidor";
            }
        }).catch(function (data) {
            $scope.status = "Error en la recepción de datos del servidor";
        });
    }]);


