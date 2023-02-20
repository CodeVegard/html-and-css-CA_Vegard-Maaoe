const key = "ck_ce76707e29bca6491c1a2264e1e99177076b8e77";
const secret = "cs_95db7727bef7886304f909ba0852363c0d80bacd";

const checkoutBox = document.querySelector(".checkout");
const productContainer = document.querySelector(".billing");
const id = window.location.search.match(/[0-9]+/);
// The value produced in the URL isn't "id=123", but "id%3D123" (encoded). 
// If I can figure out a way to make the URL query work properly, I'll change this.
// This way of working is kind of an uggabugga solution

const productURL = `https://sellmo.no/Flower_Power/wp-json/wc/v3/products/0?id=${id}&consumer_key=${key}&consumer_secret=${secret}`;

async function createCheckoutProduct() {
    const productResponse = await fetch(productURL);
    const productInfo = await productResponse.json();
    console.log(productInfo);

    document.title = productInfo.name;
    if (productInfo.stock_status === "instock") {
      console.log("in stock");
        productContainer.innerHTML = `
          <h1>Order Summary:</h1>
          <img src="${productInfo.images[0].src}" class="webshop_rowpic" alt="The Jacket" title="The Jacket" />
          <h2 class="product_name">${productInfo.name}</h2>
          ${productInfo.short_description}
          <p class="product_description">${productInfo.price} kr</p>
    `;
    } else
      if (productInfo.stock_status !== "instock"){
      console.log("not in stock");
        productContainer.innerHTML = `
        <h1>Order Summary:</h1>
        <img src="${productInfo.images[0].src}" class="webshop_rowpic" alt="The Jacket" title="The Jacket" />
        <h2 class="product_name">${productInfo.name}</h2>
        ${productInfo.short_description}
        <p class="product_description">${productInfo.price} kr</p>
  `;  
  checkoutBox.innerHTML +=`<p class="not-in-stock">Not in Stock. This item will ship as soon as possible, you will receive updates to your email when it is sent</p>`;
    }
}

createCheckoutProduct();