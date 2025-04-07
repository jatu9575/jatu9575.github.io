const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');
const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imageFilenames = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];

/* Declaring the alternative text for each image file */
const altTexts = {
  'pic1.jpg': 'Closeup of a human eye',
  'pic2.jpg': 'Rock that looks like a wave',
  'pic3.jpg': 'Purple and white pansies',
  'pic4.jpg': 'Section of wall from a pharaoh\'s tomb',
  'pic5.jpg': 'Large moth on a leaf'
};

/* Looping through images */
for (const filename of imageFilenames) {
  const newImage = document.createElement('img');
  newImage.setAttribute('src', `images/${filename}`);
  newImage.setAttribute('alt', altTexts[filename]);
  thumbBar.appendChild(newImage);

  newImage.addEventListener('click', () => {
    displayedImage.setAttribute('src', `images/${filename}`);
    displayedImage.setAttribute('alt', altTexts[filename]);
  });
}

/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', () => {
  const currentClass = btn.getAttribute('class');
  if (currentClass === 'dark') {
    btn.setAttribute('class', 'light');
    btn.textContent = 'Lighten';
    overlay.style.backgroundColor = 'rgb(0 0 0 / 50%)';
  } else {
    btn.setAttribute('class', 'dark');
    btn.textContent = 'Darken';
    overlay.style.backgroundColor = 'rgb(0 0 0 / 0%)';
  }
});
