'use strict';

moduloDirectivas.directive('plistheaderspa', function () {
    return {
        restrict: 'A',
        templateUrl: 'js/system/components/plistspa/tableheader.html'
    };
});

moduloSistema.controller('plistheaderspaController', ['$scope', 'serverService', '$rootScope', function ($scope, serverService, $rootScope) {
        $scope.dosortSelection = function (field, mode)
        {
            $scope.uorder = field + ',' + mode;
            $rootScope.$broadcast('orderSelectionEvent', $scope.uorder);
            return false;
        }
    }]);