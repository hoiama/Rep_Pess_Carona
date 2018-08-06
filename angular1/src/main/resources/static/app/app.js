
/**
 * Declaração de módulo 'app' usando modulo ngRoute para criacao de rotas
 */
var app = angular.module('app', ['ngRoute', 'ngResource', 'angular.filter']);


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
            .when('/testesAngular', {
                controller:'TestesAngularController',
                templateUrl:'templates/testes/testes-angular-controller.html',
            })
            .when('/templateUrlReplace', {
                templateUrl:'templates/testes/fragmentoHtml.html',
                replace:true
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
    $scope.save = function(partida, chegada){
        var rota = {
            chegada: $scope.chegada,
            partida: $scope.chegada
        }
        $scope.listaRotas.push(rota);
    }

    $scope.postData = function(){
        $http
            .post()
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
 * TESTES ANGULAR1
 */

app.controller("TestesAngularController", ['$scope', function($scope){
    $scope.colors = ["White", "Black", "Blue", "Red", "Silver"];
    $scope.colors2 = ["Branco", "Preto", "Azul", "Vermelho", "Cinza"];
    $scope.mostraEsconde = ["ng-hide", "ng-if", "ng-show"];
    $scope.status= ["Ativado", "Desativado"];
    $scope.statusSelected ="";
    $scope.statusSelectedngHide="";
    $scope.statusSelectedngShow ="";
    $scope.statusSelectedngIf ="";
    $scope.ngModel = "";
    $scope.mostraEscondeSelected = "";
    $scope.colorSelected = "";
    $scope.data = "22/02/2018";
    $scope.PROpriedade = "testes de propriedade";

    $scope.carros =
        [
            {vidro: 2, portas: 5,mala: 8},
            {vidro: 1, portas: 4,mala: 7},
            {vidro: 3, portas: 6,mala: 9},
        ]


}]);


app.directive("my-template", function(){
    return {
        template:
            "<div class='alert'>" +
                "<span class='alert-topic'>" +
                    "Something went wrong!" +
                "</span>" +
                "<span class='alert-description'>" +
                    "You must inform the plate and the color of the car!" +
                "</span>" +
            "</div>"
    };
});


app.directive("my-templateUrl", function(){
    return {
        templateUrl: "templates/fragmentoHtml.html"
    };
});


app.directive("my-templateUrlReplace", function(){
    return {
        restrict: 'E',
        templateUrl: "templates/fragmentoHtml.html",
        replace: true
    };
});


/**
 * Estudar:
 * testes de controller https://docs.angularjs.org/guide/controller
 * Layouts : https://material.angularjs.org/1.1.5/layout/introduction
 */
