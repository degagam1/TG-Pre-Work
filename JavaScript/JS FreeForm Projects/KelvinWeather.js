/* 
Convert Kelvin to Celsius, Fahrenheit, and Newton
*/

//set kelvin temperature 
//const kelvin = 293; 
const kelvin = 0; 

//set celsius temperature
const celsius = kelvin-273; 

//set fahrenheit temperature
let fahrenheit = celsius*(9/5) + 32; 

//get whole number for the fahrenheit temperature
fahrenheit = Math.floor(fahrenheit);

//set newton temperature
let newton = celsius*(33/100); 
newton = Math.floor(newton); 

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`);
console.log('The temperature is ' + newton + ' degrees Newton');



