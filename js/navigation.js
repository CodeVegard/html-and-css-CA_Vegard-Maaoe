// Changing NAV from hardcoded HTML to dynamic JS based on an array of objects
import { navItems } from "./exports/exports.js";

const navDOM = document.querySelector(".nav_ul");

function createNavigation(container, items) {
  for (let i = 0; i < items.length; i++) {
    const element = items[i];

    container.innerHTML += `
          <li class="nav_li"><a href="${items[i].url}">${items[i].name}</a></li>
    `;
  }
};

createNavigation(navDOM, navItems);

