/*Randomly create a three course meal based on a provided menu 
*/

let menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: [],
    
    get apps(){
      return this.appetizers;
    },
    get main(){
      return this.mains; 
    },
    get dessert(){
      return this.desserts; 
    },
    
    set apps(food){
      this.appetizers.push(food);
    },
    set main(food){
      this.mains.push(food);
    },
    set dessert(food){
      this.desserts.push(food);
    }
    
  },
  get courses(){
    return { 
      appetizers: this._courses.appetizers,
      mains: this._courses.mains,
      desserts: this._courses.desserts
    }
  }, 
  addDishToCourse(course, name, price) {
    const dish = {
      name,
      price,
    }
    if(course === 'appetizers') {
      this._courses.apps = dish;
    }
    else if(course === 'mains') {
      this._courses.main = dish;       
    }
    else {
      this._courses.dessert = dish;       
   } 
    //console.log(dish.price); works 
  }, 
  getRandomDishFromCourse(courseName) {
    //console.log(courseName);
    const dishes = this._courses[courseName];
    //console.log(this._courses.appetizers);
    const index = Math.floor(Math.random()*dishes.length);
    //console.log(dishes.length);
    //console.log(dishes[index]);
    return dishes[index]; 
  }, 
  generateRandomMeal() {
    const appetizer = this.getRandomDishFromCourse('appetizers');
    const main = this.getRandomDishFromCourse('mains'); 
    const dessert = this.getRandomDishFromCourse('desserts'); 
   //console.log(appetizer.price);
  const total = appetizer.price + main.price + dessert.price; 
  return `An order of ${appetizer.name}, ${main.name}, and ${dessert.name} will cost ${total} dollars.`
  }
};

menu.addDishToCourse('appetizers','Pecan Salad',6);
menu.addDishToCourse('appetizers','Hot Wings',5);
menu.addDishToCourse('appetizers','Hummas and Pita',4);

menu.addDishToCourse('mains','Pulled Pork',10);
menu.addDishToCourse('mains','Spaghetti and Meatballs',8);
menu.addDishToCourse('mains','Veggie Burger',7);

menu.addDishToCourse('desserts','Flan',5);
menu.addDishToCourse('desserts','Truffle Cheesecake',5);
menu.addDishToCourse('desserts','Vanilla Bean Ice Cream',3);



const meal = menu.generateRandomMeal(); 
console.log(meal);