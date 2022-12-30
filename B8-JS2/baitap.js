// in ra số từ 1 -> n
// let n = 20;
// for (let index = 1; index <= n; index++) {
//   console.log(index);
// }

//Viết chương trình in ra các số lẻ từ 1 đến n?
// let n = 20;
// for (let index = 0; index <= n; index += 2) {
//   console.log(index);
// }

// Viết chương trình tính tổng từ 1 đến n?
// let n = 10;
// let tong = 0;
// for (let index = 0; index <= n; index++) {
//   tong += index;
// }
// console.log(tong);

// 0. Viết chương trình kiểm tra n có phải là số nguyên tố hay không?
// Định nghĩa  => thuật toán để xử lý vấn đề
//  số nguyên tố là số > 1, chia hết cho 1 và chính nó
// 173, 163, 157, 151, 2 => testcase.
let n = 290;
let flag = true;

// if (n < 2) {
//   flag = false;
// } else {
//     // vong lặp sẽ chạy bao nhiêu lần? n - 2 lần
//   for (let index = 2; index < n; index++) {
//     if (n % index === 0) {
//       flag = false;
//       break;
//     }
//   }
// }

// C2
// if (n < 2) {
//   flag = false;
// } else if (n === 2) {
//   flag = true;
// } else {
//     // vòng lặp sẽ lặp bao nhiêu lần. (n/2) - 3
//   for (let index = 3; index < n; index += 2) {
//     if (n % index === 0) {
//       flag = false;
//       break;
//     }
//   }
// }

// C3:
if (n < 2) {
  flag = false;
} else if (n === 2) {
  flag = true;
} else if (n % 2 == 0) {
  flag = true;
} else {
  // vòng lặp sẽ lặp bao nhiêu lần?
  for (let index = 3; index <= Math.sqrt(n); index++) {
    if (n % index === 0) {
      flag = false;
      break;
    }
  }
}

if (flag === true) {
  console.log('Là số nguyên tố');
} else {
  console.log('không là số nguyên tố');
}

// => tối ưu C3:
// căn bậc 2 của N.

// n là số nguyên tố thì trong khoảng từ 2 đến căn bậc hai cua n sẽ không tồn tại số mà n chia hết

//  Kiểm tra n có phải là số đối xứng?

// => biến về string => '1239321'
// //
// => '123', '321'

// let str = 'tung rat dep trai';
// console.log('giá tri', str.length); // trả về số lượng ký tự
// console.log('item', str[10]); // bắt đầu từ 0;

let k = 1239321;
let str = k + '';
let newString = '';
console.log(str);
for (let i = str.length - 1; i >= 0; i--) {
  newString += str[i];
}
if (newString === str) {
  console.log('là số đối xứng');
} else {
  console.log('không phải số đối xứng');
}
