class HospitalEmployee {
  constructor(name) {
    this._name = name;
    this._remainingVacationDays = 20;
  }
  
  get name() {
    return this._name;
  }
  
  get remainingVacationDays() {
    return this._remainingVacationDays;
  }
  
  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }
  
  static generatePassword() {
    return Math.floor(Math.random() * 10001);
  }
}

class Nurse extends HospitalEmployee {
  constructor(name, certifications) {
    super(name);
    this._certifications = certifications;
  } 
  
  get certifications() {
    return this._certifications;
  }
  
  addCertification(newCertification) {
    this.certifications.push(newCertification);
  }
};

class Doctor extends HospitalEmployee {
  constructor(name,insurance) {
    super(name); 
    this._insurance = insurance; 
  }
  get insurance() {
    return this._insurance; 
  }
  addInsurance(insurance) {
    this._insurance = this._insurance.concat(insurance); 
  }
};

//nurse
const nurseOlynyk = new Nurse('Olynyk', ['Trauma','Pediatrics']);
nurseOlynyk.takeVacationDays(5);
console.log(nurseOlynyk.remainingVacationDays);
nurseOlynyk.addCertification('Genetics');
console.log(nurseOlynyk.certifications);

//doctor
const doctorBob = new Doctor('Bob', ['Aetna', 'Capital Health']);
console.log(doctorBob.insurance); 
doctorBob.addInsurance(['Medicare', 'Medicaid']); 
console.log(doctorBob.insurance);
console.log(doctorBob.remainingVacationDays);