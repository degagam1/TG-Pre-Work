let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

//console.log(secretMessage.length)
secretMessage.pop();
//console.log(secretMessage.length);
secretMessage.push('to');
secretMessage.push('Program');
//console.log(secretMessage.length); 
secretMessage[secretMessage.indexOf('easily')] = 'right';
//console.log(secretMessage); 
secretMessage.shift(); 
//console.log(secretMessage.length); 
secretMessage.unshift('Programming'); 
//console.log(secretMessage); 

secretMessage[secretMessage.indexOf('get')] = 'know'; 
secretMessage.splice(secretMessage.indexOf('right'),4); 
//console.log(secretMessage); 
console.log(secretMessage.join());



