const mainField = document.getElementById("main-field");

import { mainMenu, makeMenu, panelSwitcher } from "./sc-menu.js";
import { panelCharacter } from "./sc-character.js";
import { panelShop } from "./sc-shop.js";
import { panelExchange } from "./sc-exchange.js";
import { panelWorkshop } from "./sc-workshop.js";

function loadPanels() {
  makeMenu("Character");
  makeMenu("Exchange");
  // makeMenu("Shop");
  // makeMenu("Workshop");

  mainField.appendChild(mainMenu);

  mainField.appendChild(panelCharacter);
  mainField.appendChild(panelExchange);
  // mainField.appendChild(panelShop);
  // mainField.appendChild(panelWorkshop);
}

loadPanels();

export let namePanelOnStart = "Exchange";

function menuItemListener() {
  const menuItems = document.querySelectorAll(".main-menu .item");
  menuItems.forEach((menuItem) => {
    activePanelOnStart(menuItem, namePanelOnStart);
    menuItem.addEventListener("click", panelSwitcher);
  });
}

menuItemListener();

function activePanelOnStart(menuItem, menuItemName) {
  if (menuItem.textContent === menuItemName) {
    menuItem.classList.add("selected");
    const panelName = menuItemName.toLowerCase() + "-object";
    const panelObject = document.querySelector(`.${panelName}`);
    panelObject.classList.remove("hide");
  }
}
