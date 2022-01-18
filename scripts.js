import data from './data.js';
const itemsContainer = document.getElementById('items');
const cart = [];

data.forEach(function(data){
  //print to console the number of items in the array I'll be working with
  //console.log(data.length)
  //create a div where each image will go into
  const item = document.createElement('div')
    item.className = 'item'

  //create an image element (using the image parameter) so that later we can assign the src attribute and dimensions to each
  const imageEl = document.createElement('img')
    imageEl.src = data.image
   //print to console the image element created
   //console.log(image)

  const description = document.createElement('p')
    description.innerText = data.desc
    //console.log(description)

  const price = document.createElement('p')
    price.innerText = data.price
    //console.log(price)

  const button = document.createElement('button')

  //assign the button id to the name property
  button.id = data.name
  //add the text to the button
  button.textContent = "Add to Cart"
  //store the price value inside the button
  button.dataset.price = data.price
  //console.log(addCartBtn)

  button.addEventListener('click', ()=>{
    //id is the only property it knows
    console.log(`clicked on ${button.id}`)
    //if we call this function here, it doesn't work yet
    addItem()
  })

  //append elements to the div to make card
  item.appendChild(imageEl)
  item.appendChild(description)
  item.appendChild(price)
  item.appendChild(button)
    
  //append all cards to the html container so they are displayed in the dom
  itemsContainer.appendChild(item)
})

function addItem(name, price){
  //loop first and check before adding an item
  for(let i = 0; i < cart.length; i++){
    //check if there is already an item with that name
    if(cart[i].name === name){
      cart[i].qty += 1 
      return //we need the keyword ALONE to avoid duplicates in the cart
    }
  }
  //const item = {name: name, price: price, qty: 1} before refractoring
  const item = {name, price, qty: 1} //after refractoring
  //js automatically adds the keys and values to objs
  //in our example apple is added automatically as value to name prop
  //the amount is automatically added as value to price prop
  cart.push(item) 
}

console.log(addItem('apple', 1.99))
console.log(addItem('orange', 3.25))
console.log(addItem('apple', 1.99))
addItem('orange', 3.25)

//add ALL the item quantities in cart
function getQty(){
  let totalQty = 0 //of items in cart
  for (let i = 0; i < cart.length; i += 1){
    totalQty += cart[i].qty
  }
  //console.log(`you have ${totalQty} items in your cart from getQty function`)
  //by returning we can send the value back to where it was called from
  return totalQty
}

//total sum of all prices in cart
function getTotal(){
  let totalPrice = 0
  for (let i = 0; i < cart.length; i += 1){
    //add and assign to totalPrice the result of multiplying the price of an item by the available quantities
    totalPrice += cart[i].price * cart[i].qty
  }
  //console.log(`your grand total is $ ${totalPrice.toFixed(2)}`)
  return totalPrice
}

//print in detail what is inside the cart
function showItems(){
  //we are using the return value of totalQty
  //we DON'T use the variable, WE CALL THE FUNCTION, because that's what the function does, it returns that value we want
  //only like this we can access values that are out of scope
  console.log(`you have ${getQty()} items in your cart`)

  //the same way we can access the return value from totalCart()
  console.log(`your grand total is $${getTotal()}`)

  for (let i = 0; i < cart.length; i += 1){
    //print in detail cart contents
    console.log(`${cart[i].qty} ${cart[i].name} $${cart[i].price}`)
  }
}

//getQty() is not needed here because we are calling it from showItems
//getTotal() is not needed here because we also called it from showItems
showItems()

//print cart in detail
console.log(cart)