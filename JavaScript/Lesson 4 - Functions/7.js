//function expression 

/*function isGreaterThan(numberOne, numberTwo){
  if(numberOne > numberTwo){
    return true;
  } else {
    return false;
  }
}

isGreaterThan(4, 8)
*/

const isGreaterThan = (numberOne, numberTwo) => {
  if(numberOne > numberTwo) {
    return true; 
  }
  else {
    return false; 
  }
}; 

console.log(isGreaterThan(2,1));

