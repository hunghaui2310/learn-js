// dung ham nhu mot tham so: callback
var coffeeMachine = {
    makeCoffice: function (onFinish) {
        console.log('Making coffee...');
        onFinish();
    }
};

coffeeMachine.makeCoffice(function () {
    console.log('Bip bip!');
})
