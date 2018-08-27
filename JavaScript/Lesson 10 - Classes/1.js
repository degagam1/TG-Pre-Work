class Dog {
  constructor(name) {
    this.name = name;
    this.behavior = 0;
  }

  get name() {
    return this._name;
  }
  get behavior() {
    return this._behavior;
  }   

  incrementBehavior() {
    this._behavior ++;
  }
}

const halley = new Dog('Halley'); 
console.log(halley.name); //Print name value to console 
console.log(halley.behavior); 
halley.incrementBehavior(); 
console.log(halley.name); 
console.log(halley.behavior); 