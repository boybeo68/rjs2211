// number
let number = 10.4;
// let numberStr = '10.5';
// let converNumberInt = parseInt(numberStr);
// let converNumberFloat = parseFloat(numberStr);
// console.log(converNumberFloat);

// let a = 20;
// console.log(a - number);
console.log(Math.round(number)); // làm tròn toán học
console.log(Math.floor(number)); // làm tròn xuống
console.log(Math.ceil(number)); // làm tròn lên.

console.log(Math.random()); // ngẫu nhiên 1 số trong khoảng từ 0 -> 1

// Làm xúc sắc: đổ xúc sắc mỗi lần ra 1 số ngẫu nhiên từ 1-> 6
//=> random ngẫu nhiên trong khoảng từ min -> max

console.log(Math.floor(Math.random() * 6) + 1);
let min = 10;
let max = 100;
let randomMinMax = Math.floor(Math.random() * (max - min + 1)) + min;
// 0.01 -> 0.9
// (0.01 * 91) -  (0.9 * 91)
// 0.9 -> 81
// 10.9 -> 91 => 10 - 100
console.log(randomMinMax);
