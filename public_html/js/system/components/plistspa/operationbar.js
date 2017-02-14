'use strict';

moduloDirectivas.directive('plistoperationbarspa', function () {
    return {
        restrict: 'A',
        templateUrl: 'js/system/components/plistspa/operationbar.html',
//        scope:{
//            Fields:'@' //one way data binding
//        }
    };
});
moduloSistema.controller('plistoperationbarspaController', ['$scope', 'serverService', function ($scope, serverService) {
//        $scope.ob = $scope.$parent.ob;
//        $scope.obj = $scope.$parent.obj;
//            $scope.chooseOne = function (id) {
//            alert(id);
//
//        }
    }]);