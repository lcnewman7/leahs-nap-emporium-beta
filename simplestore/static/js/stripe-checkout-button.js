<!-- Load Stripe.js on your website. -->
<script src="https://js.stripe.com/v3"></script>

<!-- Create a button that your customers click to complete their purchase. Customize the styling to suit your branding. -->
<button
style="background-color:#6772E5;color:#FFF;padding:8px 12px;border:0;border-radius:4px;font-size:1em"
id="checkout-button-sku_G4peH1gWT5Gfy9"
role="link"
>
Pay Now
</button>

<div id="error-message"></div>

<script>
(function() {
 var stripe = Stripe('pk_test_PsJGYuXFKEnnhvlEWaDbprTv00TW553xbp');
 
 var checkoutButton = document.getElementById('checkout-button-sku_G4peH1gWT5Gfy9');
 checkoutButton.addEventListener('click', function () {
                                 // When the customer clicks on the button, redirect
                                 // them to Checkout.
                                 stripe.redirectToCheckout({
                                 items: [{sku: 'sku_G4peH1gWT5Gfy9', quantity: 1}],
                                                           
                                                           // Do not rely on the redirect to the successUrl for fulfilling
                                                           // purchases, customers may not always reach the success_url after
                                                           // a successful payment.
                                                           // Instead use one of the strategies described in
                                                           // https://stripe.com/docs/payments/checkout/fulfillment
                                                           successUrl: 'http://127.0.0.1:8000/confirmedpayment/',
                                                           cancelUrl: 'https://your-website.com/canceled',
                                                           })
                                 .then(function (result) {
                                       if (result.error) {
                                       // If `redirectToCheckout` fails due to a browser or network
                                       // error, display the localized error message to your customer.
                                       var displayError = document.getElementById('error-message');
                                       displayError.textContent = result.error.message;
                                       }
                                       });
                                 });
 })();
</script>