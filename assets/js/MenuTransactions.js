let carts = document.querySelectorAll('.food-menu-btn');
let products = [
    {
        name: 'pizza viande hachee',
        categorie: 'Pizza',
        price: 29,
        inCart: 0
    },
    {
        name: 'Pizza fruits de mer',
        categorie: 'Pizza',
        price: 49,
        inCart: 0
    },
    {
        name: 'White Castle Pizzas',
        categorie: 'Pizza',
        price: 60,
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
    }
    
    
]
for(let i=0;i<carts.length;i++){
    carts[i].addEventListener('click',()=>{
        cardNumbers()
    })
}

function onLoadCartNumbers(){
    let productNumbers = localStorage.getItem('cartNumbers');
    if(productNumbers){
        document.querySelector('.count').textContent = productNumbers
    }
}

function cardNumbers(){
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers)
    if(productNumbers){
        localStorage.setItem('cartNumbers',productNumbers + 1);
        document.querySelector('.count').textContent = productNumbers + 1;
    }else{
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.count').textContent = 1;
    }
    
}
onLoadCartNumbers()
