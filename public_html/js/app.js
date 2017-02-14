'use strict';
//-------------
var traveler = angular.module('myApp', [
    'ngRoute',
    'Filters',
    'Services',
    'Directives',
    'systemControllers',
    'usuarioControllers',
    'hotelControllers',
    'reservaControllers',
    'provinciaControllers',
    'hotelControllers',
    'ui.bootstrap',
    'ngSanitize',
    'chart.js'
]);
//-------------
//---html5 mode off; setting up pushState needs server urlrewritting, so quitting...-------
traveler.config(['$locationProvider', function ($locationProvider) {
        $locationProvider.html5Mode({
            //requireBase: false,
            enabled: true
        });
    }]);
//-------------
traveler.config(['$httpProvider', function ($httpProvider) {
        $httpProvider.defaults.withCredentials = true;
    }]);
//-------------
traveler.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/', {templateUrl: 'js/system/home.html', controller: 'HomeController'});
        //------------
        $routeProvider.when('/login', {templateUrl: 'js/system/login.html', controller: 'LoginController'});
        $routeProvider.when('/logout', {templateUrl: 'js/system/logout.html', controller: 'LogoutController'});
        $routeProvider.when('/home', {templateUrl: 'js/system/home.html', controller: 'HomeController'});
        $routeProvider.when('/license', {templateUrl: 'js/system/license.html', controller: 'LicenseController'});
        $routeProvider.when('/passchange', {templateUrl: 'js/system/passchange.html', controller: 'PasschangeController'});
        //------------
        $routeProvider.when('/usuario/view/:id', {templateUrl: 'js/usuario/view.html', controller: 'UsuarioViewController'});
        $routeProvider.when('/usuario/new/:id?', {templateUrl: 'js/usuario/new.html', controller: 'UsuarioNewController'});
        $routeProvider.when('/usuario/edit/:id', {templateUrl: 'js/usuario/edit.html', controller: 'UsuarioEditController'});
        $routeProvider.when('/usuario/remove/:id', {templateUrl: 'js/usuario/remove.html', controller: 'UsuarioRemoveController'});
        $routeProvider.when('/usuario/plist/:page?/:rpp?', {templateUrl: 'js/usuario/plist.html', controller: 'UsuarioPListController'});
        $routeProvider.when('/usuario/selection/:page?/:rpp?', {templateUrl: 'js/usuario/selection.html', controller: 'UsuarioSelectionController'});
        //------------
        $routeProvider.when('/hotel/view/:id', {templateUrl: 'js/hotel/view.html', controller: 'HotelViewController'});
        $routeProvider.when('/hotel/new/:id?', {templateUrl: 'js/hotel/new.html', controller: 'HotelNewController'});
        $routeProvider.when('/hotel/edit/:id', {templateUrl: 'js/hotel/edit.html', controller: 'HotelEditController'});
        $routeProvider.when('/hotel/remove/:id', {templateUrl: 'js/hotel/remove.html', controller: 'HotelRemoveController'});
        $routeProvider.when('/hotel/plist/:page?/:rpp?', {templateUrl: 'js/hotel/plist.html', controller: 'HotelPListController'});
        $routeProvider.when('/hotel/selection/:page?/:rpp?', {templateUrl: 'js/hotel/selection.html', controller: 'HotelSelectionController'});
        //------------
        $routeProvider.when('/reserva/view/:id', {templateUrl: 'js/reserva/view.html', controller: 'ReservaViewController'});
        $routeProvider.when('/reserva/new/:id?', {templateUrl: 'js/reserva/new.html', controller: 'ReservaNewController'});
        $routeProvider.when('/reserva/edit/:id', {templateUrl: 'js/reserva/edit.html', controller: 'ReservaEditController'});
        $routeProvider.when('/reserva/remove/:id', {templateUrl: 'js/reserva/remove.html', controller: 'ReservaRemoveController'});
        $routeProvider.when('/reserva/plist/:page?/:rpp?', {templateUrl: 'js/reserva/plist.html', controller: 'ReservaPListController'});
        $routeProvider.when('/reserva/selection/:page?/:rpp?', {templateUrl: 'js/reserva/selection.html', controller: 'ReservaSelectionController'});
        //------------
        $routeProvider.when('/provincia/view/:id', {templateUrl: 'js/provincia/view.html', controller: 'ProvinciaViewController'});
        $routeProvider.when('/provincia/new/:id?', {templateUrl: 'js/provincia/new.html', controller: 'ProvinciaNewController'});
        $routeProvider.when('/provincia/edit/:id', {templateUrl: 'js/provincia/edit.html', controller: 'ProvinciaEditController'});
        $routeProvider.when('/provincia/remove/:id', {templateUrl: 'js/provincia/remove.html', controller: 'ProvinciaRemoveController'});
        $routeProvider.when('/provincia/plist/:page?/:rpp?', {templateUrl: 'js/provincia/plist.html', controller: 'ProvinciaPListController'});
        $routeProvider.when('/provincia/selection/:page?/:rpp?', {templateUrl: 'js/provincia/selection.html', controller: 'ProvinciaSelectionController'});
        //------------
        $routeProvider.otherwise({redirectTo: '/'});
    }]);
//-------------
traveler.run(function ($rootScope, $location, serverService, sessionService) {
    $rootScope.$on("$routeChangeStart", function (event, next, current) {
        sessionService.setSessionInactive();
        sessionService.setUsername('');
        serverService.getSessionPromise().then(function (response) {
            if (response['status'] == 200) {
                sessionService.setSessionActive();
                sessionService.setUsername(response.data.message.login);
                sessionService.setId(response.data.message.id);
            } else {
                sessionService.setSessionInactive();
                sessionService.setUsername('');
                var nextUrl = next.$$route.originalPath;
                if (nextUrl == '/home' || nextUrl == '/login' || nextUrl == '/license') {

                } else {
                    $location.path("/login");
                }
            }
        }).catch(function (data) {
            sessionService.setSessionInactive();
            sessionService.setUsername('');
            var nextUrl = next.$$route.originalPath;
            if (nextUrl == '/home' || nextUrl == '/login' || nextUrl == '/license') {
            } else {
                $location.path("/login");
            }
        });
    });
});
//-------------
var moduloSistema = angular.module('systemControllers', []);
var moduloUsuario = angular.module('usuarioControllers', []);
var moduloHotel = angular.module('hotelControllers', []);
var moduloProvincia = angular.module('provinciaControllers', []);
var moduloReserva = angular.module('reservaControllers', []);

//-------------
var moduloDirectivas = angular.module('Directives', []);
var moduloServicios = angular.module('Services', []);
var moduloFiltros = angular.module('Filters', []);
