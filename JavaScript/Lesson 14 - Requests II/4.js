fetch('https://api-to-call.com/endpoint', {
  method: 'POST', 
  //identifies this request as a post request and what info will be sent to the api 
  body: JSON.stringify({id: '200'}),
}).then(response => {
  if(response.ok) {
    return response.json();
  }
  throw new Error('Request failed!');
}, networkError => console.log(networkError.message)).then(jsonResponse => {
  //will view the json that was return from the previous then()
  return jsonResponse;
});