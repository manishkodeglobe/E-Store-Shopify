$(function() {
  // Add to cart using AJAX and open cart drawer
  $('#add-to-cart-button').click(function(e) {
    e.preventDefault();
    var form = $(this).closest('form');
    var formData = form.serialize();
    var addToCartURL = '/cart/add.js';

    // Disable the button to prevent multiple clicks
    $(this).attr('disabled', 'disabled').text('Adding...');

    $.post(addToCartURL, formData, function() {
      // Enable the button
      $('#add-to-cart-button').removeAttr('disabled').text('Add To Cart');

      // Open the cart drawer
      $('.cart-drawer').addClass('open');

      // Update the cart content dynamically
      updateCartContent();
    });
  });

  // Function to update the cart content dynamically
  function updateCartContent() {
    $.get('/cart', function(cartContent) {
      // Update the cart content in the drawer
      $('.cart-drawer').html(cartContent);
    });
  }
});
