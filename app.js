const wordElement = document.getElementById("word");
const wrongLettersElement = document.getElementById("wrong-letters");
const playAgainButton = document.getElementById("play-button");
const popup = document.getElementById("popup-container");
const notification = document.getElementById("notification-container");
const finalMessage = document.getElementById("final-message");
const figureParts = document.querySelectorAll(".figure-part");

const words = ["accomplish", "achievement", "commitment", "connection", "request",
               "efficient", "wizard", "gandalf", "independent", "inspire", "justice",
               "nuclear", "obviously", "physician", "phrase", "javascript", "brittle",
               "egg", "fish", "computer"];
let selectedWord = words[Math.floor(Math.random() * words.length)];
console.log("Congratulations you have found a secret! 👌");
console.log("The hidden word is:");
console.log(selectedWord);

let correctLetters = [];
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

// Update wrong letters array
function updateWrongLettersElement() {
  // Display wrong letters
  wrongLettersElement.innerHTML = `
    ${wrongLetters.length > 0 ? "<p>Wrong</p>" : ""}
    ${wrongLetters.map(letter => `<span>${letter}</span>`)}
  `;

  // Display parts of the hangman
  figureParts.forEach((part, index) => {
    const errors = wrongLetters.length;

    if(index < errors) {
      part.style.display = "block";
    }
    else {
      part.style.display = "none";
    }
  });

  // Lost checker
  if (wrongLetters.length === figureParts.length) {
    finalMessage.innerText = "Sadly you have lost...";
    popup.style.display = "flex";
  }
}

// Show notification message
function showNotification() {
  notification.classList.add("show");
  setTimeout(() => {
    notification.classList.remove("show");
  }, 1500);
}

// Keydown event
window.addEventListener("keydown", e => {

  // Make sure user press a letter
  if(e.keyCode >= 65 && e.keyCode <= 90) {
    const letter = e.key;

    if(selectedWord.includes(letter)) {
      if(!correctLetters.includes(letter)) {
        correctLetters.push(letter);
        displayWord();
      }
      else {
        showNotification();
      }
    }
    else {
      if(!wrongLetters.includes(letter)) {
        wrongLetters.push(letter);
        updateWrongLettersElement();
      }
      else {
        showNotification();
      }
    }
  }
});

// Play again function
playAgainButton.addEventListener("click", () => {
  // Empty arrays
  correctLetters.splice(0);
  wrongLetters.splice(0);

  selectedWord = words[Math.floor(Math.random() * words.length)];
  displayWord();

  updateWrongLettersElement();
  popup.style.display = "none";
  console.log("The hidden word is:");
  console.log(selectedWord);
});

displayWord();





















// end
