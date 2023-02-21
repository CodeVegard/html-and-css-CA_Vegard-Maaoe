const key = "ck_ce76707e29bca6491c1a2264e1e99177076b8e77";
const secret = "cs_95db7727bef7886304f909ba0852363c0d80bacd";

const checkoutBox = document.querySelector(".checkout");
const productContainer = document.querySelector(".summary");
const queryString = document.location.search;
const parameter = new URLSearchParams(queryString);
const id = parameter.get("id");

const productURL = `https://sellmo.no/Flower_Power/wp-json/wc/v3/products/0?id=${id}&consumer_key=${key}&consumer_secret=${secret}`;

async function createCheckoutProduct() {
  const productResponse = await fetch(productURL);
  const productInfo = await productResponse.json();

  document.title = productInfo.name;
  if (productInfo.on_sale === true && productInfo.stock_status !== "instock") {
    productContainer.innerHTML = `
        <h1>Order Summary:</h1>
        <img src="${productInfo.images[0].src}" class="webshop_rowpic" alt="The Jacket" title="The Jacket" />
        <h2 class="product_name">${productInfo.name}</h2>
        ${productInfo.short_description}
        <p class="sale">On sale! Now ${productInfo.sale_price} kr</p>
        <p class="not-in-stock">Not in Stock</p>
        <p class="price strikethrough">${productInfo.regular_price} kr</p>
  `;
  } else 
  if (productInfo.on_sale === true && productInfo.stock_status === "instock") {
    productContainer.innerHTML = `
        <h1>Order Summary:</h1>
        <img src="${productInfo.images[0].src}" class="webshop_rowpic" alt="The Jacket" title="The Jacket" />
        <h2 class="product_name">${productInfo.name}</h2>
        ${productInfo.short_description}
        <p class="sale">On sale! Now ${productInfo.sale_price} kr</p>
        <p class="price strikethrough">${productInfo.regular_price} kr</p>
  `;
  } else 
  if (productInfo.stock_status !== "instock") {
    productContainer.innerHTML = `
        <h1>Order Summary:</h1>
        <img src="${productInfo.images[0].src}" class="webshop_rowpic" alt="The Jacket" title="The Jacket" />
        <h2 class="product_name">${productInfo.name}</h2>
        ${productInfo.short_description}
        <p class="not-in-stock">Not in Stock</p>
        <p class="product_description">${productInfo.price} kr</p>
  `;
  } else {
    productContainer.innerHTML = `
          <h1>Order Summary:</h1>
          <img src="${productInfo.images[0].src}" class="webshop_rowpic" alt="The Jacket" title="The Jacket" />
          <h2 class="product_name">${productInfo.name}</h2>
          ${productInfo.short_description}
          <p class="product_description">${productInfo.price} kr</p>
    `;
  }
}

createCheckoutProduct();