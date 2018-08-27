// Information to reach API
const url = 'https://api.datamuse.com/words';
const queryParams = '?sl=';

// Selects page elements
const inputField = document.querySelector('#input');
const submit = document.querySelector('#submit');
const responseField = document.querySelector('#responseField');

// AJAX function
const getSuggestions = () => {
  //value of what is typed into the input field
  const wordQuery = inputField.value; 
  const endpoint = `${url}${queryParams}${wordQuery}`; 
  fetch(endpoint).then(response => {
    if(response.ok) {
      //renderJsonResponse(response); 
      //the chained function will receive a promise with json data
      return response.json();
    }
    throw new Error('Request failed!');
  }, networkError => console.log(networkError.message))};

// Clears previous results and display results to webpage
const displaySuggestions = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild);
  }
  getSuggestions();
};

submit.addEventListener('click', displaySuggestions);

