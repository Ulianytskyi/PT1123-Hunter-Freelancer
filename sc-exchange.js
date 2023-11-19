import { contracts } from "./sc-db.js";

export const panelExchange = document.createElement("div");

// panelExchange.textContent = "Exchange Panel";
panelExchange.className = "exchange-object hide";

const contractsContainer = document.createElement("div");
contractsContainer.className = "contract-container";

panelExchange.appendChild(contractsContainer);

function showContracts() {
  for (let i = 0; i < contracts.length; i++) {
    const contractBlock = document.createElement("div");
    contractBlock.addEventListener("click", openClosePanel);
    contractBlock.dataset.id = i;
    contractBlock.className = "contract-block";
    contractBlock.innerHTML = `Wanted ${contracts[i].name} | Reward: ${contracts[i].reward} gold`;
    contractsContainer.appendChild(contractBlock);
  }
}

let isOpen = null;

function openClosePanel(event) {
  console.log(event.target);

  if (isOpen != null && !event.target.classList[1]) {
    isOpen.classList.remove("open");
    changePanelInformation(isOpen, "close");
    event.target.classList.add("open");
    changePanelInformation(event.target, "open");
    isOpen = event.target;
  } else if (isOpen != null) {
    isOpen.classList.remove("open");
    changePanelInformation(isOpen, "close");
    isOpen = null;
  } else {
    event.target.classList.add("open");
    changePanelInformation(event.target, "open");
    isOpen = event.target;
  }
}

function changePanelInformation(target, status) {
  const contractID = contracts[target.dataset.id];

  if (status == "open") {
    target.innerHTML = `Wanted Dead Or Alive! (But better <span style="text-transform: uppercase">${contractID.condition})</span></br>`;
    target.innerHTML += showContractDetails(contractID);
  } else if (status == "close") {
    target.innerHTML = `Wanted ${contractID.name} | Reward: ${contractID.reward} gold`;
  }
}

showContracts(contracts);

function showContractDetails(contractID) {
  const wantedImg = `<img src='${contractID.img}' style='width:90px' alt='(${contractID.name} Image)' />`;
  const nameAndLocation = `<div class='nal-style'>Name: <span style="font-size:20px; color: red; font-weight: bold">${contractID.name}</span></div><div class='nal-style'>Last seen in ${contractID.location}</div><div class='nal-style'>Armed and dangerous!</div>`;

  return `<div class="cont-block-items">
      <div class="cont-block item img">${wantedImg}</div>
      <div class="cont-block item title">${nameAndLocation}</div>
      </div>
      Reward: <span style="color: red; font-weight: bold;">${contractID.reward}</span> gold</br>
      Contract <span style='color:green'>${contractID.status}</span></br>
      <button>TAKE!</button>`;
}
