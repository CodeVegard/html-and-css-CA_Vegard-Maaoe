import {createHTML} from "../exports/createHTML.js";

const featuredItemsContainer = document.querySelector(".webshop_row");
const key = "ck_ce76707e29bca6491c1a2264e1e99177076b8e77";
const secret = "cs_95db7727bef7886304f909ba0852363c0d80bacd";
const unauthorizedUrl = "https://sellmo.no/Flower_Power/wp-json/wc/v3/products?";

const featureRow = document.querySelector(".webshop_row");

async function createFeaturedProducts() {
  const fullUrl = `${unauthorizedUrl}consumer_key=${key}&consumer_secret=${secret}`;

  const response = await fetch(fullUrl);
  const finishedResponse = await response.json();

  let featuredProducts = finishedResponse.filter(arr => arr.featured=== true);
  console.log(featuredProducts);

  featuredItemsContainer.classList.remove("loader");

  createHTML(featuredItemsContainer, featuredProducts);

    if (featuredProducts.length > 3) {
      featureRow.classList.remove("webshop_row");
      featureRow.classList.add("overflow");
    }
};

setTimeout(() => {
  createFeaturedProducts();
}, 1000);