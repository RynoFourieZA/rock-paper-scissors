const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const submit = document.querySelector("#submit");
const cards = document.querySelectorAll(".card");
const resultSection = document.querySelector("#result-section");
const paragraph = document.createElement("p");
const computerInput = document.createElement("p");

let user_input;

cards.forEach((card, index) => {
  card.addEventListener("click", () => {
    activeClassesRemove();
    card.classList.add("active");
    user_input = index;
  });
});

function activeClassesRemove() {
  cards.forEach((item) => {
    item.classList.remove("active");
  });
}


function computerSelectedOption() {
  const pcSelection = Math.floor(Math.random() * 3);

  return pcSelection;
}

submit.addEventListener("click", onSubmit);
let listOptions = ["rock", "paper", "scissors"];

function onSubmit() {
  let result;
  let computer_input;
  computer_input = computerSelectedOption();
  if(user_input !== undefined) resultSection.style.display = "block";

  if (listOptions[user_input] === listOptions[computer_input]) {
    result = "draw!";
  } else if (
    listOptions[user_input] === "rock" &&
    listOptions[computer_input] === "scissors"
  ) {
    result = "You win!";
  } else if (
    listOptions[user_input] === "scissors" &&
    listOptions[computer_input] === "paper"
  ) {
    result = "You win!";
  } else if (
    listOptions[user_input] === "paper" &&
    listOptions[computer_input] === "rock"
  ) {
    result = "You win!";
  } else {
    result = "You lose!";
  }

  resultSection.appendChild(paragraph);
  paragraph.innerText = result.toLocaleUpperCase();
  paragraph.appendChild(computerInput);
  computerInput.innerText = `Computer selected: ${(listOptions[computer_input]).toLocaleUpperCase()}`;
}
