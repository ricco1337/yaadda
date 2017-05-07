angular.module('miniRouting').controller(function($scope, $stateParams, productService){
  if(productService.id === 'Shoes'){
    $scope.productData = productService.shoeData;
  }
  else if($stateParams.id === "Socks"){
    $scope.productData = productService.sockData;
  }
});
