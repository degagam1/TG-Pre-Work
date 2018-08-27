/*AJAX POST request */

//this object is used to talk to servers
const xhr = new XMLHttpRequest(); 

//this url is the address for the server we want to talk to 
const url = 'https://api-to-call.com/endpoint'; 

//will convert data to a JSON string which will then be used to talk to the server
const data = JSON.stringify({id: '200'});

xhr.responseType = 'json'; 

//will contain the event handler that will occur when the state of the xhr changes
xhr.onreadystatechange = () => {
  if(xhr.readyState === XMLHttpRequest.DONE) {
    return xhr.response; 
  }
};

//creates a new request based on what parameters is gets 
xhr.open('POST', url);
//sends the request to the server 
xhr.send(data); 





