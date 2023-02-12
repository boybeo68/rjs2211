// Cách để biết code JS chạy như thế nào
// Js là ngôn ngữ chạy bất đồng bộ

// đồng bộ: sync, bất đồng bộ (async).
let a = 10;
console.log('Start');
setTimeout(() => {
  console.log('hello');
}, 5000);
console.log(a);

// Đồng bộ: Chạy code từ trên xuống dưới, từ trái quá phải
// Bất đồng bộ: chạy không theo thứ tự trên. Nhưng code (JS đánh giá là mất ít thời gian xử lý) sẽ chạy trước. Code mất thời gian xử lý sẽ chạy sau
// Code mất ít thời gian xử lý: tất cả code cơ bản: khai báo , log, tính toán +-*/, for, xử lý array, object...
// Code mất nhiều thời gian xử lý: có đỗ trễ: setTimout, Tương tác với server ( call api ), đọc ghi file.
// Làm thế nào để biến bất đồng bộ -> thành đồng bộ.
// => xử lý bất đồng bộ => biến bất đồng bộ thành đồng bộ => async  => sync
// Có 3 cách để xử lý bất đồng bộ : callback, promise, async - await.

// Event Loop trong JS
