// co rat nhieu method cho cac Array trong js
// xem chi tiet cac method tai MDN Javascript

// reduce method
var numbers = [1, 2, 3, 4];
var sum = numbers.reduce(function (a, b) {
    return a + b;
}, 0);
// reduce function co the nhan vao gia tri thu 2 lam tham so
// tham so thu hai duoc chon dua vao output mong muon
console.log(sum);
