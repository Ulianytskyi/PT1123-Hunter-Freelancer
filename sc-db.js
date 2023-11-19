export let person = {
  name: "Hunter",
  img: "./img_hero.png",
  level: 1,
  hp: 50,
  contracts: 0,
};

export let contracts = [
  {
    name: "Swamp Monster",
    img: "./img_swamp.png",
    location: "The Forest Swamp",
    reward: "500",
    condition: "dead",
    status: "available",
  },
  {
    name: "Red Goblin",
    img: "./img_goblin.png",
    location: "The Wild Forest",
    reward: "750",
    condition: "dead",
    status: "available",
  },
  {
    name: "Cultist Anvar",
    img: "./img_cult.png",
    location: "The Desert",
    reward: "1000",
    condition: "alive",
    status: "available",
  },
];
