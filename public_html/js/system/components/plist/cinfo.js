'use strict';
moduloDirectivas.component('cplistinfo', {
    restrict: 'E',
    bindings: {
        url: '<',
        numpage: '<',
        rpp: '<',
        registers: '<',
        orderparams: '<',
        filterparams: '<',
        sfilterparams: '<',
        searchtext: '='
    },
    templateUrl: 'js/system/components/plist/cinfo.html',
    controllerAs: 'pli',
    controller: ['$location', function ($location) {
            var self = this;
            self.doresetorder = function () {
                $location.url(self.url + '/' + self.numpage + '/' + self.rpp).search('filter', self.filterparams).search('sfilter', self.sfilterparams);
                return false;
            };


            self.doresetfilter = function () {
                $location.url(self.url + '/' + self.numpage + '/' + self.rpp).search('sfilter', self.sfilterparams).search('order', self.orderparams);
                return false;
            };


            self.resetClientfilter = function () {
                self.searchText = "";
                return false;
            };
        }]
});
