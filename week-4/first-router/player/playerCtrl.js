angular.module('myApp')
.controller('playerCtrl', function($scope, playerService, $stateParams){
var playerId = $stateParams.id;

$scope.player = playerService.findPlayerId(playerId):

})
