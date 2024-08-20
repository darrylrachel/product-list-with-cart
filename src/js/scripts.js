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

  // Assign a unique ID to each product
  products.forEach((product, index) => {
  product.id = index + 1; // Example of generating a simple numeric ID


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

Store an object that contains both the product and its quantity. This allows us to easily manage the quantity of each item.                           
//////////////////////////////////////////////////////////////*/

function addToCart(product) {
  // Check if the product is already in the cart
  let existingProduct = cart.find(item => item.product.id === product.id);

  if ( existingProduct ) {
    // Increment quantity
    existingProduct.quantity++;
  } else {
    // Add new product with quantity 1
    cart.push({ product: product, quantity: 1 });
  }


  // Update the cart display
  updateCartDisplay();
}


/*//////////////////////////////////////////////////////////////
                           UPDATE CART DISPLAY

Update cart display to display items with quantities                           
//////////////////////////////////////////////////////////////*/

function updateCartDisplay() {
  const cartQuantity = document.getElementById('quantity');
  const cartItemsContainer = document.querySelector('.sidebar__cart-items');

  // Update the total quantity
  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
  cartQuantity.textContent = `(${totalQuantity})`;
  
  // Clear the cart items container
  cartItemsContainer.innerHTML = '';

  if (cart.length === 0) {
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
      itemName.textContent = `(${item.quantity}) ${item.product.name}`; //  
      itemName.classList = 'itemName';

      const itemPrice = document.createElement('p');
      itemPrice.textContent = `$${(item.product.price * item.quantity).toFixed(2)}`;
      itemPrice.classList = 'itemPrice';

      // const itemQuantity = document.createElement('p');
      // itemQuantity.textContent = `(${item.quantity})`;
      

      // Increment button
      const incrementButton = document.createElement('button');
      incrementButton.classList = 'incrementButton';
      incrementButton.textContent = '+';
      incrementButton.addEventListener('click', () => {
        item.quantity++;
        updateCartDisplay();
      });

      const decrementButton = document.createElement('button');
      decrementButton.classList = 'decrementButton';
      decrementButton.textContent = '-';
      decrementButton.addEventListener('click', () => {
        if (item.quantity > 1) {
          item.quantity--;
          updateCartDisplay();
        } else {
          // Remove item from cart if quantity reaches 0
          cart = cart.filter(cartItem => cartItem.product.id !== item.product.id);
          updateCartDisplay();
        }
      })

      itemElement.appendChild(itemName);
      itemElement.appendChild(itemPrice);
      itemElement.appendChild(incrementButton);
      itemElement.appendChild(decrementButton);
      cartItemsContainer.appendChild(itemElement);
    });

  }
}




    // Append the product card to the container
    productContainer.appendChild(productCard);
  });
})};