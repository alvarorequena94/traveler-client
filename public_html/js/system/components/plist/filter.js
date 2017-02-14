'use strict';

moduloDirectivas.directive('plistfilter', function () {
    return {
        restrict: 'E',
        templateUrl: 'js/system/components/plist/filter.html',
//        scope:{
//            Fields:'@' //one way data binding
//        }
    };
});
moduloSistema.controller('plistFilterController', ['$scope', 'serverService', '$rootScope', '$location', function ($scope, serverService, $rootScope, $location) {

//        console.log("plistsub filter" + $scope.ufilter);
//        console.log("plistsub order" + $scope.uorder);
        //$scope.Fields = $scope.$parent.Fields;

//        $scope.dofilter = function ()
//        {
//            $scope.ufilter = [];
//            $scope.ufilter.push($scope.filter);
//            $scope.ufilter.push($scope.filteroperator);
//            $scope.ufilter.push($scope.filtervalue);
//            $rootScope.$broadcast('doFilter', $scope.ufilter);
//        }


        $scope.dofilter = function ()
        {
            if ($scope.filter && $scope.filteroperator && $scope.filtervalue) {
                if ($scope.filterParams) {
                    $scope.filterExpression = $scope.filterParams + '+and,' + $scope.filter + ',' + $scope.filteroperator + ',' + $scope.filtervalue;
                } else {
                    $scope.filterExpression = 'and,' + $scope.filter + ',' + $scope.filteroperator + ',' + $scope.filtervalue;
                }
                $location.path($scope.ob + '/' + $scope.op + '/' + $scope.numpage + '/' + $scope.rpp).search('filter', $scope.filterExpression).search('sfilter', $routeParams.sfilter).search('order', $routeParams.order);
            }
            return false;

        }


    }
]);