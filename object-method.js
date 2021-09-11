var myDog = {
    weight: 5,
    name: 'Đần',
    age: 1,
    bark: function () {
        console.log('Meo meo, my dog name is', this.name); // this is myDog
    },
    eat: function (bone) {
        console.log('My dog weight is', (this.weight + bone.weight));
    }
};
myDog.bark();
myDog.eat({weight: 0.5});
