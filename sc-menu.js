export const mainMenu = document.createElement("div");
mainMenu.textContent = "Menu";
mainMenu.className = "main-menu";

export function makeMenu(name) {
  const menuItem = document.createElement("div");
  menuItem.innerHTML = `${name}`;
  menuItem.addEventListener("click", panelSwitcher);
  menuItem.className = "main-menu-item";
  mainMenu.appendChild(menuItem);
}

function panelSwitcher(event) {
  const panelName = "panel" + event.target.textContent;
  const test = document.querySelectorAll(".hide");
  console.log(test);
}
