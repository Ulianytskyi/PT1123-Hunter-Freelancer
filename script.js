const mainField = document.getElementById("main-field");

import { mainMenu, makeMenu } from "./sc-menu.js";
import { panelCharacter } from "./sc-character.js";
import { panelShop } from "./sc-shop.js";
import { panelExchange } from "./sc-exchange.js";
import { panelWorkshop } from "./sc-workshop.js";

function loadPanels() {
  makeMenu("Character");
  makeMenu("Exchange");
  makeMenu("Shop");
  makeMenu("Workshop");

  mainField.appendChild(mainMenu);
  mainField.appendChild(panelCharacter);
  mainField.appendChild(panelShop);
  mainField.appendChild(panelExchange);
  mainField.appendChild(panelWorkshop);
}

loadPanels();
