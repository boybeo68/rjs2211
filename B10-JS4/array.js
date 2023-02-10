// const str = 'tung';
// const convert = str.toUpperCase(); // giữ nguyên giá trị gốc. => tạo ra 1 bản sao thay đổi và gán vào 1 biến mới
// console.log(str);
// console.log(convert);

// Array : mảng => dữ liệu dạng list, thống kê, liệt kê, danh sách.
const array = [
  'tung',
  'trung',
  'doan',
  123,
  false,
  true,
  {data: 'Du lieu'},
  [1, 2, 3],
];
const emptyArray = [];
const listNumber = [1, 2, 3, 4];
array[2] = 'update';
// console.log(emptyArray);
// console.log(array[2]);
// console.log(array.length);
// console.log(array[array.length - 1]);

// Thêm phần tử vào cuối
const data = listNumber.push(2);
// console.log(data);
// console.log(listNumber);
// push : thay đổi trực tiếp array gốc. Return length of array.

// const pushReal = (arr, value) => {
//   arr[arr.length] = value;
//   return arr.length;
// };

// const data2 = pushReal(listNumber, 10);
// console.log(data2);

// Thêm phần từ vào đầu mảng - thay đổi mảng gốc - trả về độ dài array
// console.log(listNumber);
listNumber.unshift('first');
// Xóa ở đầu.
listNumber.shift();
// console.log(listNumber);
// xóa ở cuối
listNumber.pop();

// console.log(listNumber);
// thêm, xóa vào vị trí bất kỳ, - thay đổi mảng gốc - trả về array chưa các phần tử đã xóa.
listNumber.splice(0, 2, 'Tung', 'Hoa', 'TEst');
// console.log(listNumber);
// console.log(listNumber.indexOf(4));

const newArray1 = [1, 2, 3, 4, 5];
// newArray1.reverse();
const str = 'Day-la-data-moi ';
const strConvertArray = str.split('-');
console.log(strConvertArray.join('/'));
