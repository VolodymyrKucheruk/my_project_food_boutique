// let productCount = 0;

// function addProduct() {
//   productCount++;
//   showProductCount();
// }

// function showProductCount() {
//   document.querySelector('.header-cart span').textContent = productCount;
// }

// document
//   .querySelector('.header-home-icon')
//   .addEventListener('click', addProduct);

// showProductCount();

let productCount = 0;
let cart = [];

function addProduct() {
  cart.push({
    name: 'Product name',
    price: 100,
  });

  productCount = cart.length;

  showProductCount();
}

function showProductCount() {
  document.querySelector('.header-cart span').textContent = productCount;
}

document.querySelector('.header-home').addEventListener('click', addProduct);

showProductCount();
