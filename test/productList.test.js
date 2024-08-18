import { expect } from 'chai';

/*//////////////////////////////////////////////////////////////
              TEST CASE 1: CHECK IF PRODUCTS ARE DISPLAYED
//////////////////////////////////////////////////////////////*/
describe('Product Listing', () => {
  it('should display products on the page', () => {
    const products = [
      { name: 'Product 1', price: 19.99, image: 'image1.jpg' },
      { name: 'Product 2', price: 29.99, image: 'image2.jpg' }
    ];
    const productContainer = { innerHTML: ' '};

    function displayProducts(products) {
      products.forEach (product => {
        const productCard = `
          <div class="product-card">
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.category}</h3>
            <h3>${product.name}</h3>
            <p>$${product.price}</p>
            <button class="add-to-cart">Add to Cart</button>
          </div>
        `;
        productContainer.innerHTML += productCard;
      });
    }

    displayProducts(products);

    expect(productContainer.innerHTML).to.include('Product 1');
    expect(productContainer.innerHTML).to.include('Product 2');
  });
});

/*//////////////////////////////////////////////////////////////
             TEST CASE 2: CHECK IF ITEMS ARE ADDED TO CART
//////////////////////////////////////////////////////////////*/

describe('Add to Cart', () => {
  let cart;

  beforeEach(() => {
    cart = [];
  });

  function addToCart(name, price) {
    const product = { name, price, quantity: 1 };
    cart.push(product);
  }

  it('should add a product to the cart', () => {
    addToCart('Product 1', 19.99);
    expect(cart).to.have.lengthOf(1);
    expect(cart[0]).to.deep.include({ name: 'Product 1', price: 19.99});
  });
});