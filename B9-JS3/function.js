// Function
// subprogram: chương trình con.
// tập hợp của source code => làm code ngắn gọn hơn, tường minh hơn
// Cũ: sử dụng từ khóa function
function chayBo() {
  console.log('Khởi động');
  console.log('start chạy');
  console.log('chạy 5km đầu');
  console.log('10 km tiếp theo');
  console.log('về đích');
  console.log('giãn cơ');
}

// chayBo();
//phổ biến hơn: khai báo như 1 biến => arrow function
const learnReact = () => {
  console.log('learn HTML/CSS');
  console.log('learn JS');
  console.log('learn React');
};

// learnReact();
// function có tham số ( parameter truyền vào)
const sum = (param1, param2, param3) => {
  console.log(param1 + param2 + param3);
};

const defaultParams = (name = 'T3h') => {
  console.log('Tên tôi là ' + name);
};

// sum(5, 6, 7);
// defaultParams('Tùng');

// Sử dụng function như 1 biến: => function có kết quả trả về (return)

const parseNumber = (numberStr) => {
  console.log('a');
  console.log('b');
  return parseFloat(numberStr);
  console.log('c');
};
// Những dòng code sau return không được chạy vào

// let total = parseNumber('10') + parseNumber('1.9') + parseNumber(20);
// console.log(total);

// let k = 1239321;
// let str = k + '';
// let newString = '';
// console.log(str);
// for (let i = str.length - 1; i >= 0; i--) {
//   newString += str[i];
// }
// if (newString === str) {
//   console.log('là số đối xứng');
// } else {
//   console.log('không phải số đối xứng');
// }
const symmetry = (k) => {
  let str = k + '';
  let newString = '';
  console.log(str);
  for (let i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }
  if (newString === str) {
    return true;
  } else {
    return false;
  }
};

// const result = symmetry(1235221);
// if (result) {
//   console.log('là số đối xứng');
// } else {
//   console.log('không là số đối xứng');
// }

// rest params. (...)
//
const sumAll = (...allParams) => {
  let total = 0;
  for (let index = 0; index < allParams.length; index++) {
    const element = allParams[index];
    total += element;
  }
  return total;
};

// console.log(sumAll(5, 6, 9));

// callback function.
// => 1 function như 1 params của function khác

const aFunction = (callback) => {
  console.log('Đây là functionstion A');
  callback();
};

aFunction(() => {
  console.log('Đây là function B');
});
// B được gọi là callback function
// để thực hiện 1 tác vụ sau khi hoàn thành 1 tác vụ khác.

// console.log('1');
setTimeout(() => {
  console.log('3');
}, 3000); // chờ 3s mới chạy function bên trong.
// console.log(2);
