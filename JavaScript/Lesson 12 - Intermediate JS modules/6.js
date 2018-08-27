class Plane {
	constructor(name, fuelCapacity) {
    this.name = name; 
    this.fuelCapacity = fuelCapacity; 
  }  
};

let aeroJet = new Plane('AeroJet', 800); 
let skyJet = new Plane('SkyJet', 500); 

const Airplane = {
  availableAirplanes: [aeroJet, skyJet],
}; 

export default Airplane; 

