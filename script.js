// Define all possible choices
const choices = ["rock", "paper", "scissors"];

// Get elements from the page to update the page
const userChoiceText = document.getElementById("user-choice");
const computerChoiceText = document.getElementById("computer-choice");
const resultText = document.getElementById("result");

// Added event listeners to each button using their IDs
document.getElementById("rock-btn").addEventListener("click", () => play("rock"));
document.getElementById("paper-btn").addEventListener("click", () => play("paper"));
document.getElementById("scissors-btn").addEventListener("click", () => play("scissors"));

// Main function to run the game
function play(userChoice) {
  console.log("User chose:", userChoice);

  const computerChoice = getComputerChoice();
  console.log("Computer chose:", computerChoice);

  const result = getResult(userChoice, computerChoice);
  console.log("Result is:", result);

  // to show result in the HTML
  userChoiceText.textContent = `You chose: ${userChoice}`;
  computerChoiceText.textContent = `Computer chose: ${computerChoice}`;
  resultText.textContent = result;
}

// Pick a random choice for the computer
function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// Decide the winner
function getResult(user, computer) {
  if (user === computer) {
    return "It's a draw!";
  }

  if (
    (user === "rock" && computer === "scissors") ||
    (user === "paper" && computer === "rock") ||
    (user === "scissors" && computer === "paper")
  ) {
    return "You win!";
  } else {
    return "You lose!";
  }
}
