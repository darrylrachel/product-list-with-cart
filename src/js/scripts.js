let cart = []; // Keep track of the number of cart items
let productList = []; // This will store the fetched products

// Load data.json into webpage
fetch("./src/data.json")
.then((response) => response.json()) // read the list in `data.json`.
.then((data) => {
  productList = data; // Store the fetched products in productList
  displayProducts(productList); // Pass productList to displayProducts
});

/*//////////////////////////////////////////////////////////////
                        FETCHES JSON FILE
//////////////////////////////////////////////////////////////*/



/*//////////////////////////////////////////////////////////////
                      DISPLAY PRODUCTS
//////////////////////////////////////////////////////////////*/


function displayProducts(products) {
  const productContainer = document.getElementById("product-container");
  productContainer.className = "items";

  

  products.forEach((product, index) => {
    product.id = index + 1; // Generate an ID for each product

    // Creates the product container
    const productCard = document.createElement("div");
    productCard.classList = "item-card product-card";

    // Add the product image
    const img = document.createElement("img");
    img.src = product.image.desktop;
    img.alt = product.name;
    img.classList = "item-card__image product-image";
    productCard.appendChild(img);

    // Add the product category
    const h3 = document.createElement("p");
    h3.textContent = product.category;
    h3.className = "item-card__title";
    productCard.appendChild(h3);

    // Add the product name
    const desc = document.createElement("p");
    desc.textContent = product.name;
    desc.className = "item-card__description";
    productCard.appendChild(desc);

    // Add the product price
    const p = document.createElement("p");
    p.textContent = `$${product.price.toFixed(2)}`;
    p.classList = "item-card__price price";
    productCard.appendChild(p);

    // Create the updateQuantityButton and add to productCard
    const updateQuantityButton = createUpdateQuantityButton(product.id);
    productCard.appendChild(updateQuantityButton);


    // Add the "Add to Cart" button
    const addToCartButton = document.createElement("button");
    addToCartButton.classList = "item-card__button btn addToCart";

    // Create the img element for the cart icon
    const icon = document.createElement("img");
    icon.classList = "cart-image"
    icon.src = "./assets/images/icon-add-to-cart.svg";
    icon.alt = "Cart Icon";
    icon.style.width = "16px";
    icon.style.height = "16px";

    // Create a span for the text
    const text = document.createElement("span");
    text.textContent = "Add to Cart";
    addToCartButton.appendChild(text);

    addToCartButton.addEventListener("click", () => {
      addToCart(product);
      addToCartButton.style.display = "none"; // Hide Add to Cart Button
      updateQuantityButton.style.display = "flex"; // Show the update button
    });

    

    addToCartButton.appendChild(icon);
    productCard.appendChild(addToCartButton);
    productContainer.appendChild(productCard);


    function createUpdateQuantityButton(productId) {
      const container = document.createElement("div");
      container.classList = "updateQuantityButton item-card__button";
      container.style.display = "none"; // Hide by default
      

      // Decrement Button
      const decrementButton = document.createElement("button");
      decrementButton.classList = "updateDecrementButton";
      decrementButton.textContent = "-"
      decrementButton.addEventListener("click", () => {
        let item = cart.find(item => item.product.id === productId);
        if (item && item.quantity > 1) {
          item.quantity--;
          updateCartDisplay();
        } else if (item && item.quantity === 1) {
          // Remove item if quantity is 1 and the user decrements
          cart = cart.filter(cartItem => cartItem.product.id !== productId);
          container.style.display = "none"; // Hide the update button

          // Hide the updateQuantityButton and show the Add to Cart button
          updateQuantityButton.style.display = "none";
          addToCartButton.style.display = "block"; // Show Add to Cart Button
        }
        updateCartDisplay();
        updateQuantityDisplay(item ? item.quantity : 0);
      });

      // Quantity Display
      const quantityDisplay = document.createElement("p");
      quantityDisplay.classList = "quantityDisplay";
      quantityDisplay.textContent = `1`; // Default to 1 when first added
      // End quantity display
        

      // Increment Button
      const incrementButton = document.createElement("button");
      incrementButton.classList = "updateIncrementButton";
      incrementButton.textContent = "+"
      incrementButton.addEventListener("click", () => {
        let item = cart.find(item => item.product.id === productId);
        if (item) {
          item.quantity++;
        }
        updateQuantityDisplay(item.quantity);
        updateCartDisplay();
      });

      // Function to update the quantity display
      function updateQuantityDisplay(quantity) {
        quantityDisplay.textContent = `${quantity}`;
      }

    
      // Append all parts to the updateQuanityButton
      container.appendChild(decrementButton); 
      container.appendChild(quantityDisplay);
      container.appendChild(incrementButton);

      return container;
    }
  });
}

    // Function to add products to cart
    function addToCart(product) {
      const existingProduct = cart.find(item => item.product.id === product.id);

      if (existingProduct) {
        existingProduct.quantity++;
      } else {
        cart.push({ product: product, quantity: 1 });
      }

      updateCartDisplay();
    }

    // Function to update cart display
