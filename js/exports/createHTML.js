export function createHTML(container, arr) {
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
        } else {
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