// Tính diện tích hình thang (a + b) * h /2
// Thực hiện phép cộng mất 3000ms
// Thực hiện phép nhân mất 2000ms
// Thực hiện phép chia mất 1000ms
// Trả về kết quả cuối cùng.
// Sử dụng callback để xử lý

const tong = (a, b) => {
  console.log('Start cộng');
  setTimeout(() => {
    console.log('Cộng xong', a + b);
  }, 3000);
};

tong(5, 6);
