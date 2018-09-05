class Media {
  constructor(title) {
    this._ratings = []; 
    this._isCheckedOut = false; 
    this._title = title; 
  } 
    get ratings() {
      return this._ratings; 
    }
    get isCheckedOut() {
      return this._isCheckedOut;
    }
    get title() {
      return this._title; 
    }
  set isCheckedOut(val) {
    this._isCheckedOut = val; 
  }
  getAverageRating() {
    let sum = this._ratings.reduce((accumulator, currentValue) => accumulator + currentValue); 
    return sum/this._ratings.length; 
  }
  
  toggleCheckOutStatus(){
    if(this._isCheckedOut) {
      this._isCheckedOut = false; 
    }
    else {
      this._isCheckedOut = true; 
    } 
  }
  addRating(rating) {
   this._ratings.push(rating);
  }
}

class Book extends Media {
  constructor(author, title, pages){
    super(title); 
    this._author = author;
    this._pages = pages; 
  }
  get author(){
    return this._author; 
  }
  get pages() {
    return this._pages; 
  }
}

class Movie extends Media {
  constructor(director, title, runtime){
    super(title); 
    this._director = director;  
    this._runTime = runtime; 
  }
  get director() {
    return this._director; 
  }
  get runTime() {
    return this._runTime; 
  }
}

class CD extends Media {
  constructor(title, artist){
    super(title); 
    this._artist = artist; 
    this._songs = []; 
  }
  get artist() {
    return this._artist; 
  }
  get songs() {
    return this._songs; 
  }
}

const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544);
//console.log(historyOfEverything.isCheckedOut);
historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything.isCheckedOut);
historyOfEverything.addRating(4); 
historyOfEverything.addRating(5);
historyOfEverything.addRating(5); 
console.log(historyOfEverything.ratings); 
console.log(historyOfEverything.getAverageRating());

const speed = new Movie('Jan de Bont', 'Speed', 116);
console.log(speed);
console.log(speed.isCheckedOut);
speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut);
speed.addRating(1); 
speed.addRating(1); 
speed.addRating(5); 
console.log(speed.ratings); 
console.log(speed.getAverageRating())

