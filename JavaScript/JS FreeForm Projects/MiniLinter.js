let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

const storyWords = story.split(' ');
//console.log(storyWords.length);

//console.log(storyWords.indexOf('extremely'));
//filter out unnecessary words from the story
const betterWords = storyWords.filter(word => !(unnecessaryWords.includes(word)));
//console.log(betterWords.indexOf('extremely'));

//inform user of how many times they overused certain words
const storyOverUsedWords = betterWords.filter(word => overusedWords.includes(word));

//logs the word count
console.log(`Word count: ${betterWords.length}`);

//logs number of overused words
console.log(`User overused ${storyOverUsedWords.length} words`);
let numReally = 0; 
let numVery = 0; 
let numBasic = 0; 
for(let i = 0; i < storyOverUsedWords.length; i++) {
  let word = storyOverUsedWords[i]; 
  if(word === 'really'){
    numReally++; 
  }
  else if(word === 'very') {
          numVery++; 
          }
  else {
    numBasic++; 
  }
}
console.log(`Really was used ${numReally} times`);
console.log(`Very was used ${numVery} times`);
console.log(`Basically was used ${numBasic} time`);

//count how many sentences are in the story
let counter = 0; 
function check(word) {
  if(word[word.length-1] === '.' || word[word.length-1] === '!') {
    counter++; 
  }
}
betterWords.forEach(check);
console.log(`Number of sentences in the story are ${counter}`);

console.log(betterWords.join(" "));



