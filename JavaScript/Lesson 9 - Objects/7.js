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

//add in hobbies 
person.hobbies = ['arts and crafts', 'rock collecting'];
console.log(person.hobbies); 

//edited values in hobbies

//person.hobbies.pop(); 
person.hobbies = ['rock collecting']; 
console.log(person.hobbies);

//created a method for person object
person.sayHello = () => 'Hello, there!'; 

console.log(person.sayHello());