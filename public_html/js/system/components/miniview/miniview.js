'use strict';
moduloDirectivas.component('miniview', {
    restrict: 'E',
    bindings: {
        id: '<',
        nombre: '<'
    },
    templateUrl: "js/system/components/miniview/miniview.html",
    controllerAs: 'ct',
    controller: ['serverService', 'metaService', function (serverService, metaService) {
            var self = this;
            this.$onInit = function () {
                self.meta = metaService.getMeta();
                self.fields = self.meta[self.nombre];
                serverService.promise_getOne(self.nombre, self.id).then(function (response) {
                    if (response.status == 200) {
                        if (response.data.status == 200) {
                            self.status = null;
                            self.bean = response.data.message;
                        } else {
                            self.status = "Error en la recepción de datos del servidor";
                        }
                    } else {
                        self.status = "Error en la recepción de datos del servidor";
                    }
                }).catch(function (data) {
                    self.status = "Error en la recepción de datos del servidor";
                });
            }
        }]
});

