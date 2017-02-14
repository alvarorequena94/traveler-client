moduloDirectivas.component('actions', {
    templateUrl: "js/system/components/actions/actions.html",
    controllerAs: 'act',
    controller: actions,
    bindings:
            {
                id: '<',
                name: '<'
            }

});

function actions(serverService, $uibModal)
{
    var self = this;

    self.appurl = serverService.getCAppUrl();

    self.pop = function (id, foreignObjectName, foreignViewName, op) {

        self.viewpop = serverService.capitalizeWord(self.name);
        if (op === 1)
        {
            self.viewpop += 'ViewpopController';
        } else if (op === 2)
        {
            self.viewpop += 'RemovepopController';
        }

        var modalInstance = $uibModal.open({
            templateUrl: 'js/' + foreignObjectName + '/' + foreignViewName + '.html',
            controller: self.viewpop,
            size: 'lg',
            resolve: {
                id: function () {
                    return id;
                }
            }
        }).result.then(function () {

        });
    };

}