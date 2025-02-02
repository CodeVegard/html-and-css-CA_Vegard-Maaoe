const key = "ck_ce76707e29bca6491c1a2264e1e99177076b8e77";
const secret = "cs_95db7727bef7886304f909ba0852363c0d80bacd";

const productContainer = document.querySelector(".product_presentation");
const queryString = document.location.search;
const parameter = new URLSearchParams(queryString);
const id = parameter.get("id");
const productURL = `https://sellmo.no/Flower_Power/wp-json/wc/v3/products/0?id=${id}&consumer_key=${key}&consumer_secret=${secret}`;

async function createProductPage() {
  const productResponse = await fetch(productURL);
  const productInfo = await productResponse.json();

  document.title = productInfo.name;
  if (productInfo.on_sale === true && productInfo.stock_status !== "instock") {
    productContainer.innerHTML = `
    <div class="product_imgs">
        <img class="big_img" src="${productInfo.images[0].src}" alt="${productInfo.images[0].alt}" title="${productInfo.images[0].name}" />
      </div>

      <section class="prod_text">
        <h1 class="product_name">${productInfo.name}</h1>
        ${productInfo.description}
        <p class="sale">On sale! Now ${productInfo.sale_price} kr</p>
        <p class="not-in-stock">Not in Stock</p>
        <p class="price strikethrough">${productInfo.regular_price} kr</p>
        <form class="buybox" action="checkout.html" method="GET">
          <label for="buy-id" class="buy">Buy Now</label>
          <input type="submit" id="buy-id" name="id" value="${productInfo.id}" />
          <label for="cart-id" class="cart">Add to cart</label>
          <input type="submit" id="cart-id" name="id" value="${productInfo.id}" />
        </form>
      </section>
    </div>
    `;
  } else
  if (productInfo.on_sale === true) {
    productContainer.innerHTML = `
    <div class="product_imgs">
        <img class="big_img" src="${productInfo.images[0].src}" alt="${productInfo.images[0].alt}" title="${productInfo.images[0].name}" />
      </div>
      <section class="prod_text">
        <h1 class="product_name">${productInfo.name}</h1>
        ${productInfo.description}
        <p class="sale">On sale! Now ${productInfo.sale_price} kr</p>
        <p class="price strikethrough">${productInfo.regular_price} kr</p>
        <form class="buybox" action="checkout.html" method="GET">
          <label for="buy-id" class="buy">Buy Now</label>
          <input type="submit" id="buy-id" name="id" value="${productInfo.id}" />
          <label for="cart-id" class="cart">Add to cart</label>
          <input type="submit" id="cart-id" name="id" value="${productInfo.id}" />
        </form>
      </section>
    </div>
    `;
  } else
  if (productInfo.stock_status !== "instock") {
    productContainer.innerHTML = `
    <div class="product_imgs">
        <img class="big_img" src="${productInfo.images[0].src}" alt="${productInfo.images[0].alt}" title="${productInfo.images[0].name}" />
      </div>
      <section class="prod_text">
        <h1 class="product_name">${productInfo.name}</h1>
        ${productInfo.description}
        <p class="not-in-stock">Not in Stock</p>
        <p class="price">${productInfo.price} kr</p>
        <form class="buybox" action="checkout.html" method="GET">
          <label for="buy-id" class="buy">Buy Now</label>
          <input type="submit" id="buy-id" name="id" value="${productInfo.id}" />
          <label for="cart-id" class="cart">Add to cart</label>
          <input type="submit" id="cart-id" name="id" value="${productInfo.id}" />
        </form>
      </section>
    </div>
    `;
  } else {
    productContainer.innerHTML = `
    <div class="product_imgs">
        <img class="big_img" src="${productInfo.images[0].src}" alt="${productInfo.images[0].alt}" title="${productInfo.images[0].name}" />
      </div>
      <section class="prod_text">
        <h1 class="product_name">${productInfo.name}</h1>
        ${productInfo.description}
        <p class="price">${productInfo.price} kr</p>
        <form class="buybox" action="checkout.html" method="GET">
          <label for="buy-id" class="buy">Buy Now</label>
          <input type="submit" id="buy-id" name="id" value="${productInfo.id}" />
          <label for="cart-id" class="cart">Add to cart</label>
          <input type="submit" id="cart-id" name="id" value="${productInfo.id}" />
        </form>
      </section>
    </div>
    `;
  }
}

createProductPage();