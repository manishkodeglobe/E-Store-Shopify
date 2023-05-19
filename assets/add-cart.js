$('#add-to-cart-button').click(function() {
  addItemToCart("{{ product.variants.first.id }}", 1); // Replace "{{ product.variants.first.id }}" with the actual variant ID
});

 
function addItemToCart(variant_id, qty) {
  var data = {
    "id": variant_id,
    "quantity": qty
  };

  $.ajax({
    type: 'POST',
    url: '/assets/add-cart.js',
    data: data,
    dataType: 'json',
    success: function() {
      document.dispatchEvent(new CustomEvent('cart:refresh', {
        bubbles: true
      }));
    }
  });
}

