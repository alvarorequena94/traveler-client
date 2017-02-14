'use strict';

moduloDirectivas.directive('plistrppspa', function () {
    return {
        restrict: 'E',
        templateUrl: 'js/system/components/plistspa/rpp.html'
    };
});
moduloSistema.controller('plistrppspaController', ['$scope', 'serverService', '$rootScope', function ($scope, serverService, $rootScope) {
        $scope.getUrlFromRpp = function (rpp) {
            return "" + serverService.getUrlFromParams($scope.$parent.ob, $scope.$parent.op, $scope.$parent.numpage, rpp, $scope.$parent.ufilter, $scope.$parent.uorder);
        }
        $scope.showRPPSelection = function (rpp)
        {
            $rootScope.$broadcast('rppSelectionEvent', rpp);
        }
    }]);