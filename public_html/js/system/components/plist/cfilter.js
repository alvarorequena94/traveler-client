'use strict';
moduloDirectivas.component('cplistfilter', {
    restrict: 'E',
    bindings: {
        url: '<',
        fields: '<',
        rpp: '<',
        numpage: '<',
        order: '<',
        filter: '<',
        sfilter: '<'
    },
    templateUrl: 'js/system/components/plist/cfilter.html',
    controllerAs: 'cf',
    controller: ['serverService', '$location', function (serverService, $location) {
            var self = this;
            self.dofilter = function ()
            {
                if (self.filter && self.filteroperator && self.filtervalue) {
                    if (self.filterParams) {
                        self.filterExpression = self.filterParams + '+and,' + self.filter + ',' + self.filteroperator + ',' + self.filtervalue;
                    } else {
                        self.filterExpression = 'and,' + self.filter + ',' + self.filteroperator + ',' + self.filtervalue;
                    }
                    $location.path(self.url + '/' + self.numpage + '/' + self.rpp).search('filter', self.filterExpression).search('sfilter', self.sfilter).search('order', self.order);
                }
                return false;
            }
        }]
});


