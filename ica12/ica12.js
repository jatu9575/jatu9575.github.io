const newQuoteButton = document.querySelector('#js-new-quote');

newQuoteButton.addEventListener('click', getQuote);

function getQuote() {
  console.log('Button clicked!'); 

  const endpoint = 'https://trivia.cyberwisp.com/getrandomchristmasquestion';

  fetch(endpoint)
    .then(response => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
    })
    .then(data => {
      console.log(data); 
      displayQuote(data); 
    })
    .catch(error => {
      console.error('Error fetching the quote:', error);
      alert('Oops! Something went wrong. Please try again later.');
    });
}

function displayQuote(data) {
  const quoteText = document.querySelector('#js-quote-text');
  const answerText = document.querySelector('#js-answer-text');

  quoteText.textContent = data.question;
  answerText.textContent = ''; 
}

getQuote();

const answerButton = document.querySelector('#js-tweet');

answerButton.addEventListener('click', () => {
  fetch('https://trivia.cyberwisp.com/getrandomchristmasquestion')
    .then(response => response.json())
    .then(data => {
      const answerText = document.querySelector('#js-answer-text');
      answerText.textContent = data.answer;
    });
});