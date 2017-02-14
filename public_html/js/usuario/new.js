/* 
 * Copyright (c) 2015 by Rafael Angel Aznar Aparici (rafaaznar at gmail dot com)
 * 
 * sisane: The stunning micro-library that helps you to develop easily 
 *             AJAX web applications by using Angular.js 1.x & sisane-server
 * sisane is distributed under the MIT License (MIT)
 * Sources at https://github.com/rafaelaznar/
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * 
 */

'use strict';

moduloUsuario.controller('UsuarioNewController', ['$scope', '$routeParams', '$location', 'serverService', 'usuarioService', 'sharedSpaceService', '$filter', '$uibModal',
    function ($scope, $routeParams, $location, serverService, usuarioService, sharedSpaceService, $filter, $uibModal) {
        $scope.fields = usuarioService.getFields();
        $scope.obtitle = usuarioService.getObTitle();
        $scope.icon = usuarioService.getIcon();
        $scope.ob = usuarioService.getTitle();
        $scope.title = "Creando un nuevo " + $scope.obtitle;
        $scope.op = "new";
        $scope.status = null;
        $scope.debugging = serverService.debugging();
        $scope.bean = {};
        //----
        $scope.bean.obj_tipousuario = {"id": 0};
        if ($routeParams.id_tipousuario) {
            serverService.promise_getOne('tipousuario', $routeParams.id_tipousuario).then(function (response) {
                if (response.data.message.id != 0) {
                    $scope.bean.obj_tipousuario = response.data.message;
                    $scope.show_obj_tipousuario = false;
                    $scope.title = "Nuevo usuario del tipo" + $scope.bean.obj_tipousuario.description;
                }
            });
        } else {
            $scope.show_obj_tipousuario = true;
        }
        //----
        $scope.bean.obj_medico = {"id": 0};
        //-----
        $scope.save = function () {
            $scope.bean.creation = $filter('date')($scope.bean.creation, "dd/MM/yyyy");
            $scope.bean.modification = $filter('date')($scope.bean.modification, "dd/MM/yyyy");
            if (!$scope.bean.obj_medico.id > 0) {
                $scope.bean.obj_medico.id = null;
            }
            var jsonToSend = {json: JSON.stringify(serverService.array_identificarArray($scope.bean))};
            serverService.promise_setOne($scope.ob, jsonToSend).then(function (response) {
                if (response.status == 200) {
                    if (response.data.status == 200) {
                        $scope.response = response;
                        $scope.status = "El registro " + $scope.obtitle + " se ha creado con id = " + response.data.message;
                        $scope.bean.id = response.data.message;
                    } else {
                        $scope.status = "Error en la recepción de datos del servidor";
                    }
                } else {
                    $scope.status = "Error en la recepción de datos del servidor";
                }
            }).catch(function (data) {
                $scope.status = "Error en la recepción de datos del servidor";
            });
            ;
        };
        $scope.back = function () {
            window.history.back();
        };
        $scope.close = function () {
            $location.path('/home');
        };
        $scope.plist = function () {
            $location.path('/' + $scope.ob + '/plist');
        };
//        $scope.chooseOne = function (nameForeign, foreignObjectName, contollerName) {
//            var modalInstance = $uibModal.open({
//                templateUrl: 'js/' + foreignObjectName + '/selection.html',
//                controller: contollerName,
//                size: 'lg'
//            }).result.then(function (modalResult) {
//                $scope.bean[nameForeign].id = modalResult;
//            });
//        };
//        $scope.$watch('bean.obj_tipousuario.id', function () {
//            if ($scope.bean) {
//                serverService.promise_getOne('tipousuario', $scope.bean.obj_tipousuario.id).then(function (response) {
//                    var old_id = $scope.bean.obj_tipousuario.id;
//                    $scope.bean.obj_tipousuario = response.data.message;
//                    if (response.data.message.id != 0) {
//                        $scope.outerForm.obj_tipousuario.$setValidity('exists', true);
//                    } else {
//                        $scope.outerForm.obj_tipousuario.$setValidity('exists', false);
//                        $scope.bean.obj_tipousuario.id = old_id;
//                    }
//                });
//            }
//        });

    }]);

