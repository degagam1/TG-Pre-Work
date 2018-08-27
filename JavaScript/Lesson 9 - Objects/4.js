let person = {
  name: 'Merry Degaga',
  age: 27, 
  weekendAlarm: 'No alarms needed', 
  weekAlarm: 'Alarm set to 7AM', 
};

//dot notation 
//console.log(person.name);
//console.log(person.age);

//bracket notation 
console.log(person['name']); 
console.log(person['age']); 

let day = 'Sunday'; 
let alarm; 

if(day === 'Saturday' || day === 'Sunday') {
  alarm = 'weekendAlarm'; 
}
else {
  alarm = 'weekAlarm'; 
}

console.log(person[alarm]); 


