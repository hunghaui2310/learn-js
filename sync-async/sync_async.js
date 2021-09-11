var fs = require('fs')

// read file with sync
console.log('Start');
var song1 = fs.readFileSync('song1.txt', {encoding: 'utf8'});
var song2 = fs.readFileSync('song2.txt', {encoding: 'utf8'});
console.log('song = ', song1, song2);
console.log('End==========');

// read file with async

console.log('Start Async');
fs.readFile('song1.txt', {encoding: 'utf8'}, (err, data) => {
    console.log(data);
});

console.log('End Async');
