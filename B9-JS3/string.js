// String.

let index = 123;
let str = 'sĐây là \nBuổi ${index} là học số 9    ';
let str2 = `sĐây là \nBuổi ${index} là học số 9    `;
let str3 = 123;
console.log(str);
console.log(str.length);
console.log(str.toLowerCase()); // viết thường tất cả ký tự
console.log(str.toUpperCase()); // viết hoa tất cả ký tự
console.log(str.charAt(2)); // trả về ký tự thứ index truyền vào
console.log(str.indexOf('s')); // trả về ví trí của ký tự truyền vào
console.log(str.includes('s')); // check str có nằm trong text ban đầu hay không?
//console.log(str.replace('là', 'tung')); // thay thế str
//console.log(str.replaceAll('là', 'tùng'));
console.log(str.lastIndexOf('s'));
console.log(str.slice(8, 19)); // lấy từ ví trí start đến trước vị trí end
console.log(str.slice(-8)); // lấy từ ví trí start đến trước vị trí end
console.log(str.trim()); // loại bỏ khoảng trắng 2 đầu
console.log(str.substring(3, 9));
console.log(typeof (str3 + '')); // convert số => chuỗi.
