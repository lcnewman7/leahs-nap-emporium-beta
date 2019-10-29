# Application Overview
Leah’s Nap Emporium is the premiere application for purchasing the idea of naps. This application was developed as a take home project for Stripe. It was built using Django and leverages the Stripe Checkout API.  

## Application Details
Leah’s Nap Emporium allows a user to select and purchase a nap type in one step. Each nap type is tied directly to a product in the Stripe Dashboard. Selecting the associated button next to the nap type launches a one-time payment checkout through Stripe. Upon payment the user is taken directly to a confirmation page with the Stripe charge ID. 
The Nap Emporium uses an ItemForSale class, which holds the product information, and Stripe assigned Product SKU to be used in the Checkout process. The application uses two views, the homepage and charge page. The home page serves as the storefront and product list and is where the user selects the nap type. The charge page is called in the Checkout API once the user has made a successful payment (*success_url*). 

## Language Choice
I initially chose to develop in Django because of the quality of documentation, user support, and e-commerce templates. The majority of my previous development was purely in the esri environment using their tools and adding in smaller python and js functions as needed, so this was my first crack at a non-spatial (and functioning) web application. 
A first iteration involved spinning up a full template with the django-shop framework and their integrated Stripe functionality. That first iteration was scrapped after I recognized I was deep in the weeds and designed for processes that were far outside of the scope of the application requirements. 

For a second iteration, I used the Stripe one-time-checkout-example on Github. This didn’t exactly meet my needs, as I wanted a standalone store that then used the Stripe API. Understanding that code proved useful in the final product. 
My final application leveraged the Checkout snippet generator to tie directly to the product. In further development I’d want to make the sku population in that code dynamic based on the ItemForSale object.

## Some Quick Notes on Functionality:
Realistically, Leah’s Nap Emporium leaves much to be desired in terms of functionality. There is a lot of hard coding where there should be dynamic functions. For example, the Stripe checkout button is hardcoded for a single product SKU. While homepage can dynamically display elements from the ItemForSale class in a table, the “Pay Now” button will always take you to Checkout for the same product. Given unlimited time (and probably a nap) I feel confident I’d be able to figure out how to remedy a lot of this. In the real world, I would have pseudo-coded and wireframed the workflows I struggled with and asked the software engineers for help. Another example of desired workflow vs. actual is available under workflowstructure.png. 

## Extending the Application

Future development of this application would include a backend connection between the class and the Stripe product list. i.e. when a new ItemForSale is added via terminal or through the /admin site the details would automatically push to Stripe products.
Some additional features to include in the future would include a search function, the ability to add multiple items to a cart, category filters, and the ability to directly view item details.

### Creator Information
Leah Newman
leahcnewman@gmail.com
Last Update: October 29, 2019
