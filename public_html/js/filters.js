'use strict';

moduloFiltros
        .filter('interpolate', ['version', function (version) {
                return function (text) {
                    return String(text).replace(/\%VERSION\%/mg, version);
                }
            }])
        .filter('showForeign', function ($filter)
        {
            return function (input)
            {
                if (input == null) {
                    return "";
                }
                return input[0] + ':' + input[1];
            };
        })

        .filter('clipString', function ($filter)
        {
            return function (input)
            {
                if (input == null) {
                    return "";
                }

                if (input.length > 50) {
                    return input.substr(0, 40).trim() + " ...";

                } else {
                    return input;
                }

            };
        })
        .filter('clipString2', function ($filter)
        {
            return function (input)
            {
                if (input == null) {
                    return "";
                }

                if (input.length > 50) {
                    return input.substr(0, 25).trim() + " ...";

                } else {
                    return input;
                }

            };
        })


        .filter('booleanizate', function ($filter)
        {
            return function (input)
            {
                if (input == null) {
                    return "";
                }

                if (input == true) {
                    return '<i class="fa fa-check"></i>';
                } else {
                    return '<i class="fa fa-times"></i>';
                }

            };
        })
        .filter('breakFilter', function () {
            return function (text) {
                if (typeof text == 'string')
                    return text.replace(/\n/g, '<br />');
            };
        })

        .filter('fechaformateada', function ($filter)
        {
            return function (input) {
                if (input == null || input == "" || input.length != 10)
                {
                    return "";
                }
                var arr = input.split("/"); // formato dd/mm/aaaa
                var mm = parseInt(arr[1]);
                mm -= 1;
                var newDate = new Date(arr[2], mm, arr[0]);
                var formatedDate = $filter('date')(newDate, 'EEEE, dd \'de\' MMMM \'de\' yyyy');
                return formatedDate;
            };
        });
;
