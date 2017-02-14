moduloDirectivas.component('bfKey', {
    templateUrl: "js/system/components/bfkey/bfkey.html",
    controllerAs: 'bfk',
    controller: bfkey,
    bindings:
            {
                bean: '=',
                name: '<',
                reference: '<',
                fname: '<'
            }

});

function bfkey(serverService, $uibModal, metaService)
{
    var self = this;

    self.icon = function (iname) {
        return  metaService.getMeta()[iname].icon;
    };

    self.chooseOne = function () {
        var modalInstance = $uibModal.open({
            templateUrl: 'js/' + self.reference + '/selection.html',
            controller: serverService.capitalizeWord(self.reference) + "SelectionController",
            size: 'lg'
        }).result.then(function (modalResult)
        {
            self.bean["id_" + self.reference] = modalResult;
            var jsonToSend = {json: JSON.stringify(serverService.array_identificarArray(self.bean))};
            serverService.promise_setOne(self.name, jsonToSend);
            location.reload();
        });
    };

}