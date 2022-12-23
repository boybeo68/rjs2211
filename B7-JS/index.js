// Khai báo biến và các kiểu dữ liệu trong js.
// + Number: 1,2,3,4...
// + string: text,  '2'
// + boolean: true/false
// + object: đối tượng vd student, product, car.
// vd: {
//     name: "Tung",
//     age: 22,
//     address: "Hà Nội."
// }
// + function:
// function run() {
//   console.log('tôi đang chạy');
// }
// + undefined: value không được assign.
// JS: ngôn ngữ freestyle=> không cần khai báo kiểu dữ liệu mà JS sẽ tự nhận diện.
// 3 cách khái báo biên. var, const, let.
// Khai báo biến. lấy 1 giá trị và lưu vào trong ô nhớ
// var data = 'đây là giá trị';
// const data2 = 'Đây là giá trị 2';
// let data3 = 'đây là giá trị 3';

// var data = 10;
// var a = 20;
// console.log(data);

// let b = 'Tung';
// console.log(b);
// const PI = 3.14; // dùng cho giá trị mà không bao giờ thay đổi.
// // PI = 5;
// console.log(PI);

let number = 123;
let string = 'Tung kjhkjhkhkjhk'; // hiển thị string thuân túy
let string3 = `Tung ${10 + 20} `; // khi cần xen logic vào string
let boolean = true;
let car = {
  name: 'mada',
  price: 1000000000000,
  year: 2022,
};

function run() {
  console.log('tôi đang chạy');
}

let run2 = () => {};

console.log(typeof tung); // đang sử dụng 1 biến mà không được định nghĩa từ trước.
