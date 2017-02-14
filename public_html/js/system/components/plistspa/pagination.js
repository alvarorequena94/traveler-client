'use strict';

moduloDirectivas.directive('plistpaginationspa', function () {
    return {
        restrict: 'E',
        templateUrl: 'js/system/components/plistspa/pagination.html'
    };
});
moduloSistema.controller('plistPaginationspaController', ['$scope', 'serverService', '$rootScope', function ($scope, serverService, $rootScope) {
        $scope.getRangeArray = serverService.getRangeArray;
        $scope.evaluateMin = serverService.evaluateMin;
        $scope.evaluateMax = serverService.evaluateMax;
        $scope.gotopage = function (numpage)
        {
            $rootScope.$broadcast('pageSelectionEvent', numpage);
            return false;
        }

    }]);