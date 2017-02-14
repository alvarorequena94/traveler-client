'use strict';
moduloDirectivas.component('cplistpagination', {
    restrict: 'E',
    bindings: {
        url: '<',
        numpage: '<',
        rpp: '<',
        pages: '<',
        neighbourhood: '<',
        filterparams: '<',
        orderparams: '<',
        sfilterparams: '<'
    },
    templateUrl: 'js/system/components/plist/cpagination.html',
    controllerAs: 'pf',
    controller: ['serverService', '$location', function (serverService, $location) {
            var self = this;
            self.gotopage = function (numpage) {
                self.numpage = numpage;
                $location.path(self.url + '/' + self.numpage + '/' + self.rpp).search('filter', self.filterparams).search('sfilter', self.sfilterparams).search('order', self.orderparams);
                return false;
            };
            self.getRangeArray = serverService.getRangeArray;
            self.evaluateMin = serverService.evaluateMin;
            self.evaluateMax = serverService.evaluateMax;
        }]
});
