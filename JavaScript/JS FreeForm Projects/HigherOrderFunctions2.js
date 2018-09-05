const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
  for(let i = 1; i <= 1000000; i++) {
    if ( (2 + 2) != 4) {
      console.log('Something has gone very wrong :( ');
    }
  }
};

const addTwo = num => num + 2;

const timeFuncRuntime = funcParameter => {
  let t1 = Date.now();
  funcParameter();
  let t2 = Date.now();
  return t2 - t1;
};

// Write your code below
let time2p2 = timeFuncRuntime(checkThatTwoPlusTwoEqualsFourAMillionTimes); 

const checkConsistentOutput = (funcParameter, value) => {
  let call1 = funcParameter(value);
  let call2 = funcParameter(value); 
  if(call1 === call2) {
    return call1; 
  }
  else {
    return 'This function returned inconsistent results'
  }
}

console.log(checkConsistentOutput(addTwo,4));




