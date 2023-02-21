const featuredItemsContainer = document.querySelector(".webshop_row");
const key = "ck_ce76707e29bca6491c1a2264e1e99177076b8e77";
const secret = "cs_95db7727bef7886304f909ba0852363c0d80bacd";
const unauthorizedUrl = "https://sellmo.no/Flower_Power/wp-json/wc/v3/products?";

const featureRow = document.querySelector(".webshop_row");

async function createFeaturedProducts() {
  const fullUrl = `${unauthorizedUrl}consumer_key=${key}&consumer_secret=${secret}`;

  const response = await fetch(fullUrl);
  const finishedResponse = await response.json();

  let featuredProducts = [];

  featuredItemsContainer.classList.remove("loader");

  for (let i = 0; i < finishedResponse.length; i++) {
    const product = finishedResponse[i];
    if (product.featured === true && product.stock_status !== "instock" && product.on_sale === true) {
      featuredProducts.push(product);
      featuredItemsContainer.innerHTML += `<div class="picwlink">
      <a href="product.html?id=${product.id}">
        <img class="webshop_rowpic" src="${product.images[0].src}" alt="${product.images[0].alt}" title="${product.images[0].name}" />
      </a>
      <h3 class="feat_prod_head">${product.name}</h3>
      ${product.short_description}
      <p class="sale">On sale! Now ${product.sale_price} kr</p>
      <p class="not-in-stock">Not in Stock</p>
      <p class="price strikethrough">${product.regular_price} kr</p>
      <a class="cta_btn" href="product.html?id=${product.id}">Buy Now!</a>
    </div>
    `;
    } else
    if (product.featured === true && product.stock_status === "instock" && product.on_sale === true) {
      featuredProducts.push(product);
      featuredItemsContainer.innerHTML += `<div class="picwlink">
      <a href="product.html?id=${product.id}">
        <img class="webshop_rowpic" src="${product.images[0].src}" alt="${product.images[0].alt}" title="${product.images[0].name}" />
      </a>
      <h3 class="feat_prod_head">${product.name}</h3>
      ${product.short_description}
      <p class="sale">On sale! Now ${product.sale_price} kr</p>
      <p class="price strikethrough">${product.regular_price} kr</p>
      <a class="cta_btn" href="product.html?id=${product.id}">Buy Now!</a>
    </div>
    `;
    } else
    if (product.featured === true && product.stock_status === "instock") {
      featuredProducts.push(product);
      featuredItemsContainer.innerHTML += `
            <div class="picwlink">
              <a href="product.html?id=${product.id}">
                <img class="webshop_rowpic" src="${product.images[0].src}" alt="${product.images[0].alt}" title="${product.images[0].name}" />
              </a>
              <h3 class="feat_prod_head">${product.name}</h3>
              ${product.short_description}
              <p class="price">${product.regular_price} kr</p>
              <a class="cta_btn" href="product.html?id=${product.id}">Buy Now!</a>
            </div>
            `;
    } else
    if (product.featured === true && product.stock_status !== "instock") {
      featuredProducts.push(product);
      featuredItemsContainer.innerHTML += `
            <div class="picwlink">
              <a href="product.html?id=${product.id}">
                <img class="webshop_rowpic" src="${product.images[0].src}" alt="${product.images[0].alt}" title="${product.images[0].name}" />
              </a>
              <h3 class="feat_prod_head">${product.name}</h3>
              ${product.short_description}
              <p class="not-in-stock">Not in Stock</p>
              <p class="price">${product.regular_price} kr</p>
              <a class="cta_btn" href="product.html?id=${product.id}">Buy Now!</a>
            </div>
            `;
    }
    if (featuredProducts.length > 3) {
      featureRow.classList.remove("webshop_row");
      featureRow.classList.add("overflow");
    }
  }
};

setTimeout(() => {
  createFeaturedProducts();
}, 1000);