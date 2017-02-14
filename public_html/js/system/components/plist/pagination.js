'use strict';

moduloDirectivas.directive('plistpagination', function () {
    return {
        restrict: 'E',
        templateUrl: 'js/system/components/plist/pagination.html'
    };
});
moduloSistema.controller('plistPaginationController', ['$scope', 'serverService', '$location', function ($scope, serverService, $location) {
//        $scope.getUrlFromPageNumber = function (pagenumber) {
//            return "" + serverService.getUrlFromParams($scope.ob, $scope.op, pagenumber, $scope.rpp, $scope.ufilter, $scope.uorder);
//        }
//        $scope.getUrlFromRpp = function (rpp) {
//            return "" + serverService.getUrlFromParams($scope.ob, $scope.op, $scope.numpage, rpp, $scope.ufilter, $scope.uorder);
//        }




        $scope.gotopage = function (numpage) {
            $scope.numpage = numpage;
            $location.path($scope.ob + '/' + $scope.op + '/' + $scope.numpage + '/' + $scope.rpp).search('filter', $scope.filterParams).search('sfilter', $scope.sfilterParams).search('order', $scope.orderParams);
            return false;
        };
        $scope.getRangeArray = serverService.getRangeArray;
        $scope.evaluateMin = serverService.evaluateMin;
        $scope.evaluateMax = serverService.evaluateMax;




    }]);