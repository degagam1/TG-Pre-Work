/*Will calculate how much sleep is needed from a past week 
*/

//get the sleep hours depending on which day
function getSleepHours(day) {
  
  switch(day.toLowerCase()) {
         case 'monday':
         case 'thursday':
      		return 7; 
          break; 
         case 'tuesday':
         case 'wednesday':
          return 6; 
          break;
         case 'friday': 
         case 'saturday':
         case 'sunday':
           return 8; 
           break; 
         default: 
           return 'Invalid day'
           break; 
         }
}

//console.log(getSleepHours('Friday')); 
//console.log(getSleepHours('Monday')); 
//console.log(getSleepHours(""));

//will sum up the number of hours slept in a week
function getActualSleepHours() {
  let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']; 
	let sum = 0; 
  for(let i = 0; i < days.length; i++) {
    sum += getSleepHours(days[i]); 
  }
  return sum;
}

//the ideal amount of sleep in a week
function getIdealSleepHours() {
  let idealHours = 8;
  return idealHours*7; 
}

//console.log(getActualSleepHours()); 
//console.log(getIdealSleepHours()); 

//calculates sleep debt
function calculateSleepDebt() {
  let actualSleepHours = getActualSleepHours(); 
  let idealSleepHours = getIdealSleepHours();
  let sleepDebt = Math.abs(idealSleepHours - actualSleepHours); 
  if(actualSleepHours === idealSleepHours) {
    console.log('The user got a perfect amount of sleep');
  }
  else if(actualSleepHours > idealSleepHours) {
    console.log(`The user got ${sleepDebt} more hours of sleep than needed`);
  }
  else {
    console.log(`The user should get ${sleepDebt} more hours of rest`);
  }
}

calculateSleepDebt();

//another way to write this function
/*function getActualSleepHours() {
  return 7+7+6+6+8+8+8; 
}*/

//rewrite function to include a parameter and argument
/*function getIdealSleepHours(idealAmount) {
  let idealHours = idealAmount; 
  return idealHours*7; 
}*/

/*function calculateSleepDebt() {
  let actualSleepHours = getActualSleepHours(); 
  let idealSleepHours = getIdealSleepHours(10);
  let sleepDebt = Math.abs(idealSleepHours - actualSleepHours); 
  if(actualSleepHours === idealSleepHours) {
    console.log('The user got a perfect amount of sleep');
  }
  else if(actualSleepHours > idealSleepHours) {
    console.log(`The user got ${sleepDebt} more hours of sleep than needed`);
  }
  else {
    console.log(`The user should get ${sleepDebt} more hours of rest`);
  }
}*/

