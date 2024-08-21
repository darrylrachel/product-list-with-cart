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


~~~ CSS File

@import url('https://fonts.googleapis.com/css2?family=Red+Hat+Text:ital,wght@0,300..700;1,300..700&display=swap');

:root {
  --red: hsl(14, 86%, 42%);
  --green: hsl(159, 69%, 38%);
  --rose_50: hsl(20, 50%, 98%);
  --rose_100: hsl(13, 31%, 94%);
  --rose_300: hsl(14, 25%, 72%);
  --rose_400: hsl(7, 20%, 60%);
  --rose_500: hsl(12, 20%, 44%);
  --rose_900: hsl(14, 65%, 9%);

  --product_names: 16px;

  --red_hat: 'Red Hat Text', sans-serif;
  --fw_400: 400;
  --fw_600: 600;
  --fw_700: 700;
}

/* Box sizing rules */
*,
*::before,
*::after {
  box-sizing: border-box;
}

/* Prevent font size inflation */
html {
  -moz-text-size-adjust: none;
  -webkit-text-size-adjust: none;
  text-size-adjust: none;
}

/* Remove default margin in favour of better control in authored CSS */
body,
h1,
h2,
h3,
h4,
p,
figure,
blockquote,
dl,
dd {
  margin-block-end: 0;
}

/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
ul[role='list'],
ol[role='list'] {
  list-style: none;
}

/* Set core body defaults */
body {
  min-height: 100vh;
  line-height: 1.5;
  font-family: var(--red_hat);
  font-size: 16px;
  background-color: var(--rose_50);
}

/* Set shorter line heights on headings and interactive elements */
h1,
h2,
h3,
h4,
button,
input,
label {
  line-height: 1.1;
}

/* Balance text wrapping on headings */
h1,
h2,
h3,
h4 {
  text-wrap: balance;
}

/* A elements that don't have a class get default styles */
a:not([class]) {
  text-decoration-skip-ink: auto;
  color: currentColor;
}

/* Make images easier to work with */
img,
picture {
  max-width: 100%;
  display: block;
}

/* Inherit fonts for inputs and buttons */
input,
button,
textarea,
select {
  font-family: inherit;
  font-size: inherit;
}

/* Make sure textareas without a rows attribute are not tiny */
textarea:not([rows]) {
  min-height: 10em;
}

/* Anything that has been anchored to should have extra scroll margin */
:target {
  scroll-margin-block: 5ex;
}

/*//////////////////////////////////////////////////////////////
                           GLOBAL STYLES & PROPERTIES
//////////////////////////////////////////////////////////////*/



/*//////////////////////////////////////////////////////////////
                              BROKEN
//////////////////////////////////////////////////////////////*/

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) {
  .main.container-fluid {
    width: 100%;
  }

  .main__row {
    display: flex;
    flex-direction: column;
  }

  .main__main {
    width: 100%;
  }

  .main__header {
    width: 100%;
  }

  .main__header h1.title {
    font-weight: var(--fw_700);
    color: var(--rose_900);
    font-size: 48px;
    padding-top: 80px;
    padding-left: 40px;
    padding-bottom: 32px;
  }

  /* END HEADER */

  .container.product-cards {
    margin-left: 26px;
    margin-bottom: 80px;
  }

  .item-card {
    /* display: flex;
    flex-direction: column;
    width: 88%;
    margin: 0 auto; */
  }

  .item-card__image {
    margin-bottom: 50px;
  }

  .product-image {
    border-radius: 8px;
  }

  .item-card__button {
    border: 1px solid var(--rose_400);
    border-radius: 50px;
    width: 70%;
    padding: 4px 0px;
    background-color: white;
    margin: 0 0;
    text-align: center;
    position: absolute;
    bottom: 102px;
    left: 30px;
  }

  button img {
    display: inline-block;
    width: 20px;
    height: 20px;
    margin-right: 4px;
  }

  button.btn {
    font-size: 14px;
  }

  /*.items {
    display: flex;
    flex-direction: row; /* Why doesn't row work 
    margin-bottom: 32px;
  }
  */

  .item-card__title {
    color: var(--rose_500);
    font-size: 14px;
  }

  .item-card__description {
    color: var(--rose_900);
    font-weight: 600;
    font-size: 14px;
  }

  .item-card__price {
    color: var(--red);
    font-weight: 600;
    font-size: 14px;
  }

  .item-card__description,
  .item-card__price {
    margin-top: 2px;
  }

  /* Sidebar */

  .main__side {
    /* border: 1px dashed magenta; */
    width: 100%;
    margin-bottom: 60px;
  }

  .sidebar {
    /* border: 1px solid black; */
    background-color: white;
    border-radius: 12px;
    padding: 24px;
  }

  .quantity {
    color: var(--red);
    font-size: 24px;
    font-weight: var(--fw_600);
  }

  .sidebar__cart-items {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-top: 80px;
  }

  p.text {
    color: var(--rose_500);
    font-weight: var(--fw_600);
    font-size: 14px;
    margin-top: 20px;
    margin-bottom: 20px;
  }
}

/*//////////////////////////////////////////////////////////////
                ^^^         BROKEN
//////////////////////////////////////////////////////////////*/




