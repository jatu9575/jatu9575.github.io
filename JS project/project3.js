const phoneDisplay = document.getElementById("phone-display");
const enteredDigits = document.getElementById("entered-digits");
const clickedDigits = document.getElementById("clicked-digits");
const clearLogButton = document.getElementById("clear-log");
const gameArea = document.getElementById("game-area");

let targetDigits = "1234567890".split("");
let currentIndex = 0;
let spawnInterval;

function spawnDigit(value) {
  const digit = document.createElement("div");
  digit.classList.add("digit");
  digit.textContent = value;

  const size = 70;
  const maxX = gameArea.clientWidth - size;
  const maxY = gameArea.clientHeight - size;
  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  digit.style.left = `${x}px`;
  digit.style.top = `${y}px`;

  digit.addEventListener("click", () => {
    const clicked = document.createElement("span");
    clicked.classList.add("clicked-digit");

    enteredDigits.textContent += value;
    clicked.textContent = value;
    clicked.classList.add("clicked-digit");
    digit.remove();
    clickedDigits.appendChild(clicked);

    if (enteredDigits.textContent.length >= 10) {
    enteredDigits.textContent += " ✅ Done!";
    stopSpawning();
  }

    clickedDigits.appendChild(clicked);
  });

  gameArea.appendChild(digit);

  setTimeout(() => {
    if (digit.parentElement) digit.remove();
  }, 3000);
}

function startSpawning() {
  spawnInterval = setInterval(() => {
    const nextDigit = targetDigits[Math.floor(Math.random() * targetDigits.length)];
    spawnDigit(nextDigit);
  }, 800);
}

function stopSpawning() {
  clearInterval(spawnInterval);
}

clearLogButton.addEventListener("click", () => {
  clickedDigits.innerHTML = "";
  enteredDigits.textContent = "";
  currentIndex = 0;
  stopSpawning();
  startSpawning();
});

startSpawning();
