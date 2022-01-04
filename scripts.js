import data from './data.js';
const itemsContainer = document.getElementById('items');

itemsContainer.classList.add('flex')

data.forEach(function(data, image){
    //print to console the number of items in the array I'll be working with
    //console.log(data.length)
    //create a div where each image will go into
    const newDiv = document.createElement('div')
    newDiv.className = 'item'
    newDiv.classList.add('margins')

    //create an image element (using the image parameter) so that later we can assign the src attribute and dimensions to each
    image = document.createElement('img')
    image.src = data.image
    image.classList.add('contain')
    //print to console the image element created
    //console.log(image)

    const description = document.createElement('p')
    description.innerText = data.desc
    description.classList.add('paragraph')
    //console.log(description)


    const price = document.createElement('p')
    price.innerText = data.price
    price.classList.add('paragraph')
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
    newDiv.appendChild(image)
    //append image description
    newDiv.appendChild(description)
    //append price
    newDiv.appendChild(price)
    //append button
    newDiv.appendChild(addCartBtn)
    
    //append all elements (new divs) to the html container variable so they are displayed in the dom
    itemsContainer.appendChild(newDiv)
})

