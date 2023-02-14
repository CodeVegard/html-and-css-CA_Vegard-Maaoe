const mensItemsContainer = document.querySelector(".men");
const womensItemsContainer = document.querySelector(".women")
const key = "ck_ce76707e29bca6491c1a2264e1e99177076b8e77";
const secret = "cs_95db7727bef7886304f909ba0852363c0d80bacd";
const unauthorizedUrl  = "https://sellmo.no/Flower_Power/wp-json/wc/v3/products?";

async function createProducts() {
    const fullUrl = `${unauthorizedUrl}consumer_key=${key}&consumer_secret=${secret}`;
    console.log(fullUrl); //URL works

    const response = await fetch(fullUrl);
    const finishedResponse = await response.json();

    for (let i = 0; i < finishedResponse.length; i++) {
        const product = finishedResponse[i];
        
        if (product.stock_status === "instock" && product.tags[0].name === "men") {
            console.log(product);
            mensItemsContainer.innerHTML += `
            <div class="picwlink">
              <a href="product.html">
                <img class="webshop_rowpic" src="${product.images[0].src}" alt="${product.images[0].alt}" title="${product.images[0].name}" />
              </a>
              <h3 class="feat_prod_head">${product.name}</h3>
              ${product.short_description}
              <a class="cta_btn" href="product.html?id=${product.id}">Buy Now!</a>
            </div>
            `;   
        }
        
        if (product.stock_status === "instock" && product.tags[0].name === "women") {
            console.log(product);
            womensItemsContainer.innerHTML += `
            <div class="picwlink">
              <a href="product.html">
                <img class="webshop_rowpic" src="${product.images[0].src}" alt="${product.images[0].alt}" title="${product.images[0].name}" />
              </a>
              <h3 class="feat_prod_head">${product.name}</h3>
              ${product.short_description}
              <a class="cta_btn" href="product.html">Buy Now!</a>
            </div>
            `;   
        } 
        
    }
}

createProducts();