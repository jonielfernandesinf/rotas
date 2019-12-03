angular
    .module('app')
    .controller('ListaController', listaController);

listaController.$inject = ['$scope', '$location', 'FrutaService'];

function listaController($scope, $location, frutaService) {
    
    frutaService.listar().then(function(response){
        console.log(response);
        response.data.forEach(function(fruta){
            $scope.frutas.push(fruta);
        });
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