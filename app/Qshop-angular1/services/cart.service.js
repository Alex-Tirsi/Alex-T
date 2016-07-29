angular.module("qshop").factory("Cart", function($rootScope) {

    var cart = {};
    cart.products = [];
    cart.add = function(product, quantity) {
        var productFound = false;
        for (var i = 0; i < this.products.length; i++) {
            if (this.products[i].id == product.id) {
                this.products[i].quantity += quantity;
                productFound = true;
                break;
            }

        }
        if (!productFound) {
            console.log("am adaug prod", product)
            product.quantity = quantity;
            cart.products.push(product);
        }
        $rootScope.$broadcast('cart-updated');

    };


    cart.getSubtotal = function() {
        var total = 0;
        for (var i = 0; i < this.products.length; i++) {
            total += this.products[i].price * this.products[i].quantity;
        }
        return total;
    };



    cart.getShipping = function() {
        return 50;

    };

    cart.getProducts = function() {


        return this.products;

    };


    cart.getTotalProducts = function() {
        var totalProd = 0;
        for (var i = 0; i < this.products.length; i++) {
            totalProd += this.products[i].quantity;
        }
        return totalProd;
    };

    cart.getTotal = function() {
        return this.getSubtotal() + this.getShipping();

    };



    return cart;
});
