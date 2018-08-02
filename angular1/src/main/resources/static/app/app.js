
/**
 * Declaração de módulo 'app' usando modulo ngRoute para criacao de rotas
 */
var app = angular.module('app', ['ngRoute', 'ngResource',  'angular.filter']);


/**
 * Configuração do ngRoute com as rotas > controller > templates
 */
app.config([
    '$routeProvider', function($routeProvider){
        $routeProvider
            .when('/', {
                controller:'DefaultController',
                templateUrl:'templates/default-template.html'
            })
            .when('/minhas/caronas', {
                controller:'MinhasCaronasController',
                templateUrl:'templates/minhas-caronas-template.html'
            })
            .when('/buscar/caronas', {
                controller:'BuscarController',
                templateUrl:'templates/buscar-caronas-template.html'
            })
            .otherwise({redirectTo:'/'});
    }

]);


/**
 * Variavel de escopo global da aplicação
 * @param {rootScope} $rootScope - Escopo que pode ser usada global
 */
app.run([
    '$rootScope', function($rootScope){
        $rootScope.listFruits = ["banana", "maca"];
        console.log($rootScope.listFruits);
        console.log('app.run');
    }
]);


/**
 * Controller padrão da página princinal
 */
app.controller('DefaultController', function(){

})


/**
 * Controller que edita elementos da lista de frutas
 * @param {scopo} $scope - Escopo que pode ser usada no controller criado
 * @param {location} $location - Redireciona as rotas
 * @param {routeParams} $routeParams - Obtem parametros repassados pela URI

 * Adiciona um novo item a lista de frutas
 * @param {scopo} $scope - Escopo que pode ser usada no controller criado
 * @param {} $location - Redireciona as rotas
 * @param {tipo} $routeParams - Obtem parametros repassados pela URI  
 */
app.controller('MinhasCaronasController', ['$scope',
                                            '$location',
                                            '$routeParams',
                                            '$http', function($scope, $location, $routeParams, $http){

    $scope.listaRotas =  Array();
    $scope.car = false;

    $scope.save = function(partida, chegada){
        var rota = {
            chegada: $scope.chegada,
            partida: $scope.chegada
        }


        $scope.listaRotas.push(rota);

    }

    $scope.postData = function(){
        $http.post()
            .then();
    };
}]);


app.factory('AnalisaListaRotasRepeditas', ['$window', function (win) {

}]);


app.controller('BuscarController', ['$scope', '$http',function($scope, $http){
    $scope.listCaronas = Array();
    $scope.getData = function(){
        $http
            .get('/getCarona')
            .then(
                function(respose){
                    $scope.listCaronas = respose.data;
                },
                function(erro){
                    alert('Erro..."');
                    console.log(erro);  
                }
            )      
    }
}])

/**
 * Estudar testes de controller https://docs.angularjs.org/guide/controller
 */
