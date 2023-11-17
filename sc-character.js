import { person } from "./sc-db.js";

export const panelCharacter = document.createElement("div");

// panelCharacter.textContent = "Character Panel";
panelCharacter.className = "character-object hide";

const personObject = document.createElement("div");

personObject.innerHTML = "";
personObject.innerHTML += `<img src='${person.img}' style='width:100px' />`;
personObject.innerHTML += `<div>${person.name}</div>`;
personObject.innerHTML += `<div>Level: ${person.level}</div>`;
personObject.innerHTML += `<div>HP: ${person.hp}</div>`;
personObject.innerHTML += `<div>Contracts: ${person.contracts}</div>`;

panelCharacter.append(personObject);
