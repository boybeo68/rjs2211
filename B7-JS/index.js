// toán tử và câu điều kiện
// + , - , * , /, % (chia lấy dư) , !(ngược lại) ,       > , < , >=, <=, ==, != (khác), ===, !==
let a = null; // khai báo 1 biến. nhưng tại thời điểm khai báo ko biết nên gán giá trị gì cho nó
let b = 3; // number
let c = '3'; // string
console.log(b != c); // so sánh cả kiểu dữ liệu

// điều kiện
let score = 7;
if (score <= 5) {
  console.log('bạn bị điểm kém');
} else if (score > 5 && score < 8) {
  console.log('bạn được điểm trung bình');
} else {
  console.log('bạn điểm cao đấy');
}

let data = null;
if (data) {
  console.log('co du lieu');
}
