// ========================================
// SHOPPING CART
// ========================================


// ----------------------------------------
// VARIABLES
// ----------------------------------------

// This array will hold the products
// that the customer adds to their cart.
let cart = [];


// ----------------------------------------
// DOM ELEMENTS
// ----------------------------------------

const addButtons = document.querySelectorAll(".add-btn");

const cartItems = document.querySelector("#cart-items");
const cartCount = document.querySelector("#cart-count");

const subtotalElement = document.querySelector("#subtotal");
const discountElement = document.querySelector("#discount");
const totalElement = document.querySelector("#total");

const discountMessage = document.querySelector("#discount-message");
const checkoutButton = document.querySelector("#checkout-btn");


// ----------------------------------------
// EVENT LISTENERS
// ----------------------------------------

// Add an event listener to each
// "Add to Cart" button.

addButtons.forEach(function(button) {

  button.addEventListener("click", function() {

    // Get the product information
    // from the button.
    const name = button.dataset.name;
    const price = Number(button.dataset.price);

    // TODO:
    // Add the product to the cart.
    addToCart(name, price);
  });

});


// Checkout button

checkoutButton.addEventListener("click", function() {

  // TODO:
  // Check whether the cart is empty.
  //
  // If it is empty:
  //     Display a message telling the customer
  //     that they need to add something.
  //
  // Otherwise:
  //     Display a thank-you message.
  if (cart.length === 0)
      discountMessage.textContent = "Your cart is empty!";
  else {
    discountMessage.textContent = "Thank You!";
  }


});


// ----------------------------------------
// FUNCTIONS
// ----------------------------------------


// Add a product to the cart
function addToCart(name, price) {

  // TODO:
  // Add an object containing the name
  // and price to the cart array.
  //
  // Example object:
  //
  // {
  //   name: "T-Shirt",
  //   price: 20
  // }
  cart.push({
    name: name,
    price: price,
  })
  renderCart()


}


// Update everything displayed in the cart
function renderCart() {

  // TODO:
  //
  // 1. Clear the current cart display.
  //
  // 2. Use a loop to go through the
  //    cart array.
  //
  // 3. Create HTML for each item.
  //
  // 4. Add each item to the page.
  //
  // 5. Update the cart count.
  //
  // 6. Call the function that calculates
  //    the total.

  cartItems.textContent = "";


  for (const i of cart) {
    const item = document.createElement("div")
    item.textContent = i.name + " $" + i.price.toFixed(2)
    cartItems.append(item)
  }
  cartCount.textContent = cart.length.toString()
  updateTotals()


}


// Calculate the subtotal
function calculateSubtotal() {

  let subtotal = 0;

  // TODO:
  // Use a loop to go through the cart
  // and add each item's price to subtotal.
  for (const i of cart){
    subtotal += i.price
  }


  return subtotal;
}


// Calculate the discount
function calculateDiscount(subtotal) {

  let discount = 0;

  // TODO:
  //
  // Use if / else if / else to determine
  // the discount.
  //
  // $100 or more  -> 20%
  // $50 or more   -> 10%
  // Less than $50 -> 0%
  if (subtotal >= 100){
    discount = subtotal * 0.20
  }
    else if (subtotal >= 50) {
      discount = subtotal * 0.10
      }
      else discount = 0

  return discount;
}


// Update the prices displayed on the page
function updateTotals() {

  // TODO:
  //
  // 1. Get the subtotal.
  let subtotal = calculateSubtotal();
  // 2. Get the discount.
  let discount = calculateDiscount(subtotal);
  // 3. Calculate the final total.
  let total = subtotal - discount;
  // 4. Display all three values on the page.
  subtotalElement.textContent = "$" + subtotal.toFixed(2);
  discountElement.textContent = "$" + discount.toFixed(2);
  totalElement.textContent = "$" + total.toFixed(2);
}