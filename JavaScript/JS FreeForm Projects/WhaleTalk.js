/*Converting to whale talk
*/

//const input = "Where's is the cheeseburger?"; 
//const input = 'Hi, Human'; 
const input = 'A whale of a deal!';
const vowels = ['a', 'e', 'i', 'o', 'u']; 

let resultArray = []; 

for(let i = 0; i < input.length; i++) {
  if(vowels.includes(input[i].toLowerCase())) {
    if(input[i] === 'e') {
      resultArray.push('ee'); 
    }
    else if(input[i] === 'u'){
      resultArray.push('uu'); 
    }
    else {
       resultArray.push(input[i]);
    }
  }
}
console.log(resultArray.join("").toUpperCase());

