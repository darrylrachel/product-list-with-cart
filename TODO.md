# Project to do

1. Layout HTML Structure
2. Add styling
3. Add Javascript
4. Integrate blockchain functionalities like Ethereum and Solidity

Implementing the core features:

### 1. **Product Listing**

- Ensure that your `data.json` is correctly populated with product information.
- Use JavaScript to dynamically generate the product cards on the page by looping through the `data.json` file.

### 2. **Shopping Cart Functionality**

- Create functions to add, remove, and update product quantities in the cart.
- Store the cart data in localStorage so that it persists between page reloads.

### 3. **Responsive Design**

- Utilize media queries to ensure the site is fully responsive across different devices.
- Consider using Flexbox or CSS Grid for layout management.

### Next Steps:

1. **Connect your product data** to the frontend using JavaScript.
2. **Implement event listeners** for adding/removing items from the cart.
3. **Update the cart dynamically** as items are added or removed.

Get images to display
Add styles

Make the button exactly like other buttons
Set to display none
Once clicked display 100%
Use JS to listen to click for transition betwwen states

<div class="item-card__button">
  <a href="#" class="button">
    <button class="btn"><img src="./assets/images/icon-add-to-cart.svg" alt="">1</button>
  </a>
</div>

```Javascript
// Add the "Update cart" button
    const updateCart = document.createElement('button');
    button.classList = 'item-card__button btn quantityBtn';

    // Create the img elements for the add icon
    const increment = document.createElement('img');
    increment.src = './assets/images/icon-increment-quantity.svg'; // Path to your SVG file
    increment.alt = 'Increment quantity'; // Accessibility text
    increment.style.width = '16px'; // Adjust size as needed
    increment.style.height = '16px';

    // Create the img elements for the minus icon
    const decrement = document.createElement('img');
    decrement.src = './assets/images/icon-decrement-quantity.svg'; // Path to your SVG file
    decrement.alt = 'Decrement quantity'; // Accessibility text
    decrement.style.width = '16px'; // Adjust size as needed
    decrement.style.height = '16px';

    // Create a span for the text
    const updateCartext = document.createElement('span');
    updateCartText.textContent = ' 1 ';

    // Append img and text to button
    button.appendChild(icon);
    button.appendChild(text);

    // Append button to product card
    productCard.appendChild(button);

~~~ Javascript









<div class="row">
  <div class="items" id="product-container">
    <div class="item-card product-card">
      <div class="item-card__image">
        <img src="./assets/images/image-waffle-desktop.jpg" alt="Dessert Image" class="product-image">
      </div>
      <div class="item-card__button">
        <a href="#" class="button">
          <button class="btn"><img src="./assets/images/icon-add-to-cart.svg" alt=""> Add to Cart</button>
        </a>
      </div>
      <div class="item-card__title">
        <p class="title">Waffle</p>
      </div>
      <div class="item-card__description">
        <p class="description">Waffle with Blueberries</p>
      </div>
      <div class="item-card__price">
        <p class="price">$6.50</p>
      </div>
      </div>
    </div>
  </div>
</div>







project-root/
├── assets/
│   │   └── fonts
|       └── images
├── src/
│   ├── stylesheets/
│   │   └── index.css
│   ├── scripts/
│   │   └── scripts.js
│
├── index.html
├── data.json
```
