const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const box = document.querySelector(".card");
const scissors = document.getElementById("scissors");
const submit = document.querySelector("#submit");
const cards = document.querySelectorAll(".card");
const resultSection = document.querySelector("#result-section");
const paragraph = document.createElement("p");
const computerInput = document.createElement("p");
const nameInput = document.querySelector("input");
const p = document.createElement("p");
const i = document.createElement("i");

let user_input;
let name;

nameInput.addEventListener("input", () => {
  name = nameInput.value;
});

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

  if (user_input === undefined || name === undefined) {
    document.getElementById("not_selected").innerHTML =
      "Please enter your name or select one of the options above.";
    document.getElementById("not_selected").style.color = "red";
  }

  if (user_input !== undefined && name !== undefined) {
    resultSection.style.display = "block";
    document.getElementById("not_selected").innerHTML = "";
  }

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

  computerInput.innerText = `Computer selected: ${listOptions[
    computer_input
  ].toLocaleUpperCase()}`;

  computerInput.appendChild(p);
  p.innerText =
    result.toLocaleLowerCase() === "you win!"
      ? `Winner: ${name}`
      : result.toLocaleLowerCase() === "you lose!"
      ? `Winner: Computer Player`
      : "";

      resultSection.style.boxShadow = result.toLocaleLowerCase() === "you win!"
    ? "0px 0px 25px rgba(0, 217, 14, 0.8)"
    : result.toLocaleLowerCase() === "you lose!"
    ? "0px 0px 25px rgba(255, 0, 0, 0.8)"
    : "0px 0px 25px rgba(255, 165, 0, 0.8)"; 
}
