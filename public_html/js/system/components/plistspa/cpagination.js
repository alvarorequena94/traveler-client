'use strict';
moduloDirectivas.component('cplistpaginationspa', {
    restrict: 'E',
    bindings: {
        ob: '<',
        op: '<',
        numpage: '<',
        rpp: '<',
        pages: '<',
        neighbourhood: '<',
        pageSelectionEvent: '&'
    },
    templateUrl: 'js/system/components/plistspa/cpagination.html',
    controllerAs: 'pf',
    controller: ['serverService', function (serverService) {
            var self = this;
            self.gotopage = function (numpage) {
                self.pageSelectionEvent({'selectedPageNumber': numpage})
                return false;
            };
            self.getRangeArray = serverService.getRangeArray;
            self.evaluateMin = serverService.evaluateMin;
            self.evaluateMax = serverService.evaluateMax;
        }]
});
