import Airplane from ‘./8';

function displayFuelCapacity() {
  Airplane.availableAirplanes.forEach(
    function(element) { 
    console.log('Fuel Capacity of ' + element.name + ' : ' + element.fuelCapacity)});
}; 

displayFuelCapacity(); 