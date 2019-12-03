angular
    .module('app')
    .controller('NovoController', novoController);

novoController.$inject = ['$scope', '$location', 'FrutaService'];

function novoController($scope, $location, frutaService) {

    $scope.titulo = 'Nova Fruta';
    $scope.fruta = {};

    /**
     * @description Inclui uma nova fruta no array de frutas
     */
    $scope.salvar = function () {
        $scope.mensagem = 'carregando...';
        frutaService.incluir($scope.fruta.nome)
            .then(function () {
                $scope.mensagem = '';
                // Redireciona para a página principal
                $location.path('/');
            });
    };
}