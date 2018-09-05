/*
Register runners and provides them instruction
*/

let raceNumber = Math.floor(Math.random() * 1000);

//is a runner registered
let registered = false; 

// age > 18 is adult, age < 18 is youth
let runnerAge = 18;

//is the runner an adult and registered?
if(runnerAge > 18 && registered) {
  raceNumber += 1000; 
}


if(runnerAge > 18 && registered) {
  console.log(`Runner ${raceNumber} will race at 9:30 am.`)
}
else if(runnerAge > 18 && !registered) {
  console.log(`Runner ${raceNumber} will race at 11:00 am.`)
}
else if (runnerAge < 18) {
  console.log(`Runner ${raceNumber} will race at 12:30 pm.`)
}
else {
  console.log(`Runner ${raceNumber} please see the registration desk`);
}


