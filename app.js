/*
// XmlHttpRequest GET Boilerplate
// CREATE OBJECT
const xhr = new XMLHttpRequest();
const url = 'http://api-to-call/endpoint';

// HANDLE SUCCESS
xhr.responseType = 'json';
xhr.onreadystatechange = () => {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    // Code to execute w/ response
  }
};

// CALL
xhr.open('GET', url);
xhr.send();
*/

const inputValue = document.getElementById('input');

const button = document.getElementById('button');
const responseField = document.getElementById('responseField');


// GET Request to Datamuse API
function getRhymeSuggestions(word) {
  const xhr = new XMLHttpRequest();
  const url = 'https://api.datamuse.com/words?rel_rhy=' + word;
  
  xhr.responseType = 'json';
  xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      const rawResponse = xhr.response.slice(0, 10);
      document.getElementById('responseField').innerHTML = renderResponse(rawResponse);
    }
  }

  xhr.open('GET', url);
  xhr.send();
}

// getRhymeSuggestions();

// Clean up response:
function renderResponse(res) {
  let wordList = [];
  for (let i = 0; i < res.length; i++) {
    wordList.push(`<li>${res[i].word}</li>`);
  }
  return wordList.join('');
}

function displaySuggestions(event) {
  event.preventDefault();
  getRhymeSuggestions(inputValue.value);
}

button.addEventListener('click', displaySuggestions);