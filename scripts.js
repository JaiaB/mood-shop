import data from './data.js';
const itemsContainer = document.getElementById('items');

itemsContainer.classList.add('flex')

data.forEach(function(data, image){
    console.log(data.length)
    //create a div where each image will go into
    const newDiv = document.createElement('div')
    newDiv.className = 'item'
    newDiv.classList.add('margins')

    //create an image element (using the image parameter) so that later we can assign the src attribute and dimensions to each
    image = document.createElement('img')
    image.src = data.image
    image.classList.add('contain')

    //append the image to the div
    newDiv.appendChild(image)
    
    //append all elements (new divs) to the html container variable so they are displayed in the dom
    itemsContainer.appendChild(newDiv)
})

