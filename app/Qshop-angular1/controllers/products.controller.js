angular.module("qshop").controller("ProductsController", function($scope, ProductRepository, Cart) {


    $scope.products = ProductRepository.getProductList().then(function(result) {
        console.log('Products', result.data)
        $scope.products = result.data

    }, function(err) {
        console.error(err);

    });



    $scope.addToCart = function(product) {

        //product.quantity = 1;
        Cart.add(product,1);





    }

});