/////////////////////////////////////////

function updateCartDisplay() {
  const cartQuantity = document.getElementById("cartQuantity");
  const cartItemsContainer = document.querySelector(".sidebar__cart-items");

  // Calculate total quantity and total price
  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = cart.reduce((total, item) => total + (item.product.price * item.quantity), 0);


  cartQuantity.classList = "quantity";
  cartQuantity.textContent = `( ${totalQuantity} )`;

  cartItemsContainer.innerHTML = "";

  if (cart.length === 0) {
    const emptyCartMessage = document.createElement("p");
    emptyCartMessage.textContent = "Your added items will appear here";
    emptyCartMessage.classList ='text';
    cartItemsContainer.appendChild(emptyCartMessage);
  } else {
    cart.forEach((item) => {
      const itemElement = document.createElement("div");
      itemElement.className = "cart-item";


      const itemName = document.createElement("p");
      itemName.textContent = `
      ${item.product.name}
      `;
      itemName.classList = "itemName";

      
      /*//////////////////////////////////////////////////////////////
                              SECOND ROW
      //////////////////////////////////////////////////////////////*/
        const secondRow = document.createElement("div");
        secondRow.classList = "secondRow";

        const secondRowQuantity = document.createElement("span");
        secondRowQuantity.classList = "secondRowQuantity";
        secondRowQuantity.textContent = `${item.quantity}x`;

        const costPerItem = document.createElement("p");
        costPerItem.classList = "costPerItem";
        costPerItem.textContent = `@${(item.product.price).toFixed(2)}`;

        const itemTotal = document.createElement("p");
        itemTotal.classList = "itemTotal";
        itemTotal.textContent = `
        $${(item.product.price * item.quantity).toFixed(2)}
        `;

        // Remove Item from cart
        const closeButton = document.createElement("button");
        closeButton.classList = "closeButton";

        // Create the img element for the x icon
        const icon = document.createElement("img");
        icon.src = "../../assets/images/icon-remove-item.svg";
        icon.alt = "Close Icon"; 
        icon.style.width = "20px";
        icon.style.height = "10px";
        icon.classList = "closeButtonImg"

        // Append img and text to button
        closeButton.appendChild(icon);

        // Add click event to button
        closeButton.addEventListener("click", function() {
          // Filter out the item from the cart array
          cart = cart.filter((cartItem) => cartItem.product.id !== item.product.id);
          
          // Update the cart display to reflect the removal
          updateCartDisplay();
        })


      itemElement.appendChild(itemName);
      secondRow.appendChild(secondRowQuantity);
      secondRow.appendChild(costPerItem);
      secondRow.appendChild(itemTotal);
      cartItemsContainer.appendChild(itemElement);
      itemElement.appendChild(closeButton);
      cartItemsContainer.appendChild(secondRow);
    });

    /*//////////////////////////////////////////////////////////////
                               THIRD ROW
    //////////////////////////////////////////////////////////////*/

    // After the loop, create thirdRow for displaying the total order price
    const thirdRow = document.createElement("div");
    thirdRow.classList = "thirdRow";
    // thirdRow.style.border = "1px solid blue";

    const orderTotalText = document.createElement("p");
    orderTotalText.classList = "orderTotalText";
    orderTotalText.textContent = `Order Total`;

    const orderTotal = document.createElement("p");
    orderTotal.classList = "orderTotal";
    orderTotal.textContent = `$${totalPrice.toFixed(2)}`;

    // Append elements to thirdRow
    thirdRow.appendChild(orderTotalText);
    thirdRow.appendChild(orderTotal);

    // Append thirdRow to cartItemsContainer outside the loop
    cartItemsContainer.appendChild(thirdRow);

    /*//////////////////////////////////////////////////////////////
                              CHECKOUT ROW
    //////////////////////////////////////////////////////////////*/

    const fourthRow = document.createElement("div")
    fourthRow.classList = "fourthRow";

    const carbonImg = document.createElement("img");
    carbonImg.src = "../../assets/images/icon-carbon-neutral.svg";
    carbonImg.style.width = "20px";
    carbonImg.style.height = "20px";
    carbonImg.alt = "Carbon-neutral";
    carbonImg.classList = "carbon-neutrl";

    const carbonDelivery = document.createElement("p");
    carbonDelivery.textContent = `
    This is a carbon-neutral delivery
    `;

    fourthRow.appendChild(carbonImg)
    fourthRow.appendChild(carbonDelivery);
    cartItemsContainer.appendChild(fourthRow);

    // CHECKOUT BUTTON
    const fifthRow = document.createElement("div");
    fifthRow.classList = "fifthRow";
    

    const checkoutButton = document.createElement("button");
    checkoutButton.classList = "checkoutButton";
    checkoutButton.textContent = "Confirm Order";

    fifthRow.appendChild(checkoutButton);
    cartItemsContainer.appendChild(fifthRow);
}};