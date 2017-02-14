moduloDirectivas.component('radiogroup', {
    templateUrl: "js/system/components/radiogroup/radiogroup.html",
    controllerAs: 'rg',
    bindings: {
        required: '<',
        ide: '=',
        tablereference: '<',
        field: '<'
    },
    controller: radiogroup
});

function radiogroup(serverService) {
    var self = this;

    this.$onInit = function () {
        serverService.promise_getAll(self.tablereference).then(function (response) {
            self.radiobuttons = response.data.message;
        }).catch(function (data) {
            console.log(data);
        });
    };

    self.$doCheck = function () {
        console.log("change radiogroup");
    }

//    self.$doCheck = function () {
//        console.log("change radiogroup");
//        if (self.bean) {
//            if (self.selectedbutton != self.bean.id) {
//                serverService.promise_getOne(self.tablereference, self.selectedbutton).then(function (response) {
//                    self.bean = response.data.message;
//                }).catch(function (data) {
//                });
//            }
//        }
//    }
}

