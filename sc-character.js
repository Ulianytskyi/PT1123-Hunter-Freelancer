import { person } from "./sc-db.js";
import { contractList } from "./sc-exchange.js";

export const panelCharacter = document.createElement("div");

// panelCharacter.textContent = "Character Panel";
panelCharacter.className = "character-object hide";

const personObject = document.createElement("div");

personObject.innerHTML = "";
personObject.innerHTML += `<img src='${person.img}' style='width:100px' />`;
personObject.innerHTML += `<div>${person.name}</div>`;
personObject.innerHTML += `<div>Level: ${person.level}</div>`;
personObject.innerHTML += `<div>HP: ${person.hp}</div>`;
personObject.innerHTML += `<div class='taken-contracts'>Contracts: <span>${person.contracts}</span></div>`;

panelCharacter.appendChild(personObject);

const takenContractsPanel = document.createElement('div');
takenContractsPanel.innerHTML = contractsInList();
takenContractsPanel.className = 'taken-contracts-panel hide';
panelCharacter.appendChild(takenContractsPanel);

function contractsInList() {
    return `AAAAAAAA`
}

export function showHideTakenContracts() {

    console.log(contractList);

    const list = document.querySelector('.taken-contracts-panel');
    if (list.classList.contains('hide')) {
        list.classList.remove('hide');
      } else {
        list.classList.add('hide');
    }
}




