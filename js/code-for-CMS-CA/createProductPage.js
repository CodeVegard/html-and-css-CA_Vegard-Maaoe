const key = "ck_ce76707e29bca6491c1a2264e1e99177076b8e77";
const secret = "cs_95db7727bef7886304f909ba0852363c0d80bacd";

const productContainer = document.querySelector(".product_presentation");
const queryString = document.location.search;
const parameter = new URLSearchParams(queryString);
const id = parameter.get("id");
const productURL = `https://sellmo.no/Flower_Power/wp-json/wc/v3/products/0?id=${id}&consumer_key=${key}&consumer_secret${secret}`;
