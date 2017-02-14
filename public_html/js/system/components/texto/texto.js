/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

moduloDirectivas.component('texto', {
    templateUrl: "js/system/components/texto/texto.html",
    controllerAs: 'txt',
    bindings: {
        model: '=',
        name: '<',
        longname: '<',
        pattern: '<',
        length: '<',
        required: '<'

    },
    controller: function () {}

});
