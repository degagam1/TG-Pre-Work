let person = {
  _name: 'Lu Xun',
  _age: 137,
  set age(age) {
    if(Number.isInteger(age)) {
      this._age = age; 
    }
    else {
      return 'Invalid input'; 
    }
  },
  
  get age() {
    return `${this._name} is ${this._age} years old`; 
  },

};

person.age = 'Thirty-nine';  
person.age = 39; 
console.log(person.age); 