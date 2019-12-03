angular
    .module('app')
    .controller('ExclusaoController', exclusaoController);

exclusaoController.$inject = ['$scope', '$location', '$routeParams', 'FrutaService'];

function exclusaoController($scope, $location, $routeParams, frutaService) {

    // Variáveis Públicas
    $scope.titulo = 'Excluir Fruta';
    $scope.fruta = $routeParams.fruta;

    // variáveis privadas
    var _idFruta = $scope.fruta;

    /**
     * @description Salva os dados editados da fruta
     */
    $scope.excluir = function() {

        // Atualiza os dados da fruta editada
        if(_idFruta){
            console.log('id da fruta', _idFruta);
            frutaService.byId(_idFruta).then(function(response){
                
                var fruta = response.data;
                if(fruta.id){
                    frutaService.deletar(fruta.id);
                }else{
                    console.log('retorno do serviço byId não foi o esperado: ', fruta);
                }
            });
            
        }

        // Redireciona para a página principal
        $location.path('/');
    };
}