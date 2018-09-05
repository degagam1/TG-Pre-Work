/* Magic 8 Ball simulator
   user can input name and question 
*/

const userName = ""; 

userName === "" ? console.log('Hello') : console.log(`Hello ${userName}`); 

const userQuestion = ""; 

console.log(`The user ${userName} asked ${userQuestion}`);

const randomNumber = Math.floor(Math.random()*8); 

let eightBall = "";

switch (randomNumber) { 
  case 0: 
  	eightBall = 'It is certain'; 
  break; 
  case 1: 
    eightBall = 'It is decidely so'; 
  break; 
  case 2: 
    eigthBall = 'Reply hazy try again';
  break; 
  case 3: 
    eightBall = 'Cannot predict now';
  break; 
  case 4: 
    eightBall = 'Do not count on it'; 
  break; 
  case 5: 
    eigthBall = 'My sources say no'; 
  break; 
  case 6: 
    eightBall = 'Outlook not so good';
  break; 
  default: 
    eightBall = 'Signs point to yes';
  break; 
};

console.log(eightBall);



