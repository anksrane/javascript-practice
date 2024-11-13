// all variable declaration
const apiUrl = "https://fakestoreapi.com/products";
var btnCart = document.querySelector(".btn-cart");
var closeCartBtn = document.querySelector(".close-cart");
let cart = [];
const productList = [];

// function executions-------------------
// Btn Cart on Navbar
btnCart.addEventListener("click", toggleCart);

// Close Button on Cart
closeCartBtn.addEventListener("click", toggleCart);

// Get Prodcut List
fetchProducts();
// console.log('Product list fetched successfully:', productList);

// Function Definations------------------
// toggle Cart
function toggleCart(params) {
  var cartContainer = document.querySelector(".cart-products-container");
  if (cartContainer) {
    cartContainer.classList.toggle("active");
  }
}

// Reusable function to fetch data from any API
async function fetchProducts() {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    // const response = await fetch("/shopping-website-js/products/products.js");
    const data = await response.json();
    // Assign the fetched data to the global constant variable
    productList.push(...data); // Adding data to productList
    // console.log("Product list fetched successfully:", productList);

    let productListContainer = document.querySelector(
      ".products-list-container"
    );

    // Fix: Remove the extra return statement and write the template correctly
    let productHtml = productList
      .map(function (product) {
        return ` 
        <div class="product-outer-container">
            <div class="product-img-container">
                <img src="${product.image}" alt="${product.title}" class="img-fluid prod-img">
            </div>
            <div class="product-info">
                <h5 class="prod-category">${product.category}</h5>
                <h4 class="prod-title">${product.title}</h4>
                <h2 class="prod-price">$${product.price}</h2>
            </div>
            <button class="btn add-to-cart-btn" onclick="addToCart(${product.id})">Add to Cart</button>
        </div>
    `;
      })
      .join("");
    //   console.log(productHtml);  // This will show the generated HTML in the console

    // Add the generated HTML to the container in the DOM
    productListContainer.innerHTML = productHtml;
  } catch (error) {
    console.error("Error fetching products:", error);
  }
}

// Function Add To Cart
function addToCart(productId) {
    // Check if the product is already in the cart
    const existingProduct = cart.find(p => p.id === productId);

    if (existingProduct) {
        // If the product is already in the cart, show an alert
        alert("Product already added!");
    } else {
        // Find the product in the productList by ID
        const product = productList.find(p => p.id === productId);

        // If not in cart, add new product with quantity 1
        cart.push({ ...product, quantity: 1 });

        // Update the cart display
        updateCart();
    }
}

// update cart
function updateCart() {
  const cartListContainer = document.querySelector(".cart-content");
  const cartTotalContainer = document.querySelector(".total-price");
  // Clear current cart
  cartListContainer.innerHTML = "";
  let total=0;
  cart.forEach(product=>{
    const totalPrice = product.price * product.quantity;
    total += totalPrice;
    var cartItem=`
    <div class="cart-box">
        <img src="${product.image}" alt="${product.title}" class="cart-img">
        <div class="detail-box">
            <div class="cart-product-title">${product.title}</div>
            <div class="cart-price">${product.price.toFixed(2)}</div>
            <input type="number" value="${product.quantity}" class="cart-quantity" min="1" data-index="${product.id}" onchange="updateQuantity(event)">
        </div>
        <!-- Remove Cart -->
        <i class="fa-solid fa-trash text-danger cart-remove" onclick="removeCart(${product.id})"></i>
    </div>
    `;
    cartListContainer.insertAdjacentHTML("beforeend", cartItem);
  });
  cartTotalContainer.innerText = total.toFixed(2);
  document.querySelector(".counter").innerHTML=cart.length;
}

// Update Quantity
function updateQuantity(event) {
  let quantity=parseInt(event.target.value);
  let item=cart.find(p => p.id == event.target.dataset.index);
  if(item){
    item.quantity=parseInt(quantity);
  }else{
    alert("Item not found");
  }
  updateCart();
}

// Remove cart
function removeCart(productId) {
    cart = cart.filter(p => p.id != productId);
    updateCart();
    if(cart.length==0){
      document.querySelector(".cart-content").innerHTML=`<h5 class="text-center">No item added to cart</h5>`;
    }
}

