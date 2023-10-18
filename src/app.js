import "./style.css";
window.onload = () => {
  document.querySelector(".numeroCarta").innerHTML = generateRandomNumber();
  document.querySelector(
    ".pintaArriba",
    ".pintaAbajo"
  ).innerHTML = generateRandomPinta();
};

let generateRandomNumber = () => {
  const numbersCard = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let numberIndex = Math.floor(Math.random() * numbersCard.length);
  return numbersCard[numberIndex];
};
let generateRandomPinta = () => {
  const pintaCard = ["♦", "♥", "♠", "♣"];
  let pintaIndex = Math.floor(Math.random() * pintaCard.length);
  return pintaCard[pintaIndex];
};
