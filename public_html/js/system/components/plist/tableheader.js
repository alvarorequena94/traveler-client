'use strict';

moduloDirectivas.directive('plistheader', function () {
    return {
        restrict: 'A',
        templateUrl: 'js/system/components/plist/tableheader.html'
    };
});

moduloSistema.controller('plistheaderController', ['$scope', 'serverService', '$location', function ($scope, serverService, $location) {
//        $scope.Fields = $scope.$parent.Fields;
//        $scope.dosort = $scope.$parent.dosort;
        $scope.doorder = function (orderField, ascDesc) {
            $location.url($scope.url + '/' + $scope.numpage + '/' + $scope.rpp).search('filter', $scope.filterParams).search('sfilter', $scope.sfilterParams).search('order', orderField + ',' + ascDesc);
            return false;
        };
    }]);