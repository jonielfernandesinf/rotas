angular
    .module('app')
    .controller('ExclusaoController', exclusaoController);

function exclusaoController($scope, $location, $routeParams) {

    // Variáveis Públicas
    $scope.titulo = 'Excluir Fruta';
    $scope.fruta = $routeParams.fruta;

    // variáveis privadas
    var _indiceFruta = $scope.frutas.indexOf($scope.fruta);

    /**
     * @description Salva os dados editados da fruta
     */
    $scope.excluir = function() {

        // Atualiza os dados da fruta editada
        if(_indiceFruta){
            $scope.frutas.splice(_indiceFruta, 1);
        }

        // Redireciona para a página principal
        $location.path('/');
    };
}