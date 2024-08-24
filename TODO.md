# Project to do

1. add updateQuantityButton button
3. Set to display none
4. Once clicked display 100%
5. Use JS to listen to click for transition betwwen states


const updateIncrement = document.createElement('img');
        updateIncrement.classList = 'incrementButton';
        updateIncrement.src = "../../assets/images/icon-increment-quantity.svg";
        updateIncrement.addEventListener('click', () => {
          item.quantity++;
          updateCartDisplay();
        });

        // Create a span for the text
        const updateText = document.createElement("p");
        text.textContent ="4"; // update quantity


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


        updateQuantityButton.appendChild(updateText);
        updateQuantityButton.appendChild(updateDecrement);
        updateQuantityButton.appendChild(updateIncrement);  
        productCard.appendChild(updateQuantityButton);







```

