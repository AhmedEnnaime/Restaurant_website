'use strict';
if (document.readyState == 'loading') {
  document.addEventListener('DOMContentLoaded', ready)
} else {
  ready()
}

// navbar variables
const nav = document.querySelector('.navbar-nav');
const navLinks = document.querySelectorAll('.nav-link');
const cartToggleBtn = document.querySelector('.shopping-cart-btn');
const navToggleBtn = document.querySelector('.menu-toggle-btn');
const shoppingCart = document.querySelector('.cart-box');



// nav toggle function
const navToggleFunc = function () {
  nav.classList.toggle('active');
  navToggleBtn.classList.toggle('active');
}

// shopping cart toggle function
const cartToggleFunc = function () { shoppingCart.classList.toggle('active') }



// add event on nav-toggle-btn
navToggleBtn.addEventListener('click', function () {

  // If the shopping-cart has an `active` class, it will be removed.
  if (shoppingCart.classList.contains('active')) cartToggleFunc();

  navToggleFunc();

});

// add event on cart-toggle-btn
cartToggleBtn.addEventListener('click', function () {

  // If the navbar-nav has an `active` class, it will be removed.
  if (nav.classList.contains('active')) navToggleFunc();

  cartToggleFunc();

});

// add event on all nav-link
for (let i = 0; i < navLinks.length; i++) {

  navLinks[i].addEventListener('click', navToggleFunc);

}

///
const websitesDesigned = document.querySelector(".websites-designed");
const appsdeveloped = document.querySelector(".apps-developed");

setTimeout(() => {
  websitesDesigned.innerHTML = "13";
  appsdeveloped.innerHTML = "3";
}, 400);

const all = document.getElementById('all');
const pizza_categorie = document.getElementById('pizza');
const burger_categorie = document.getElementById('burger');
const suchi_categorie = document.getElementById('suchi');
const drink_categorie = document.getElementById('drink');

pizza_categorie.addEventListener('click',()=>{
  pizza_categorie.classList.add('active');
  all.classList.remove('active');
  burger_categorie.classList.remove('active');
  suchi_categorie.classList.remove('active');
  drink_categorie.classList.remove('active');
  showProduct()
})

suchi_categorie.addEventListener('click',()=>{
  pizza_categorie.classList.remove('active');
  all.classList.remove('active');
  burger_categorie.classList.remove('active');
  suchi_categorie.classList.add('active');
  drink_categorie.classList.remove('active');
  showProduct()
})

drink_categorie.addEventListener('click',()=>{
  pizza_categorie.classList.remove('active');
  all.classList.remove('active');
  burger_categorie.classList.remove('active');
  suchi_categorie.classList.remove('active');
  drink_categorie.classList.add('active');
  showProduct()
})

burger_categorie.addEventListener('click',()=>{
  pizza_categorie.classList.remove('active');
  all.classList.remove('active');
  burger_categorie.classList.add('active');
  suchi_categorie.classList.remove('active');
  drink_categorie.classList.remove('active');
  showProduct()
})

all.addEventListener('click',()=>{
  pizza_categorie.classList.remove('active');
  all.classList.add('active');
  burger_categorie.classList.remove('active');
  suchi_categorie.classList.remove('active');
  drink_categorie.classList.remove('active');
  showProduct()
})

const pizzas = document.querySelectorAll('.pizza');
const suchis = document.querySelectorAll('.suchi');
const burgers = document.querySelectorAll('.burger');
const drinks = document.querySelectorAll('.drink');

const showProduct = ()=>{
  if(pizza_categorie.classList.contains('active')){
    pizzas.forEach((pizza)=>{
      pizza.classList.remove('hide');
    })
    burgers.forEach((burger)=>{
      burger.classList.add('hide');
    })
    suchis.forEach((suchi)=>{
      suchi.classList.add('hide');
    })
    drinks.forEach((drink)=>{
      drink.classList.add('hide');
    })
  }else if(suchi_categorie.classList.contains('active')){
    pizzas.forEach((pizza)=>{
      pizza.classList.add('hide');
    })
    burgers.forEach((burger)=>{
      burger.classList.add('hide');
    })
    suchis.forEach((suchi)=>{
      suchi.classList.remove('hide');
    })
    drinks.forEach((drink)=>{
      drink.classList.add('hide');
    })
  }else if(drink_categorie.classList.contains('active')){
    pizzas.forEach((pizza)=>{
      pizza.classList.add('hide');
    })
    burgers.forEach((burger)=>{
      burger.classList.add('hide');
    })
    suchis.forEach((suchi)=>{
      suchi.classList.add('hide');
    })
    drinks.forEach((drink)=>{
      drink.classList.remove('hide');
    })
  }else if(burger_categorie.classList.contains('active')){
    pizzas.forEach((pizza)=>{
      pizza.classList.add('hide');
    })
    burgers.forEach((burger)=>{
      burger.classList.remove('hide');
    })
    suchis.forEach((suchi)=>{
      suchi.classList.add('hide');
    })
    drinks.forEach((drink)=>{
      drink.classList.add('hide');
    })
  }else if(all.classList.contains('active')){
    pizzas.forEach((pizza)=>{
      pizza.classList.remove('hide');
    })
    burgers.forEach((burger)=>{
      burger.classList.remove('hide');
    })
    suchis.forEach((suchi)=>{
      suchi.classList.remove('hide');
    })
    drinks.forEach((drink)=>{
      drink.classList.remove('hide');
    })
  }
}

