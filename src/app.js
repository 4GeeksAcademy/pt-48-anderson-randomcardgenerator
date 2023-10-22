import "./style.css";

document.querySelector(".generateButton").addEventListener("click", () => {
  document.querySelector(".Card").classList.add(generateRandomPinta());
  document.querySelector(".Card").innerHTML = generateRandomNumber();
});

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
const generateRandomNumber = () => {
  let numberIndex = Math.floor(Math.random() * numbersCard.length);
  return numbersCard[numberIndex];
};
const pintaCard = ["diam", "spade", "heart", "club"];
const generateRandomPinta = () => {
  let pintaIndex = Math.floor(Math.random() * pintaCard.length);
  return pintaCard[pintaIndex];
};
