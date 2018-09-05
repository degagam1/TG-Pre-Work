/*
Convert human age to dog age
*/

//my current age
const myAge = 27; 

//takes into account the first two years 
let earlyYears = 2; 
//earlyYears *= 10.5; 
earlyYears = earlyYears * 10.5; 

//takes into account the age after 2 years
let laterYears = myAge - 2; 

//dog years accounted by later years
//laterYears *= 4; 
laterYears = laterYears * 4; 

console.log(earlyYears);
console.log(laterYears);

//my age in dog years
const myAgeInDogYears = earlyYears + laterYears; 

//create lower case version of name
//const myName = 'Merry Degaga'.toLowerCase(); 
const myName = 'Sam John'.toLowerCase();

//display name and age in dog years 
console.log(`My name is ${myName}. I am ${myAgeInDogYears} years old in dog years.`);


