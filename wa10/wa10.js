const customName = document.getElementById("customname");
const randomize = document.querySelector(".randomize");
const story = document.querySelector(".story");

function randomValueFromArray(array) {
  return array[Math.floor(Math.random() * array.length)];
}

const storyText =
  "It was 7pm Friday, 95 degrees, :insertx: went for a walk. When she got to :inserty:, she started memeing on her haters and :insertz:. Bob saw the whole thing, but decided to join — :insertx: is working on her spring break body to prove the haters wrong, shes gonna eat them all up for breakfast, lunch and dinner.";

const insertX = ["Jennifer Coolidge", "Kris Jenner", "Glorilla"];
const insertY = ["White Lotus Resort", "the dude ranch", "fort lauderdale"];
const insertZ = [
  "had an unthinkable crashout",
  "cooked so hard she turned into ratatouoille",
  "irish goodbyed before anyone could ask her about her warts",
];

randomize.addEventListener("click", result);

function result() {
  let newStory = storyText;

  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);

  newStory = newStory.replaceAll(":insertx:", xItem);
  newStory = newStory.replace(":inserty:", yItem);
  newStory = newStory.replace(":insertz:", zItem);

  if (customName.value !== "") {
    const name = customName.value;
    newStory = newStory.replace("Bob", name);
  }

  if (document.getElementById("uk").checked) {
    const weight = Math.round(300 / 14) + " stone";
    const temperature = Math.round((94 - 32) * (5 / 9)) + " centigrade";

    newStory = newStory.replace("300 pounds", weight);
    newStory = newStory.replace("94 fahrenheit", temperature);
  }

  story.textContent = newStory;
  story.style.visibility = "visible";
}