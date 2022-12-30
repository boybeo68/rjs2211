let a = 5;
// if (a >= 8) {
//   console.log('bạn là học sinh giỏi');
// } else {
//   console.log('Bạn là học sinh kém');
// }

// console.log(a >= 8 ? 'bạn là học sinh giỏi' : 'bạn là học sinh kem'); // viết tắt của if/else
// dùng switch case cho các trường hợp: a==5, a == 9, a== 10;
// status == 0 => 'không có giá trị '
// status == 1 => 'bạn đúng rồi '
// status == 2=> 'bạn sai rồi'

// switch (a) {
//   case 5:
//     console.log('bạn được 5 điểm');
//     break; // thoát ra bên ngoài
//   case 9:
//     console.log('bạn được 9 điểm');
//     break;
//   case 10:
//     console.log('bạn được 10 điểm');
//     break;

//   default:
//     console.log('bạn được điểm khác 5, 9, 10');
//     break;
// }

// console.log('đêm số 1');
// console.log('đêm số 2');
// console.log('đêm số 3');
// console.log('đêm số 4');
// console.log('đêm số 5');
// console.log('đêm số 6');
// console.log('đêm số 7');
// console.log('đêm số 8');
// console.log('đêm số 9');
// console.log('đêm số 10');

// for: vòng lặp => xử lý những bài toán lặp lại

// let index = 10;
// index++; // index = index + 1
// index +=2 ;// index = index + 2
// index +=3 ;// index = index + 3
// console.log(index);

// khởi tạo biến đếm; điều kiện dừng, số bước nhảy () => dùng khi biết số lần lặp
for (let index = 0; index < 100; index += 2) {
  // bước nhảy mỗi lần lên 1 đơn vị
  //   console.log('đếm số', index);
}
// lần đầu 1: index = 0;  => true => console.log('đếm số 0'); index = 1;
// lần đầu 2: index = 1;  => true => console.log('đếm số 1'); index = 2;...

let b = 10; // khi muốn lặp vô hạn, làm đi làm lại không có hồi kết.
// while (true) {
//   console.log('đếm số b', b);
//   b += 2;
// }
// do while

do {
  //   console.log('đếm số b', b);
  b += 2;
} while (b < 5);

// do while luôn chạy 1 lần đầu tiên rồi mới so sánh
// break, continue: stop loop.

// break
for (let index = 1; index <= 10; index++) {
  //   console.log(index);
  if (index === 5) {
    break; // thoát khỏi vòng lặp
  }
}

for (let index = 1; index <= 10; index++) {
  if (index === 5) {
    continue; // thoát khỏi lần lặp.
  }
  let a = 10;
  a = a + index; // thực hiện những logic với lần lặp
  console.log(a);
}


