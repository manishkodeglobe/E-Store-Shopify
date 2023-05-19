$('#add-to-cart-button').click(function() {
    addItemToCart("{{ product.id }}", 1, "1", "Months"); // Replace "{{ product.id }}" with the actual product ID
  });

  function addItemToCart(variant_id, qty, frequency, unit_type) {
    data = {
      "id": variant_id,
      "quantity": qty
    }
    
    jQuery.ajax({
      type: 'POST',
      url: '/assets/add-cart.js',
      data: data,
      dataType: 'json',
      success: function() { 
        document.documentElement.dispatchEvent(new CustomEvent('cart:refresh', {
          bubbles: true  //this code is for prestige theme, is to refresh the cart
       }));
      }
    });
    document.documentElement.dispatchEvent(new CustomEvent('cart:refresh', {
    	bubbles: true    // same code for prestige theme   
 	 }));
  }