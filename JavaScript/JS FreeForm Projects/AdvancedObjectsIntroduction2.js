const robot = {
  energyLevel: 100,
  //checkEnergy: () => {
   checkEnergy () {
     console.log(`Energy is currently at ${this.energyLevel}%.`)
  }
}

robot.checkEnergy();