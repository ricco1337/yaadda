angular.module('myApp')
.controller('rosterCtrl', function($scope, playerService){
  $scope.players = playerService.getPlayers()
  console.log($scope.players);
})
