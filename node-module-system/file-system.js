var fs = require('fs');

var text = fs.readFileSync('./test.txt', {encoding: 'utf8'});
console.log(text);

fs.writeFileSync('./test2.txt', 'Hello, I created file by file system of NodeJs');
