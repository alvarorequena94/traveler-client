'use strict';

moduloDirectivas.directive('plistselectionheaderspa', function () {
    return {
        restrict: 'A',
        templateUrl: 'js/system/components/plistspa/tableSelectionHeader.html'
    };
});

moduloSistema.controller('plistSelectionHeaderSpaController', ['$scope', 'serverService', '$rootScope', function ($scope, serverService, $rootScope) {
        $scope.dosortSelection = function (field, mode)
        {
            $scope.uorder = field + ',' + mode;
            $rootScope.$broadcast('orderSelectionEvent', $scope.uorder);
            return false;
        }
    }]);