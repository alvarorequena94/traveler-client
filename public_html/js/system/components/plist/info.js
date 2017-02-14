'use strict';

moduloDirectivas.directive('plistinfo', function () {
    return {
        restrict: 'E',
        templateUrl: 'js/system/components/plist/info.html',
//        scope:{
//            Fields:'@' //one way data binding
//        }
    };
});
moduloSistema.controller('plistInfoController', ['$scope', 'serverService', '$rootScope', '$location', function ($scope, serverService, $rootScope, $location) {

        $scope.doresetorder = function () {
            $location.url($scope.ob + '/' + $scope.op + '/' + $scope.numpage + '/' + $scope.rpp).search('filter', $scope.filterParams).search('sfilter', $scope.sfilterParams);
            return false;
        };


        $scope.doresetfilter = function () {
            $location.url($scope.ob + '/' + $scope.op + '/' + $scope.numpage + '/' + $scope.rpp).search('sfilter', $scope.sfilterParams).search('order', $routeParams.order);
            return false;
        };


        $scope.resetClientfilter = function () {
            $scope.$parent.searchText = "";
            return false;
        };


    }
]);