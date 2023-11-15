import { namePanelOnStart } from "./script.js";

export const mainMenu = document.createElement("div");
mainMenu.textContent = "Menu>>";
mainMenu.className = "main-menu";

export function makeMenu(name) {
  const menuItem = document.createElement("div");
  menuItem.innerHTML = `${name}`;
  menuItem.className = "item";
  mainMenu.appendChild(menuItem);
}

let openPanel = null;
let openMenuItem = null;

export function panelSwitcher(event) {
  const menuItem = event.target;
  const panelName = menuItem.textContent.toLowerCase() + "-object";
  const chosenPanel = document.querySelector(`.${panelName}`);

  if (openPanel !== null && openMenuItem !== null) {
    openPanel.classList.add("hide");
    openMenuItem.classList.remove("selected");
  }

  chosenPanel.classList.remove("hide");
  menuItem.classList.add("selected");

  if (openPanel === chosenPanel) {
    openPanel.classList.add("hide");
    menuItem.classList.remove("selected");
    openPanel = null;
    openMenuItem = null;
    return;
  }

  openPanel = chosenPanel;
  openMenuItem = menuItem;
}
