//qshop.factory("ProductRepository", function($http) {
angular.module("qshop").factory("ProductRepository", function($http){
    var repo = {};

    repo.getProductList = function() {
        return $http.get('../data/products.json');
    };
    return repo;
});
