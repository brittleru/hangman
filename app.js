const wordElement = document.getElementById("word");
const wrongLettersElement = document.getElementById("wrong-letters");
const playAgainButton = document.getElementById("play-again");
const popup = document.getElementById("popup-container");
const notification = document.getElementById("notification-container");
const finalMessage = document.getElementById("final-message");
const figureParts = document.querySelectorAll(".figure-part");

const words = ["accomplish", "achievement", "commitment", "connection", "request",
               "efficient", "wizard", "gandalf", "independent", "inspire", "justice",
               "nuclear", "obviously", "physician", "phrase", "javascript", "brittle",
               "egg", "fish", "computer"];
let selectedWord = words[Math.floor(Math.random() * words.length)];
console.log(selectedWord);

let correctLetters = ["a", "e", "i", "o", "u", "g"];
let wrongLetters = [];

// Show the hidden word
function displayWord() {
  wordElement.innerHTML = `${selectedWord
                             .split("")
                             .map(letter => `
                                <span class="letter">
                                  ${correctLetters.includes(letter) ? letter : ''}
                                </span>`)
                             .join("")}`;

  const innerWord = wordElement.innerText.replace(/\n/g, "")
  // console.log(wordElement.innerText, innerWord);
  if (innerWord === selectedWord) {
    finalMessage.innerHTML = "Nice Job! You Won! 🤙";
    popup.style.display = "flex";
  }
}


displayWord();
