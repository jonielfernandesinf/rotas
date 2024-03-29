angular
    .module('app')
    .controller('EdicaoController', edicaoController);

edicaoController.$inject = ['$scope', '$location', '$routeParams', 'FrutaService'];

function edicaoController($scope, $location, $routeParams, frutaService) {

    // Variáveis Públicas
    $scope.titulo = 'Editar Fruta';    
    $scope.fruta = {};
    $scope.fruta.id = $routeParams.id;
    $scope.fruta.nome = $routeParams.nome;

    /**
     * @description Salva os dados editados da fruta
     */
    $scope.salvar = function() {

        // Atualiza os dados da fruta editada
        frutaService.atualizar($scope.fruta);

        // Redireciona para a página principal
        $location.path('/');
    };
}