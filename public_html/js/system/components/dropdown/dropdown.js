moduloDirectivas.component('dropdown', {
    templateUrl: "js/system/components/dropdown/dropdown.html",
    controllerAs: 'dd',
    bindings: {
        ide: '=',
        tablereference: '<',
        field: '<'
    },
    controller: dropdown
});

function dropdown(serverService) {
    var self = this;
    this.$onInit = function () {
        serverService.promise_getAll(self.tablereference).then(function (response) {
            self.selections = response.data.message;
        }).catch(function (data) {
            console.log(data);
        });
    };
    self.$doCheck = function () {
        console.log("change dropdown");
    }
}

