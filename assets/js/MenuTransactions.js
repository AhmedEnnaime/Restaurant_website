let carts = document.querySelectorAll('.food-menu-btn');
let imgSrc;

let products = [
    {
        name: 'Pizza fruits de mer',
        categorie: 'Pizza',
        price: 49,
        image: imgSrc,
        inCart: 0
    },
    {
        name: 'pizza viande hachee',
        categorie: 'Pizza',
        price: 29,
        image: imgSrc,
        inCart: 0
    },
    
    {
        name: 'White Castle Pizzas',
        categorie: 'Pizza',
        price: 60,
        image: imgSrc,
        inCart: 0
    },
    {
        name: 'Ramen',
        categorie: 'Suchi',
        price: 59,
        image: imgSrc,
        inCart: 0
    },
    {
        name: 'Suchi boiled',
        categorie: 'Suchi',
        price: 55,
        image: imgSrc,
        inCart: 0
    },
    {
        name: 'Burger poulet',
        categorie: 'Burger',
        price: 70,
        image: imgSrc,
        inCart: 0
    },
    {
        name: 'Orange juice',
        categorie: 'Drink',
        price: 20,
        image: imgSrc,
        inCart: 0
    },
    {
        name: 'Panache',
        categorie: 'Drink',
        price: 25,
        image: imgSrc,
        inCart: 0
    }
    
];

for(let card of carts){
    for(let i = 0; i<products.length;i++){
       if(products[i].name === card.parentElement.parentElement.childNodes[5].innerText){
        products[i].image = card.parentElement.childNodes[1].src
       }
    }
}

for(let i=0;i<carts.length;i++){
    carts[i].addEventListener('click',()=>{
        cardNumbers(products[i])
        totalCost(products[i])
        displayCart()
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
let productContainer = document.querySelector('.cart-box')
function displayCart(){
    let cartItems = localStorage.getItem('productsInCart');
    let cartCost = localStorage.getItem('totalCost')
    cartItems = JSON.parse(cartItems)
    if(cartItems && productContainer){
        productContainer.innerHTML = ``;
        Object.values(cartItems).map(item=>{
            productContainer.innerHTML += `
            <li class="cart-row">
            <a href="#" class="cart-item">
              <div class="img-box">
                <img src="${item.image}" alt="product image" class="product-img" width="50" height="50"
                  loading="lazy">
              </div>
          
              <h5 class="product-name">${item.name}</h5>
              <div class="cart-quantity cart-column">
                <span class="cart-quantity-input">${item.inCart}</span>
              </div>
              <p class="product-price">
                $ ${item.price * item.inCart}
              </p>
              <button class="btn btn-danger" type="button">REMOVE</button>
            </a>
            
            
          </li>
          
            `
            // let quantity = productContainer.getElementsByClassName('cart-quantity-input');
            // console.log(quantity.value);
            // item.inCart = quantity.value


        })
        productContainer.innerHTML += `
        <div class="cart-btn-group">
          <div class="cart-total">
            <strong class="cart-total-title">Total</strong>
            <span class="cart-total-price">$ ${cartCost}</span>
          </div>
          <button class="btn btn-primary">Order</button>
        </div>

        `

    }

    const orderButton = productContainer.querySelector('.btn-primary');
    orderButton.addEventListener('click',()=>{
        localStorage.clear()
        alert('Thank you for your order')
        document.querySelector('.count').textContent = 0
        productContainer.remove()
    })

    let removeButton = productContainer.querySelectorAll('.btn-danger');
    for(let danger of removeButton){
        for(let z=0;z<products.length;z++){
            // console.log(products[z].name, danger.parentElement.childNodes[3].textContent);
            // danger.addEventListener('click',()=>{
            //     console.log(products[z].name);
                
            //     if(products[z].name === danger.parentElement.childNodes[3].textContent){
            //         products = products.filter((item)=> item.name === products[z].name)
            //     }
                
            // })
        }
    }

}

onLoadCartNumbers()
displayCart()
