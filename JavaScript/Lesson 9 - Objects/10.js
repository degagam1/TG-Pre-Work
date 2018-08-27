let person = {
  name: 'Merry Degaga',
  age: 27, 
  weekendAlarm: 'No alarms needed', 
  weekAlarm: 'Alarm set to 7AM', 
  sayGoodbye() {
  return 'Goodbye!'; 
}, 
  sayHello () { 
  return `Hello, my name is ${this.name}`
}, 

  };

let friend = {
  name: 'Max', 
};

friend.sayHello = person.sayHello; 
console.log(friend.sayHello()); 

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


console.log(person.sayHello());