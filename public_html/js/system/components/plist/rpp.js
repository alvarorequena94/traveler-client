'use strict';

moduloDirectivas.directive('plistrpp', function () {
    return {
        restrict: 'E',
        templateUrl: 'js/system/components/plist/rpp.html'
    };
});
moduloSistema.controller('plistrppController', ['$scope', 'serverService', '$location', function ($scope, serverService, $location) {
//        $scope.getUrlFromRpp = function (rpp) {
//            
//            
//            return "" + serverService.getUrlFromParams($scope.$parent.ob, $scope.$parent.op, $scope.$parent.numpage, rpp, $scope.$parent.ufilter, $scope.$parent.uorder);
//        }
        $scope.repaginate = function (rpp) {
            $location.path($scope.ob + '/' + $scope.op + '/' + $scope.numpage + '/' + rpp).search('filter', $scope.filterParams).search('sfilter', $scope.sfilterParams).search('order', $scope.orderParams);
            return false;
        };
    }]);