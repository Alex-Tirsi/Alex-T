angular.module("qshop").controller("ProductController",function($scope,$stateParams, ProductRepository, Cart){
  $scope.tabPanel = "description";
  $scope.quantity = 1;

  $scope.scade = function(){
    if ($scope.quantity > 1)
  $scope.quantity --
  }
  $scope.creste = function(){
  $scope.quantity ++
  }

  $scope.showTab = function(tabName){
    $scope.tabPanel = tabName;

  }





$scope.loadProduct = function() {
    console.log("Load product called..", $stateParams);
    ProductRepository.getProductList().then(function(result) {
            var productID = $stateParams.id;

            for (var i = 0; i < result.data.length; i++) {
                if (productID == result.data[i].id) {
                    $scope.product = result.data[i];
                    break;
                }
            }
        },
        function(err) {
            console.error(err);

        });
}

$scope.addToCart = function() {

  Cart.add($scope.product,$scope.quantity);

};


});
