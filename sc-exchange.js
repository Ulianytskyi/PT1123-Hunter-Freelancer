import { showHideTakenContracts } from "./sc-character.js";
import { contracts, person } from "./sc-db.js";

export const panelExchange = document.createElement("div");

// panelExchange.textContent = "Exchange Panel";
panelExchange.className = "exchange-object hide";

const contractsContainer = document.createElement("div");
contractsContainer.className = "contract-container";

panelExchange.appendChild(contractsContainer);

function showContracts() {
  for (let i = 0; i < contracts.length; i++) {
    const contractBlock = document.createElement("div");
    contractBlock.className = "contract-block";
    contractBlock.dataset.id = i;

    const contractTitle = document.createElement("div");
    contractTitle.innerHTML = `Wanted ${contracts[i].name} | Reward: ${contracts[i].reward} gold`;
    contractTitle.className = "contract-title";
    contractTitle.addEventListener("click", openClosePanel);

    const contractCard = document.createElement("div");
    contractCard.innerHTML = showContractDetails(contracts[i]);
    contractCard.className = "contract-card hide";

    contractBlock.appendChild(contractTitle);
    contractBlock.appendChild(contractCard);

    contractsContainer.appendChild(contractBlock);
  }
}
contractsContainer.addEventListener("click", function (event) {
  if (event.target.classList.contains("take-btn")) {
    takeContract(event);
  }
});

let isOpen = null;

function openClosePanel(event) {
  console.clear();

  let contentPanel = event.target.parentElement.children[1];

  if (isOpen != null && contentPanel.classList.contains("hide")) {
    isOpen.parentElement.children[1].classList.add("hide");
    isOpen.parentElement.classList.remove("open");
    changePanelInformation(isOpen, "close");
    contentPanel.classList.remove("hide");
    event.target.parentElement.classList.add("open");
    changePanelInformation(event.target, "open");
    isOpen = event.target;
  } else if (!contentPanel.classList.contains("hide")) {
    contentPanel.classList.add("hide");
    event.target.parentElement.classList.remove("open");
    changePanelInformation(event.target, "close");
    isOpen = null;
  } else {
    contentPanel.classList.remove("hide");
    event.target.parentElement.classList.add("open");
    changePanelInformation(event.target, "open");
    isOpen = event.target;
  }
}

function changePanelInformation(target, status) {
  const contractID = contracts[target.parentElement.dataset.id];

  if (status == "open") {
    target.innerHTML = `Wanted Dead Or Alive! (But better <span style="text-transform: uppercase">${contractID.condition})</span></br>`;
  } else if (status == "close") {
    target.innerHTML = `Wanted ${contractID.name} | Reward: ${contractID.reward} gold`;
  }
}

function showContractDetails(contractID) {
  const wantedImg = `<img src='${contractID.img}' style='width:90px' alt='(${contractID.name} Image)' />`;
  const nameAndLocation = `<div class='nal-style'>Name: <span style="font-size:20px; color: red; font-weight: bold">${contractID.name}</span></div><div class='nal-style'>Last seen in ${contractID.location}</div><div class='nal-style'>Armed and dangerous!</div>`;

  return `<div class="cont-block-items">
  <div class="cont-block item img">${wantedImg}</div>
  <div class="cont-block item title">${nameAndLocation}</div>
  </div>
  Reward: <span style="color: red; font-weight: bold;">${contractID.reward}</span> gold</br>
  Contract <span class='contract-status'>${contractID.status}</span></br>
  <button class='take-btn' !disabled>TAKE!</button>`;
}

export let contractsCount = 0;
export let contractList = [];

function takeContract(event) {
  const contractID = contracts[event.target.closest('.contract-block').dataset.id];
  const statusElement = event.target.closest('.contract-block').querySelector('.contract-status');
  const takeButtonStatus = event.target.closest('.contract-block').querySelector('.take-btn');
  
  contractsCount += 1;

  if (contractID.status === "available") {
    contractID.status = "reserved";
    statusElement.textContent = "reserved";
    statusElement.style.color = "red";
    takeButtonStatus.disabled = true;

    person.contracts = contractsCount;
    document.querySelector('.taken-contracts span').innerHTML = `${contractsCount}`;
    document.querySelector('.taken-contracts').addEventListener('click', showHideTakenContracts);

    const takenContractName = `Wanted ${contractID.name} | Reward: ${contractID.reward} gold`;
    contractList.push(takenContractName);
  }
  
}

showContracts(contracts);
