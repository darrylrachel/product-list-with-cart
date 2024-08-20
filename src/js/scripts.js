// Load data.json into webpage
fetch('./src/data.json')
.then(response => response.json()) // This tells your webpage to read the list in `data.json`.
.then(data => displayProducts(data)); // This sends the product data to a function called `displayProducts`.



/*//////////////////////////////////////////////////////////////
                    BUILD PRODUCT CARDS DYNAMICALLY
//////////////////////////////////////////////////////////////*/

let cart = []; // Keep track of the number of cart items


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

    // Add the product name
    const h3 = document.createElement('p');
    h3.textContent = product.category;
    h3.className = 'item-card__title'
    productCard.appendChild(h3);

    // Add the product description
    const desc = document.createElement('p');
    desc.textContent = product.name;
    desc.className = 'item-card__description';
    productCard.appendChild(desc);


    // Add the product price
    const p = document.createElement('p');
    p.textContent = `$${product.price.toFixed(2)}`;
    p.classList = 'item-card__price price';
    productCard.appendChild(p);

    // Add the "Add to Cart" button
    const button = document.createElement('button');
    button.classList = 'item-card__button btn';

    // Create the img element for the cart icon
    const icon = document.createElement('img');
    icon.src = './assets/images/icon-add-to-cart.svg'; // Path to your SVG file
    icon.alt = 'Cart Icon'; // Accessibility text
    icon.style.width = '16px'; // Adjust size as needed
    icon.style.height = '16px';

    // Create a span for the text
    const text = document.createElement('span');
    text.textContent = ' Add to Cart';

    // Append img and text to button
    button.appendChild(icon);
    button.appendChild(text);

    // Add click event to button
    button.addEventListener('click', () => addToCart(product));

    // Append button to product card
    productCard.appendChild(button);


/*//////////////////////////////////////////////////////////////
                           STORE CART ITEMS
//////////////////////////////////////////////////////////////*/

function addToCart(product) {
  // Add the product to the cart array
  cart.push(product);

  // Update the cart display
  updateCartDisplay();
}


/*//////////////////////////////////////////////////////////////
                           UPDATE CART DISPLAY
//////////////////////////////////////////////////////////////*/

function updateCartDisplay() {
  const cartQuantity = document.getElementById('quantity');
  const cartItemsContainer = document.querySelector('.sidebar__cart-items');

  // Update the quantity
  cartQuantity.textContent = `(${cart.length})`;

  // Clear the cart items container
  cartItemsContainer.innerHTML = '';

  if ( cart.length === 0 ) {
    
    // Show empty cart message if no items
    const emptyCartMessage = document.createElement('p');
    emptyCartMessage.textContent = 'Your added items will appear here';
    cartItemsContainer.appendChild(emptyCartMessage);
  } else {
    
    // Show cart items
    cart.forEach(item => { // Looping over cart array
      const itemElement = document.createElement('div');
      itemElement.className = 'cart-item';

      const itemName = document.createElement('p');
      itemName.textContent = item.name;

      const itemPrice = document.createElement('p');
      itemPrice.textContent = `$${item.price.toFixed(2)}`;

      itemElement.appendChild(itemName);
      itemElement.appendChild(itemPrice);
      cartItemsContainer.appendChild(itemElement);
    });

  }
}




    // Append the product card to the container
    productContainer.appendChild(productCard);
  });
}