// Achat

function ready() {
  var removeCartItemButtons = document.getElementsByClassName('btn-danger')
  for (var i = 0; i < removeCartItemButtons.length; i++) {
      var button = removeCartItemButtons[i]
      button.addEventListener('click', removeCartItem)
  }

  var quantityInputs = document.getElementsByClassName('cart-quantity-input')
  for (var i = 0; i < quantityInputs.length; i++) {
      var input = quantityInputs[i]
      input.addEventListener('change', quantityChanged)
  }

  var addToCartButtons = document.getElementsByClassName('food-menu-btn')
  for (var i = 0; i < addToCartButtons.length; i++) {
      var button = addToCartButtons[i]
      button.addEventListener('click', addToCartClicked)
  }

  document.getElementsByClassName('btn-primary')[0].addEventListener('click', purchaseClicked)
}

function purchaseClicked() {
  alert('Thank you for your purchase')
  var cartItems = document.getElementsByClassName('cart-box-ul')[0]
  while (cartItems.hasChildNodes()) {
      cartItems.removeChild(cartItems.firstChild)
  }
  updateCartTotal()
}

function removeCartItem(event) {
  var buttonClicked = event.target
  buttonClicked.parentElement.remove()
  updateCartTotal()
}

function quantityChanged(event) {
  var input = event.target
  if (isNaN(input.value) || input.value <= 0) {
      input.value = 1
  }
  updateCartTotal()
}

function addToCartClicked(event) {
  var button = event.target
  var shopItem = button.parentElement.parentElement
  var title = shopItem.getElementsByClassName('card-title')[0].innerText
  var price = shopItem.getElementsByClassName('price')[0].innerText
  var imageSrc = shopItem.getElementsByClassName('w-100')[0].src
  addItemToCart(title, price, imageSrc)
  updateCartTotal()
}

function addItemToCart(title, price, imageSrc) {
  var cartRow = document.createElement('div')
  cartRow.classList.add('.cart-row')
  
  var cartItems = document.getElementsByClassName('cart-box-ul')[0]
  var cartItemNames = cartItems.getElementsByClassName('product-name')
  for (var i = 0; i < cartItemNames.length; i++) {
      if (cartItemNames[i].innerText == title) {
          alert('This item is already added to the cart')
          return
      }
  }
  var cartRowContents = `
  <li class="cart-row">
  <a href="#" class="cart-item">
    <div class="img-box">
      <img src="${imageSrc}" alt="product image" class="product-img" width="50" height="50"
        loading="lazy">
    </div>

    <h5 class="product-name">${title}</h5>
    <div class="cart-quantity cart-column">
      <input class="cart-quantity-input" type="number" value="1">
    </div>
    <p class="product-price">
      ${price}
    </p>
    <button class="btn btn-danger" type="button">REMOVE</button>
  </a>
  
  
</li>

`
  cartRow.innerHTML = cartRowContents
  cartItems.append(cartRow)
  cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
  cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
}

function updateCartTotal() {
  var cartItemContainer = document.getElementsByClassName('cart-box-ul')[0]
  var cartRows = cartItemContainer.getElementsByClassName('cart-row')
  var total = 0
  for (var i = 0; i < cartRows.length; i++) {
      var cartRow = cartRows[i]
      var priceElement = cartRow.getElementsByClassName('product-price')[0]
      var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
      var price = parseFloat(priceElement.innerText.replace('$', ''))
      var quantity = quantityElement.value
      total = total + (price * quantity)
  }
  total = Math.round(total * 100) / 100
  document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total
}

