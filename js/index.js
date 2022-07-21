// ITERATION 1
function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const price = product.querySelector('.price span').textContent;
  const quantity = product.querySelector('.quantity input').value;
  const subtotal = price * quantity;

  product.querySelector(".subtotal span").textContent = subtotal;
  return subtotal;
}
// ITERATION 2
function calculateAll() {
  const singleProduct = document.getElementsByClassName("product");
  updateSubtotal(singleProduct[0]);
  updateSubtotal(singleProduct[1]);
  console.log(singleProduct)

  let shoppingCart = document.querySelector("#cart");
  let allProducts = shoppingCart.querySelectorAll(".product");
  let total = 0;
  allProducts.forEach((element) => {
    total += updateSubtotal(element);
  });


  // ITERATION 3
  document.querySelector('#total-value span').innerText = total.toFixed(2);
}


// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
