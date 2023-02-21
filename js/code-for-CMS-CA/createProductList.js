import {createHTML} from "../exports/createHTML.js";

const mensItemsContainer = document.querySelector(".men");
const womensItemsContainer = document.querySelector(".women");
const key = "ck_ce76707e29bca6491c1a2264e1e99177076b8e77";
const secret = "cs_95db7727bef7886304f909ba0852363c0d80bacd";
const unauthorizedUrl = "https://sellmo.no/Flower_Power/wp-json/wc/v3/products?";

const inStockBtn = document.querySelector("#in-stock");
const onSaleBtn  = document.querySelector("#on-sale");

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