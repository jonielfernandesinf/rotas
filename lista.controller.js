angular
    .module('app')
    .controller('ListaController', listaController);

listaController.$inject = ['$scope', '$location', 'FrutaService'];

function listaController($scope, $location, frutaService) {
    
    frutaService.listar().then(function(response){
        console.log(response);
        $scope.frutas = response.data;
    });

    console.log('listaController');
    $scope.excluirModal = function(indiceFruta) {
        var confirmouDelecao = confirm("Tem certeza que deseja remover a fruta?");
        if(confirmouDelecao){
            frutaService.deletar($scope.frutas[indiceFruta].id);
            $location.path('/');
        }
    };
}