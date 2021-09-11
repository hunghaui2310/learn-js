// vong lap for co ban
for (var i = 0; i < 5 ; i++) {
    console.log('i = ', i);
}

var employees = [
    {name: 'A', age: 20},
    {name: 'B', age: 23},
    {name: 'C', age: 24},
    {name: 'D', age: 22}
]

// vong lap for of: lap qua cac phan tu trong mot mang
for (var employee of employees) {
    console.log('employee =', employee.name);
}

var myDog = {
    name: 'Đần',
    age: 1,
    weight: 5
}

// vong lap for in: lap qua cac key trong mot object
for (var key in myDog) {
    console.log('key =', key);
}
