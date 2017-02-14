'use strict';

moduloDirectivas.directive('plistvisiblefieldsspa', function () {
    return {
        restrict: 'E',
        templateUrl: 'js/system/components/plistspa/visiblefields.html'
    };
});

moduloSistema.controller('plistvisiblefieldsspaController', ['$scope', 'serverService', function ($scope, serverService) {
//        $scope.Fields = $scope.$parent.Fields;      
    }]);