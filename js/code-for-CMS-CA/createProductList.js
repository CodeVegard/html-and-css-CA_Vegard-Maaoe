const mensItemsContainer = document.querySelector(".men");
const womensItemsContainer = document.querySelector(".women")
const key = "ck_ce76707e29bca6491c1a2264e1e99177076b8e77";
const secret = "cs_95db7727bef7886304f909ba0852363c0d80bacd";
const unauthorizedUrl = "https://sellmo.no/Flower_Power/wp-json/wc/v3/products?";

const inStockMenBtn = document.querySelector("#in-stock-men")


async function createAllProducts() {
  const fullUrl = `${unauthorizedUrl}consumer_key=${key}&consumer_secret=${secret}`;

  const response = await fetch(fullUrl);
  const finishedResponse = await response.json();

  mensItemsContainer.classList.remove("loader");
  womensItemsContainer.classList.remove("loader");

  mensItemsContainer.innerHTML = "";
  womensItemsContainer.innerHTML = "";

  for (let i = 0; i < finishedResponse.length; i++) {
    const product = finishedResponse[i];

    if (product.stock_status !== "instock" && product.tags[0].name === "men" && inStockMenBtn.checked === false) {
      mensItemsContainer.innerHTML += `
          <div class="picwlink">
            <a href="product.html?id=${product.id}">
              <img class="webshop_rowpic" src="${product.images[0].src}" alt="${product.images[0].alt}" title="${product.images[0].name}" />
            </a>
            <h3 class="feat_prod_head">${product.name}</h3>
            ${product.short_description}
            <p class="not-in-stock">Not in Stock</p>
            <a class="cta_btn" href="product.html?id=${product.id}">Buy Now!</a>
          </div>
          `;
    }
    if (product.stock_status === "instock" && product.tags[0].name === "men" && inStockMenBtn.checked === false) {
      mensItemsContainer.innerHTML += `
          <div class="picwlink">
            <a href="product.html?id=${product.id}">
              <img class="webshop_rowpic" src="${product.images[0].src}" alt="${product.images[0].alt}" title="${product.images[0].name}" />
            </a>
            <h3 class="feat_prod_head">${product.name}</h3>
            ${product.short_description}
            <a class="cta_btn" href="product.html?id=${product.id}">Buy Now!</a>
          </div>
          `;
    }
    if (product.stock_status === "instock" && product.tags[0].name === "men" && inStockMenBtn.checked === true) {
      mensItemsContainer.innerHTML += `
          <div class="picwlink">
            <a href="product.html?id=${product.id}">
              <img class="webshop_rowpic" src="${product.images[0].src}" alt="${product.images[0].alt}" title="${product.images[0].name}" />
            </a>
            <h3 class="feat_prod_head">${product.name}</h3>
            ${product.short_description}
            <a class="cta_btn" href="product.html?id=${product.id}">Buy Now!</a>
          </div>
          `;
    }


    if (product.stock_status === "instock" && product.tags[0].name === "women" && inStockMenBtn.checked === false) {
      womensItemsContainer.innerHTML += `
          <div class="picwlink">
            <a href="product.html?id=${product.id}">
              <img class="webshop_rowpic" src="${product.images[0].src}" alt="${product.images[0].alt}" title="${product.images[0].name}" />
            </a>
            <h3 class="feat_prod_head">${product.name}</h3>
            ${product.short_description}
            <a class="cta_btn" href="product.html?id=${product.id}">Buy Now!</a>
          </div>
          `;
    }
    if (product.stock_status !== "instock" && product.tags[0].name === "women" && inStockMenBtn.checked === false) {
      womensItemsContainer.innerHTML += `
          <div class="picwlink">
            <a href="product.html?id=${product.id}">
              <img class="webshop_rowpic" src="${product.images[0].src}" alt="${product.images[0].alt}" title="${product.images[0].name}" />
            </a>
            <h3 class="feat_prod_head">${product.name}</h3>
            ${product.short_description}
            <p class="not-in-stock">Not in Stock</p>
            <a class="cta_btn" href="product.html?id=${product.id}">Buy Now!</a>
          </div>
          `;
    }
    if (product.stock_status === "instock" && product.tags[0].name === "women" && inStockMenBtn.checked === true) {
      womensItemsContainer.innerHTML += `
          <div class="picwlink">
            <a href="product.html?id=${product.id}">
              <img class="webshop_rowpic" src="${product.images[0].src}" alt="${product.images[0].alt}" title="${product.images[0].name}" />
            </a>
            <h3 class="feat_prod_head">${product.name}</h3>
            ${product.short_description}
            <a class="cta_btn" href="product.html?id=${product.id}">Buy Now!</a>
          </div>
          `;
    }
  }
};

createAllProducts();

function checkCheckbox() {
  console.log(inStockMenBtn.checked);
};



inStockMenBtn.addEventListener("change", (event) => checkCheckbox());
inStockMenBtn.addEventListener("change", (event) => createAllProducts());