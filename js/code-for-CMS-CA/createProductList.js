const mensItemsContainer = document.querySelector(".men");
const womensItemsContainer = document.querySelector(".women");
const key = "ck_ce76707e29bca6491c1a2264e1e99177076b8e77";
const secret = "cs_95db7727bef7886304f909ba0852363c0d80bacd";
const unauthorizedUrl = "https://sellmo.no/Flower_Power/wp-json/wc/v3/products?";

const inStockBtn = document.querySelector("#in-stock");
const onSaleBtn  = document.querySelector("#on-sale");

function createHTML(container, arr) {

  if (arr.length === 0) {
    container.classList.remove("loader");
    container.innerHTML += '<p>No items to display</p>';
  };

  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    
    container.classList.remove("loader");

    if (item.on_sale === true && item.stock_status !== "instock") {
      container.innerHTML += `
      <div class="picwlink">
        <a href="product.html?id=${item.id}">
          <img class="webshop_rowpic" src="${item.images[0].src}" alt="${item.images[0].alt}" title="${item.images[0].name}" />
        </a>
        <h3 class="feat_prod_head">${item.name}</h3>
        ${item.short_description}
        <p class="sale">On sale! Now ${item.sale_price} kr</p>
        <p class="not-in-stock">Not in Stock</p>
        <p class="price strikethrough">${item.regular_price} kr</p>
        <a class="cta_btn" href="product.html?id=${item.id}">Buy Now!</a>
      </div>
      `;
    } else if (item.stock_status !== "instock") {
      container.innerHTML += `
      <div class="picwlink">
        <a href="product.html?id=${item.id}">
          <img class="webshop_rowpic" src="${item.images[0].src}" alt="${item.images[0].alt}" title="${item.images[0].name}" />
        </a>
        <h3 class="feat_prod_head">${item.name}</h3>
        ${item.short_description}
        <p class="not-in-stock">Not in Stock</p>
        <p class="price">${item.regular_price} kr</p>
        <a class="cta_btn" href="product.html?id=${item.id}">Buy Now!</a>
      </div>
      `;
    } else if (item.on_sale === true) {
      container.innerHTML += `
      <div class="picwlink">
        <a href="product.html?id=${item.id}">
          <img class="webshop_rowpic" src="${item.images[0].src}" alt="${item.images[0].alt}" title="${item.images[0].name}" />
        </a>
        <h3 class="feat_prod_head">${item.name}</h3>
        ${item.short_description}
        <p class="sale">On sale! Now ${item.sale_price} kr</p>
        <p class="price strikethrough">${item.regular_price} kr</p>
        <a class="cta_btn" href="product.html?id=${item.id}">Buy Now!</a>
      </div>
      `;
    }  else {
      container.innerHTML += `
      <div class="picwlink">
        <a href="product.html?id=${item.id}">
          <img class="webshop_rowpic" src="${item.images[0].src}" alt="${item.images[0].alt}" title="${item.images[0].name}" />
        </a>
        <h3 class="feat_prod_head">${item.name}</h3>
        ${item.short_description}
        <p class="price">${item.regular_price} kr</p>
        <a class="cta_btn" href="product.html?id=${item.id}">Buy Now!</a>
      </div>
      `;
    }
  }
};

async function createAllProducts() {
  mensItemsContainer.innerHTML = "";
  womensItemsContainer.innerHTML = "";

  mensItemsContainer.classList.add("loader");
  womensItemsContainer.classList.add("loader");

  const fullUrl = `${unauthorizedUrl}consumer_key=${key}&consumer_secret=${secret}`;

  const response = await fetch(fullUrl);
  const finishedResponse = await response.json();

  let mensArr = finishedResponse.filter(arr => arr.tags[0].name === "men");
  let womensArr = finishedResponse.filter(arr => arr.tags[0].name === "women");

  if (inStockBtn.checked === true) {
    mensArr = mensArr.filter(arr => arr.stock_status === "instock");
    womensArr = womensArr.filter(arr => arr.stock_status === "instock");
  };
  if (onSaleBtn.checked === true) {
    mensArr = mensArr.filter(arr => arr.on_sale === true);
    womensArr = womensArr.filter(arr => arr.on_sale === true);
    console.log(womensArr);
  };

  createHTML(mensItemsContainer, mensArr);
  createHTML(womensItemsContainer, womensArr);

};

setTimeout(() => {
  createAllProducts();
}, 750);

inStockBtn.addEventListener("change", (event) => createAllProducts());
onSaleBtn.addEventListener("change", (event) => createAllProducts());