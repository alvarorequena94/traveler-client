'use strict';
moduloDocumento.factory('documentoService', ['serverService', function (serverService) {
        return {
            getFields: function () {
                return [
                    {name: "id", shortname: "ID", longname: "Identificador", visible: true, type: "id"},
                    {name: "descripcion", shortname: "Descripción", longname: "Descripción", visible: true, type: "text", required: true, maxlength: 255, pattern: ""},
                    {name: "fecha", shortname: "fecha", longname: "Fecha", visible: true, type: "date", required: true, pattern: ""},
                    {name: "obj_tipodocumento", shortname: "Tipo Documento", longname: "Tipo Documento", visible: true, type: "specific", required: true, maxlength: 255, pattern: "", reference: "tipodocumento"}
                ];
            },
            getIcon: function () {
                return "fa-money";
            },
            getObTitle: function () {
                return "documento";
            },
            getTitle: function () {
                return "documento";
            }
        };
    }]);


