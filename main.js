let productGrid = document.getElementById("product-grid");
let searched = document.getElementById("search");
let btn = document.getElementById("btn");

let allProducts = [];

function displayProducts(productsList) {
  productGrid.innerHTML = "";

  if (productsList.length === 0) {
    productGrid.innerHTML = "<p>لا توجد منتجات مطابقة لبحثك.</p>";
    return;
  }
  else{
    productsList.forEach((product) => {
    productGrid.innerHTML += `
      <article class="product-card">
        <div class="product-image">
          <img src="${product.image}" alt="${product.title}">
        </div>
        <div class="product-info">
          <h3>${product.title}</h3>
          <div class="product-bottom">
            <strong>$${product.price.toFixed(2)}</strong>
            <span class="rating">★ ${product.rating.rate} <small>(${product.rating.count})</small></span>
          </div>
        </div>
      </article>
    `;
  });
}
  };
  fetch("https://fakestoreapi.com/products/")
  .then((response) => response.json())
  .then((products) => {
    allProducts = products; 
    displayProducts(allProducts);
  })
  .catch((error) => {
    productGrid.innerHTML = "<p>Failed to load products.</p>";
    console.log(error);
  });
searched.addEventListener("input", () => {

  let searchText = searched.value.trim().toLowerCase();

  let filteredProducts = allProducts.filter((product) =>
    product.title.toLowerCase().includes(searchText)
  );

  displayProducts(filteredProducts);
});
btn.addEventListener("click",() =>{
  if(searched.classList.contains("show")){
      searched.classList.replace("show","hidden")
  }
  else{
    searched.classList ="show"
  }
})

function getYear() {
        let currentDate = new Date();
        let currentYear = currentDate.getFullYear();
        document.querySelector("#displayYear").innerHTML = currentYear;
}
getYear();