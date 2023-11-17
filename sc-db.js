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
    award: "500",
    condition: "dead",
    status: "available",
  },
  {
    name: "Red Goblin",
    img: "./img_goblin.png",
    location: "The Wild Forest",
    award: "750",
    condition: "dead",
    status: "available",
  },
  {
    name: "Cultist Anvar",
    img: "./img_cult.png",
    location: "The Desert",
    award: "1000",
    condition: "alive",
    status: "available",
  },
];
