var readlineSync = require('readline-sync');

var userName = readlineSync.question('May I have your name? ');

var languages = [];
var language = readlineSync.question('What is your mother language?');
languages.push(language);
console.log('Hi ' + userName + '!');
console.log('Your language: ', languages);
