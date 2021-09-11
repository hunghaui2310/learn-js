function Mouse(color, weight) {
    this.type = 'mouse';
    this.color = color;
    this.weight = weight;
}

Mouse.prototype.sleep = function () {
    console.log('Sleeping...');
};

// prototype duoc chia se boi tat ca cac object duoc tao bang tu khoa "new"
var jerry = new Mouse('orange', 20);
jerry.sleep();

var mickey = new Mouse('white', 10);
mickey.sleep();

// -> Dung prototype giup tiet kiem bo nho
