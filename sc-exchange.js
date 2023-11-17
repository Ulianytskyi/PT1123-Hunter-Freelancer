import { contracts } from "./sc-db.js";

export const panelExchange = document.createElement("div");

// panelExchange.textContent = "Exchange Panel";
panelExchange.className = "exchange-object hide";

const contractsContainer = document.createElement("div");
contractsContainer.className = "contract-container";

panelExchange.appendChild(contractsContainer);

function showContacts() {
  for (let i = 0; i < contracts.length; i++) {
    const contractBlock = document.createElement("div");
    contractBlock.className = "contract-block";
    contractBlock.innerHTML = `Wanted dead or alive! But better ${contracts[i].condition}</br>`;

    const wantedImg = `<img src='${contracts[i].img}' style='width:50px' alt='(${contracts[i].name} Image)' />`;
    const nameAndLocation = `<div class='nal-style'>${contracts[i].name}</div><div class='nal-style'>Last seen in ${contracts[i].location}</div>`;

    contractBlock.innerHTML += `<div class="cont-block-items">
                                    <div class="cont-block item img">${wantedImg}</div>
                                    <div class="cont-block item title">${nameAndLocation}</div>
                                </div>`;

    contractBlock.innerHTML += `Award: ${contracts[i].award} gold</br>`;
    contractBlock.innerHTML += `Contract <span style='color:green'>${contracts[i].status}</span>`;

    contractsContainer.appendChild(contractBlock);
  }
}

showContacts(contracts);
