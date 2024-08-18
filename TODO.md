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




<div class="row">
                <div class="items" id="product-container">

                  <div class="item-card product-card">
                    
                    <!-- <div class="item-card__image">
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
                    </div> -->
                  </div>
                  
                  <div class="item-card product-card">
                    <!-- <div class="item-card__image">
                      <img src="./assets/images/image-creme-brulee-desktop.jpg" alt="Dessert Image" class="product-image">
                    </div>
                    <div class="item-card__button">
                      <a href="#" class="button">
                        <button class="btn"><img src="./assets/images/icon-add-to-cart.svg" alt=""> Add to Cart</button>
                      </a>
                    </div>
                    <div class="item-card__title">
                      <p class="title">Crème Brûlée</p>
                    </div>
                    <div class="item-card__description">
                      <p class="description">Vanilla Bean Crème Brûlée</p>
                    </div>
                    <div class="item-card__price">
                      <p class="price">$7.00</p>
                    </div> -->
                  </div>

                  <div class="item-card product-card">
                    <!-- <div class="item-card__image">
                      <img src="./assets/images/image-macaron-desktop.jpg" alt="Dessert Image" class="product-image">
                    </div>
                    <div class="item-card__button">
                      <a href="#" class="button">
                        <button class="btn"><img src="./assets/images/icon-add-to-cart.svg" alt=""> Add to Cart</button>
                      </a>
                    </div>
                    <div class="item-card__title">
                      <p class="title">Macaron</p>
                    </div>
                    <div class="item-card__description">
                      <p class="description">Macaron Mix of Five</p>
                    </div>
                    <div class="item-card__price">
                      <p class="price">$8.00</p>
                    </div> -->
                  </div>
                </div>
              </div>

              <!-- SECOND ROW -->

              <!-- <div class="row">
                <div class="items">

                  <div class="item-card product-card">
                    <div class="item-card__image">
                      <img src="./assets/images/image-tiramisu-desktop.jpg" alt="Dessert Image" class="product-image">
                    </div>
                    <div class="item-card__button">
                      <a href="#" class="button">
                        <button class="btn"><img src="./assets/images/icon-add-to-cart.svg" alt=""> Add to Cart</button>
                      </a>
                    </div>
                    <div class="item-card__title">
                      <p class="title">Tiramisu</p>
                    </div>
                    <div class="item-card__description">
                      <p class="description">Classic Tiramisu</p>
                    </div>
                    <div class="item-card__price">
                      <p class="price">$5.50</p>
                    </div>
                  </div>
                  
                  <div class="item-card product-card">
                    <div class="item-card__image">
                      <img src="./assets/images/image-baklava-desktop.jpg" alt="Dessert Image" class="product-image">
                    </div>
                    <div class="item-card__button">
                      <a href="#" class="button">
                        <button class="btn"><img src="./assets/images/icon-add-to-cart.svg" alt=""> Add to Cart</button>
                      </a>
                    </div>
                    <div class="item-card__title">
                      <p class="title">Baklava</p>
                    </div>
                    <div class="item-card__description">
                      <p class="description">Pistachio Baklava</p>
                    </div>
                    <div class="item-card__price">
                      <p class="price">$4.00</p>
                    </div>
                  </div>

                  <div class="item-card product-card">
                    <div class="item-card__image">
                      <img src="./assets/images/image-meringue-desktop.jpg" alt="Dessert Image" class="product-image">
                    </div>
                    <div class="item-card__button">
                      <a href="#" class="button">
                        <button class="btn"><img src="./assets/images/icon-add-to-cart.svg" alt=""> Add to Cart</button>
                      </a>
                    </div>
                    <div class="item-card__title">
                      <p class="title">Pie</p>
                    </div>
                    <div class="item-card__description">
                      <p class="description">Lemon Meringue Pie</p>
                    </div>
                    <div class="item-card__price">
                      <p class="price">$5.00</p>
                    </div>
                  </div>
                </div>
              </div> -->

              <!-- THIRD ROW -->

              <!-- <div class="row">
                <div class="items">

                  <div class="item-card product-card">
                    <div class="item-card__image">
                      <img src="./assets/images/image-cake-desktop.jpg" alt="Dessert Image" class="product-image">
                    </div>
                    <div class="item-card__button">
                      <a href="#" class="button">
                        <button class="btn"><img src="./assets/images/icon-add-to-cart.svg" alt=""> Add to Cart</button>
                      </a>
                    </div>
                    <div class="item-card__title">
                      <p class="title">Cake</p>
                    </div>
                    <div class="item-card__description">
                      <p class="description">Red Velvet Cake</p>
                    </div>
                    <div class="item-card__price">
                      <p class="price">$4.50</p>
                    </div>
                  </div>
                  
                  <div class="item-card product-card">
                    <div class="item-card__image">
                      <img src="./assets/images/image-brownie-desktop.jpg" alt="Dessert Image" class="product-image">
                    </div>
                    <div class="item-card__button">
                      <a href="#" class="button">
                        <button class="btn"><img src="./assets/images/icon-add-to-cart.svg" alt=""> Add to Cart</button>
                      </a>
                    </div>
                    <div class="item-card__title">
                      <p class="title">Brownie</p>
                    </div>
                    <div class="item-card__description">
                      <p class="description">Salted Caramel Brownie</p>
                    </div>
                    <div class="item-card__price">
                      <p class="price">$4.50</p>
                    </div>
                  </div>

                  <div class="item-card product-card">
                    <div class="item-card__image">
                      <img src="./assets/images/image-panna-cotta-desktop.jpg" alt="Dessert Image" class="product-image">
                    </div>
                    <div class="item-card__button">
                      <a href="#" class="button">
                        <button class="btn"><img src="./assets/images/icon-add-to-cart.svg" alt=""> Add to Cart</button>
                      </a>
                    </div>
                    <div class="item-card__title">
                      <p class="title">Panna Cotta</p>
                    </div>
                    <div class="item-card__description">
                      <p class="description">Vanilla Panna Cotta</p>
                    </div>
                    <div class="item-card__price">
                      <p class="price">$6.50</p>
                    </div>
                  </div>
                </div>
              </div> -->

            </div>


            <div class="item-card product-card">
                    
                    <!-- <div class="item-card__image">
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
                    </div> -->
                  </div>
                  
                  <div class="item-card product-card">
                    <!-- <div class="item-card__image">
                      <img src="./assets/images/image-creme-brulee-desktop.jpg" alt="Dessert Image" class="product-image">
                    </div>
                    <div class="item-card__button">
                      <a href="#" class="button">
                        <button class="btn"><img src="./assets/images/icon-add-to-cart.svg" alt=""> Add to Cart</button>
                      </a>
                    </div>
                    <div class="item-card__title">
                      <p class="title">Crème Brûlée</p>
                    </div>
                    <div class="item-card__description">
                      <p class="description">Vanilla Bean Crème Brûlée</p>
                    </div>
                    <div class="item-card__price">
                      <p class="price">$7.00</p>
                    </div> -->
                  </div>

                  <div class="item-card product-card">
                    <!-- <div class="item-card__image">
                      <img src="./assets/images/image-macaron-desktop.jpg" alt="Dessert Image" class="product-image">
                    </div>
                    <div class="item-card__button">
                      <a href="#" class="button">
                        <button class="btn"><img src="./assets/images/icon-add-to-cart.svg" alt=""> Add to Cart</button>
                      </a>
                    </div>
                    <div class="item-card__title">
                      <p class="title">Macaron</p>
                    </div>
                    <div class="item-card__description">
                      <p class="description">Macaron Mix of Five</p>
                    </div>
                    <div class="item-card__price">
                      <p class="price">$8.00</p>
                    </div> -->
                  </div>


project-root/
├── src/
│   ├── stylesheets/
│   │   └── index.css
│   ├── scripts/
│   │   └── scripts.js
│   
├── assets/
│   │   └── fonts 
        └── images   
├── index.html
├── data.json
└── README.md
