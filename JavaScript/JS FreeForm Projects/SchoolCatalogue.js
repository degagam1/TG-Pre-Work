/* Digital School Catalog for NYC Dept of Education */

class School {
  constructor(name, level, numberOfStudents) {
    this._name = name; 
    this._level = level; 
    this._numberOfStudents = numberOfStudents; 
  }
  get name() {
    return this._name; 
  }
  get level() {
    return this._level; 
  }
  get numberOfStudents() {
    return this._numberOfStudents; 
  }
  set numberOfStudents(num) {
    if(Number.isInteger(sum)) {
      this._numberOfStudents = num; 
    }
    else {
      console.log('Invalid input: numberOfStudents must be set to a Number.')
    }
  }
  quickFacts() {
    console.log(`${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level.`);
  }
  
  static pickSubstituteTeacher(substituteTeachers){
    const index = Math.floor(Math.random()*(substituteTeachers.length-1));
    return substituteTeachers[index];
  }
}

class PrimarySchool extends School {
  constructor(name, numberOfStudents, pickupPolicy){
    super(name, 'primary', numberOfStudents); 
    this._pickupPolicy = pickupPolicy; 
  }
  get pickupPolicy() {
    return this._pickupPolicy; 
  }
}

class MiddleSchool extends School {
  constructor(name, numberOfStudents) {
    super(name, 'middle', numberOfStudents);
  } 
}

class HighSchool extends School {
  constructor(name, numberOfStudents, sportsTeam) {
    super(name, 'high', numberOfStudents); 
    this._sportsTeams = sportsTeam; 
  }
  get sportsTeams() {
    return this._sportsTeams; 
  }
  set sportsTeams(team) {
    this._sportsTeams.push(team);
  }
}

const lorraineHansbury = new PrimarySchool('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.')
lorraineHansbury.quickFacts(); 
let substituteTeachers = ['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']; 
console.log(School.pickSubstituteTeacher(substituteTeachers));

let sportsTeam = ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']; 
const alSmith = new HighSchool('Al E. Smith', 415, sportsTeam);
console.log(alSmith.sportsTeams);



