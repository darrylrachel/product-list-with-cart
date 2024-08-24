// Load data.json into webpage
fetch("./src/data.json")
.then((response) => response.json()) // read the list in `data.json`.
.then((data) => displayProducts(data)); // sends product data `displayProducts`.

/*//////////////////////////////////////////////////////////////
                        FETCHES JSON FILE
//////////////////////////////////////////////////////////////*/

let cart = []; // Keep track of the number of cart items

/*//////////////////////////////////////////////////////////////
                      CREATES EMPTY ARRAY
//////////////////////////////////////////////////////////////*/


function displayProducts(products) {
  const productContainer = document.getElementById("product-container");
  productContainer.className = "items";

  products.forEach((product, index) => {
    product.id = index + 1; // Example of generating a simple numeric ID

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
/*
    // Add the "Add to Cart" button
    const button = document.createElement("button");
    button.classList = "item-card__button btn";

    // Create the img element for the cart icon
    const icon = document.createElement("img");
    icon.src = "./assets/images/icon-add-to-cart.svg"; // Path to your SVG file
    icon.alt = "Cart Icon"; // Accessibility text
    icon.style.width = "16px"; // Adjust size as needed
    icon.style.height = "16px";

    // Create a span for the text
    const text = document.createElement("span");
    text.textContent ="Add to Cart";

    // Append img and text to button
    button.appendChild(icon);
    button.appendChild(text);

    // Add click event to button
    button.addEventListener("click", () => addToCart(product));

    // Append button to product card
    productCard.appendChild(button);
*/




    // New Code
    if (cart.length === 0) {
  // Add the "Add to Cart" button
  const button = document.createElement("button");
  button.classList = "item-card__button btn";

  // Create the img element for the cart icon
  const icon = document.createElement("img");
  icon.src = "./assets/images/icon-add-to-cart.svg"; // Path to your SVG file
  icon.alt = "Cart Icon"; // Accessibility text
  icon.style.width = "16px"; // Adjust size as needed
  icon.style.height = "16px";

  // Create a span for the text
  const text = document.createElement("span");
  text.textContent ="Add to Cart";

  // Append img and text to button
  button.appendChild(icon);
  button.appendChild(text);

  // Add click event to button
  button.addEventListener("click", () => addToCart(product));

  // Append button to product card
  productCard.appendChild(button);
    } else {
      cart.forEach((item) => {
        const updateQuantityButton = document.createElement("button");
        updateQuantityButton.classList = "updateQuantityButton item-card__button ";
        updateQuantityButton.addEventListener("click", () => {
          item.classList.add("updateQuantityButton-show");
          console.log("clicked");
        })

        const updateIncrement = document.createElement('img');
        updateIncrement.classList = 'incrementButton';
        updateIncrement.src = "../../assets/images/icon-increment-quantity.svg";
        updateIncrement.addEventListener('click', () => {
          item.quantity++;
          updateCartDisplay();
        });

        // Create a span for the text
        const updateText = document.createElement("p");
        updateText.textContent ="4"; // update quantity


        const updateDecrement = document.createElement('img');
        updateDecrement.classList = 'decrementButton';
        updateDecrement.textContent = "../../assets/images/icon-decrement-quantity.svg";
        updateDecrement.addEventListener('click', () => {
          if (item.quantity > 1) {
            item.quantity--;
            updateCartDisplay();
          } else {
            cart = cart.filter(cartItem => cartItem.product.id !== item.product.id);
            updateCartDisplay();
          }
        });


        
      })
      updateQuantityButton.appendChild(updateText);
        updateQuantityButton.appendChild(updateDecrement);
        updateQuantityButton.appendChild(updateIncrement);  
        productCard.appendChild(updateQuantityButton);
    };
    
  
    // End new code

    



    


    //  End Update Cart Button

    // Append the product card to the container
    productContainer.appendChild(productCard);
  }); // removed - )


// Function to add products to cart
function addToCart(product) {
  let existingProduct = cart.find((item) => item.product.id === product.id);

  if (existingProduct) {
    existingProduct.quantity++;
  } else {
    cart.push({ product: product, quantity: 1 });
  }

  // Show the updateQuantityButton for this product
  const productCard = document.querySelector(`.item-card[data-product-id="${product.id}"]`);
  const updateQuantityButton = document.querySelector('.updateQuantityButton');
  if (updateQuantityButton) {
    updateQuantityButton.style.display = 'block'; // Show the button
  }

  updateCartDisplay();
  }
}

// Function to update cart display
/////////////////////////////////////////

function updateCartDisplay() {
  const cartQuantity = document.getElementById("quantity");
  const cartItemsContainer = document.querySelector(".sidebar__cart-items");

  // Calculate total quantity and total price
  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = cart.reduce((total, item) => total + (item.product.price * item.quantity), 0);

  cartQuantity.textContent = `(${totalQuantity})`;

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

        
        const cartQuantity = document.createElement("p");
        cartQuantity.classList = "cartQuantity";
        cartQuantity.textContent = `${item.quantity}x`;

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
        icon.src = "../../assets/images/icon-remove-item.svg"; // Path to your SVG file
        icon.alt = "Close Icon"; // Accessibility text
        icon.style.width = "20px"; // Adjust size as needed
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
      secondRow.appendChild(cartQuantity);
      secondRow.appendChild(costPerItem);
      secondRow.appendChild(itemTotal);
      
      cartItemsContainer.appendChild(itemElement);
      itemElement.appendChild(closeButton);
      cartItemsContainer.appendChild(secondRow);
    })

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
