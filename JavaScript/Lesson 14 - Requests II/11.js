// information to reach API
const apiKey = '0fa9b77ef3f3404cbdefd3b523c8d8d8';
const url = 'https://api.rebrandly.com/v1/links';

// Some page elements
const inputField = document.querySelector('#input');
const shortenButton = document.querySelector('#shorten');
const responseField = document.querySelector('#responseField');

// AJAX functions
const shortenUrl = async () => {
	const urlToShorten = inputField.value; 
  const data = JSON.stringify({destination: urlToShorten}); 
  try{
    const response = await fetch(url, {
      method: 'POST', 
      body: data, 
      headers: {
        'Content-type': 'application/json', 'apikey': apiKey
      },
    });
    if(response.ok) {
		    const jsonResponse = await response.json();  
      //renderRawResponse(jsonResponse); 
      renderResponse(jsonResponse);
    }
  }
  catch(error){
    console.log(error);
  }
}; 

// Clear page and call AJAX functions
const displayShortUrl = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild);
  }
  shortenUrl();
}

shortenButton.addEventListener('click', displayShortUrl);

