document.addEventListener('DOMContentLoaded',function(){
    var products = getProductList();
    //es6 template syntax
    var templateProduct = `<h2>__NAME__</h2>
    <div class="review-number">
      <span class="review-count">__REVIEWNUMBER__ reviews</span>
      </div>
        <h3>$ __PRICE__</h3>
        <p>__DESCRIPTION__</p>
    
    `;
    //get a reference to our product list container
    var productListNode =  document.querySelector('#product-summary');
      var  i = getParameterByName('id');
      var div = document.createElement('div');
      div.className = 'col-sm-12   ';
      var productHTML = templateProduct.replace('__NAME__', products[i].name)
                                       .replace('__REVIEWNUMBER__', products[i].reviews.length)
                                       .replace('__PICTURE__', products[i].picture)
                                       .replace('__PRICE__', products[i].price)
                                       .replace('__DESCRIPTION__', products[i].description)
                                      ;

      div.innerHTML = productHTML;
      productListNode.appendChild(div);

})
