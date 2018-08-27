let myPlaces = ['Ireland', 'Alaska', 'Russia']; 

let friendPlaces = ['California', 'India', 'Russia'];

for(let myPlacesIndex = 0; myPlacesIndex < myPlaces.length; myPlacesIndex++) {
  //console.log(myPlaces[myPlacesIndex]);
  for(let friendPlacesIndex = 0;friendPlacesIndex < friendPlaces.length;friendPlacesIndex++) {
    //console.log(friendPlaces[friendPlacesIndex]);
    if(myPlaces[myPlacesIndex] === friendPlaces[friendPlacesIndex]) {
      console.log(myPlaces[myPlacesIndex]); 
    }
  }
}

