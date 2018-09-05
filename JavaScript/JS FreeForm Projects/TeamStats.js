const team = {
  _players:[
    {firstName: 'Pablo',
     lastName:'Sanchez',
     age: 11}, 
    {firstName: 'Mike',
     lastName:'Long',
     age: 9}, 
    {firstName: 'Juan',
     lastName:'Bell',
     age: 13}
           ], 
  
  _games: [
    {opponent: 'Broncos', 
    teamPoints: 42,
    opponentPoints: 27}, 
    {opponent: 'Eagles', 
    teamPoints: 30, 
    opponentPoints: 45},
    {opponent: 'Dolphins',
    teamPoints: 46, 
    opponentPoints: 30}
          ],
  get games() {
    return this._games;
  },
  get players() {
    return this._players;
  }, 
  set players(player) {
    this._players.push(player); 
  },
  set games(game) {
    this._games.push(game)
  },
  addPlayer(firstName, lastName, age) {
    this.players = {
      firstName,
      lastName, 
      age
    }
  }, 
  addGame(opponent, teamPoints, opponentPoints) {
    this.games = {
      opponent, 
      teamPoints, 
      opponentPoints
    }
  }
};

//console.log(team._players[0])
//console.log(team.games);
team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);
console.log(team.players);

team.addGame('Giants', 70, 90); 
team.addGame('Jets', 30, 25);
team.addGame('Steelers', 40, 30);
console.log(team.games);