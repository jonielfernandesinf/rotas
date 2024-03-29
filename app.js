angular
    .module('app', ['ngRoute', 'frutaServiceApp'])
    .config(['$routeProvider', '$locationProvider', definirRotas]);

function definirRotas($routeProvider, $locationProvider) {

    $locationProvider.hashPrefix('');

    $routeProvider.

    when('/', {
        controller: 'ListaController',
        templateUrl: 'lista.tpl.html'
    }).

    when('/edicao/:id/:nome', {
        controller: 'EdicaoController',
        templateUrl: 'formulario.tpl.html'
    }).

    when('/novo', {
        controller: 'NovoController',
        templateUrl: 'formulario.tpl.html'
    }).

    when('/exclusao/:fruta', {
        controller: 'ExclusaoController',
        templateUrl: 'formulario-exclusao.tpl.html'
    }).

    otherwise({ redirectTo: '/' });

}