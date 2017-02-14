'use strict';
moduloUsuario.factory('usuarioService', ['serverService', function (serverService) {
        return {
            getFields: function () {
                return [
                    {name: "id", shortname: "ID", longname: "Identificador", visible: true, type: "id"},
                    {name: "dni", shortname: "DNI", longname: "DNI", visible: true, type: "text"},
                    {name: "nombre", shortname: "Nombre", longname: "Nombre", visible: true, type: "text", required: true, maxlength: 255, pattern: serverService.getRegExpr("nombre"), help: serverService.getRegExpl("nombre")},
                    {name: "primerapellido", shortname: "Apellido 1", longname: "Primer Apellido", visible: true, type: "text", required: true, maxlength: 255, pattern: serverService.getRegExpr("nombre"), help: serverService.getRegExpl("nombre")},
                    {name: "segundoapellido", shortname: "Apellido 2", longname: "Segundo Apellido", visible: true, type: "text", required: true, maxlength: 255, pattern: serverService.getRegExpr("nombre"), help: serverService.getRegExpl("nombre")},
                    {name: "login", shortname: "Login", longname: "Login", visible: true, type: "text", required: true, maxlength: 255, pattern: ""},
                    {name: "direccion", shortname: "Dirección", longname: "Dirección", visible: false, type: "text", required: false, maxlength: 255, pattern: ""},
                    {name: "ciudad", shortname: "Ciudad", longname: "Ciudad", visible: false, type: "text", required: false, maxlength: 255, pattern: serverService.getRegExpr("nombre"), help: serverService.getRegExpl("nombre")},
                    {name: "codigopostal", shortname: "Cód.Postal", longname: "Cód.Postal", visible: false, type: "text", required: false, maxlength: 255, pattern: serverService.getRegExpr("codigopostal"), help: serverService.getRegExpl("codigopostal")},
                    {name: "provincia", shortname: "Provincia", longname: "Provincia", visible: false, type: "text", required: false, maxlength: 255, pattern: serverService.getRegExpr("nombre"), help: serverService.getRegExpl("nombre")},
                    {name: "pais", shortname: "País", longname: "País", visible: false, type: "text", required: false, maxlength: 255, pattern: serverService.getRegExpr("nombre"), help: serverService.getRegExpl("nombre")},
                    {name: "email", shortname: "Email", longname: "Email", visible: false, type: "text", required: true, maxlength: 255, pattern: serverService.getRegExpr("email"), help: serverService.getRegExpl("email")},
                    {name: "telefono", shortname: "Teléfono", longname: "Teléfono", visible: false, type: "text", required: false, maxlength: 255, pattern: serverService.getRegExpr("telefono"), help: serverService.getRegExpl("telefono")},
                    {name: "obj_tipousuario", shortname: "Tipo", longname: "Tipo de usuario", visible: true, type: "foreign", reference: "tipousuario", descforeign: "descripcion"},
                    {name: "obj_medico", shortname: "Médico", longname: "Médico asociado", visible: true, type: "foreign", reference: "medico", descforeign: "id"}
                ];
            },
            getIcon: function () {
                return "fa-user";
            },
            getObTitle: function () {
                return "usuario";
            },
            getTitle: function () {
                return "usuario";
            }
        };
    }]);


