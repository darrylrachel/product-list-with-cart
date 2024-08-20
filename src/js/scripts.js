// Load data.json into webpage
fetch('./src/data.json')
.then(response => response.json()) // This tells your webpage to read the list in `data.json`.
.then(data => displayProducts(data)); // This sends the product data to a function called `displayProducts`.



// Build product cards dynamically

function displayProducts(products) {
  const productContainer = document.getElementById('product-container');
  productContainer.className = 'items';
  // productContainer.style.border = '1px solid aqua';

  products.forEach (product => {

    // Creates the product container
    const productCard = document.createElement('div');
    productCard.classList = 'item-card product-card';

    // Add the product image
    const img = document.createElement('img');
    img.src = product.image.desktop;
    img.alt = product.name;
    img.classList = 'item-card__image product-image';
    productCard.appendChild(img);
    
    // Still may need actual image style on border radius

    // Add the product description
    const desc = document.createElement('p');
    desc.textContent = product.category;
    desc.className = 'description';
    productCard.appendChild(desc);

    // Add the product name
    const h3 = document.createElement('p');
    h3.textContent = product.name;
    h3.className = 'title'
    productCard.appendChild(h3);

    

    // Add the product price
    const p = document.createElement('p');
    p.textContent = `$${product.price}`;
    p.className = 'price'
    productCard.appendChild(p);

    // Add the "Add to Cart" button
    const button = document.createElement('button');
    button.textContent = 'Add to Cart';
    button.className = 'item-card__button';
    productCard.appendChild(button);

    // Append the product card to the container
    productContainer.appendChild(productCard);

    // const productCard = `
    //   <div class="item-card product-card">
    //     <img src="${product.image}" alt="${product.name}">
    //     <h3>${product.category}</h3>
    //     <h3>${product.name}</h3>
    //     <p>$${product.price}</p>
    //     <button class="add-to-cart">Add to Cart</button>
    //   </div>
    // `;
    // productContainer.innerHTML += productCard;
  });
}