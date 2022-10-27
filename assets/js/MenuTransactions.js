let carts = document.querySelectorAll('.food-menu-btn');
let products = [
    {
        name: 'Pizza fruits de mer',
        categorie: 'Pizza',
        price: 49,
        inCart: 0
    },
    {
        name: 'pizza viande hachee',
        categorie: 'Pizza',
        price: 29,
        inCart: 0
    },
    
    {
        name: 'White Castle Pizzas',
        categorie: 'Pizza',
        price: 60,
        inCart: 0
    },
    {
        name: 'Ramen',
        categorie: 'Suchi',
        price: 59,
        inCart: 0
    },
    {
        name: 'Suchi boiled',
        categorie: 'Suchi',
        price: 55,
        inCart: 0
    },
    {
        name: 'Burger poulet',
        categorie: 'Burger',
        price: 70,
        inCart: 0
    },
    {
        name: 'Orange juice',
        categorie: 'Drink',
        price: 20,
        inCart: 0
    },
    {
        name: 'Panache',
        categorie: 'Drink',
        price: 25,
        inCart: 0
    }
    
];

for(let i=0;i<carts.length;i++){
    carts[i].addEventListener('click',()=>{
        cardNumbers(products[i])
        totalCost(products[i])
    })
}

function onLoadCartNumbers(){
    let productNumbers = localStorage.getItem('cartNumbers');
    if(productNumbers){
        document.querySelector('.count').textContent = productNumbers
    }
}

function cardNumbers(product){
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers)
    if(productNumbers){
        localStorage.setItem('cartNumbers',productNumbers + 1);
        document.querySelector('.count').textContent = productNumbers + 1;
    }else{
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.count').textContent = 1;
    }
    setItems(product)
}

function setItems(product){
   let cartItems = localStorage.getItem('productsInCart');
   cartItems = JSON.parse(cartItems)
   if(cartItems!=null){
    if(cartItems[product.name] == undefined){
        cartItems = {
            ...cartItems,
            [product.name]: product
        }
    }
    cartItems[product.name].inCart += 1;
   }else{
    product.inCart = 1;
    cartItems = {
        [product.name]: product
    }

   }
   
    localStorage.setItem('productsInCart', JSON.stringify(cartItems))
}

function totalCost(product){
    let cartCost = localStorage.getItem('totalCost')
    if(cartCost != null){
        cartCost = parseInt(cartCost)
        localStorage.setItem('totalCost',cartCost+product.price)
    }else{
        localStorage.setItem('totalCost',product.price)
    }
    
}

function displayCart(){
    let cartItems = localStorage.getItem('productsInCart');
    let productContainer = document.querySelector('.cart-box')
    let cartCost = localStorage.getItem('totalCost')
    cartItems = JSON.parse(cartItems)
    if(cartItems && productContainer){
        productContainer.innerHTML = ``;
        Object.values(cartItems).map(item=>{
            productContainer.innerHTML += `
            <li class="cart-row">
            <a href="#" class="cart-item">
              <div class="img-box">
                <img src="./assets/images/the-pizza-gf94d9f355_1920-removebg-preview.png" alt="product image" class="product-img" width="50" height="50"
                  loading="lazy">
              </div>
          
              <h5 class="product-name">${item.name}</h5>
              <div class="cart-quantity cart-column">
                <input class="cart-quantity-input" type="number" value="${item.inCart}">
              </div>
              <p class="product-price">
                $ ${item.price * item.inCart}
              </p>
              <button class="btn btn-danger" type="button">REMOVE</button>
            </a>
            
            
          </li>
          <div class="cart-btn-group">
          <div class="cart-total">
            <strong class="cart-total-title">Total</strong>
            <span class="cart-total-price">$ ${cartCost}</span>
          </div>
          <button class="btn btn-primary">Order</button>
        </div>
            `
        })

    }

}
// const orderButton = document.querySelector('.btn-primary');
// console.log(orderButton);

onLoadCartNumbers()
displayCart()
