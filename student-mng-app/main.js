var readlineSync = require('readline-sync');
var fs = require('fs');

var students = [];

function showMenu() {
    console.log('1. Show all student');
    console.log('2. Create a student');
    console.log('3. Save & Exit');
    var option = readlineSync.question('> ');
    switch (option) {
        case '1':
            showStudent();
            showMenu();
            break;
        case '2':
            showCreateStudent();
            showMenu();
            break;
        case '3':
            saveAndExit();
            break;
        default:
            showMenu();
            break;
    }
}

function loadData() {
    var fileContent = fs.readFileSync('./data.json');
    students = JSON.parse(fileContent);
}

function showStudent() {
    for (const student of students) {
        console.log(student.name, student.age)
    }
}

function showCreateStudent() {
    var name = readlineSync.question('Name? ');
    var age = readlineSync.question('Age? ');
    const student = {
        name: name,
        age: parseInt(age)
    };
    students.push(student);
}

function saveAndExit() {
    var content = JSON.stringify(students);
    fs.writeFileSync('./data.json', content, { encoding: 'utf8' });
}

function main() {
    showMenu();
    loadData();
}

main();
