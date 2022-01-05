import data from './data.js';
const itemsContainer = document.getElementById('items');

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

    const addCartBtn = document.createElement('button')

    //assign the button id to the name property
    addCartBtn.id = data.name
    //add the text to the button
    addCartBtn.textContent = "Add to Cart"
    //store the price value inside the button
    addCartBtn.dataset.price = data.price
    //console.log(addCartBtn)
    
    //append the image to the div
    item.appendChild(imageEl)
    //append image description
    item.appendChild(description)
    //append price
    item.appendChild(price)
    //append button
    item.appendChild(addCartBtn)
    
    //append all elements (new divs) to the html container variable so they are displayed in the dom
    itemsContainer.appendChild(item)
})