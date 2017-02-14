'use strict';
moduloDirectivas.component('cforeign', {
    restrict: 'E',
    bindings: {
        obf: '<',
        opf: '<',
        idf: '<',
        descf: '<'
    },
    templateUrl: 'js/system/components/plist/cforeign.html',
    controllerAs: 'cf',
    controller: ['serverService', '$location', function (serverService, $location) {
            var self = this;

        }]
});


