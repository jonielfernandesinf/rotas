angular
    .module('app', ['ngRoute', 'frutaServiceApp'])
    .config(['$routeProvider', '$locationProvider', definirRotas])
    .run(['$rootScope', inicializarVariaveisGlobais]);

function definirRotas($routeProvider, $locationProvider) {

    $locationProvider.hashPrefix('');

    $routeProvider.

    when('/', {
        controller: 'ListaController',
        templateUrl: 'lista.tpl.html'
    }).

    when('/edicao/:fruta', {
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

/**
 * @description Inicializa variáveis globais no rootScope
 * @param {*} $rootScope Injeção angular
 */
function inicializarVariaveisGlobais($rootScope) {

    $rootScope.frutas = [];
    console.log('rotasApp.run');
}