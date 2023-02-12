// C1: callback
// Bài toán pha cafe: Start => pha cafe trong 5s (doing) => Done.
const notAsync = () => {
  setTimeout(() => {
    console.log('doing');
  }, 3000);
};

const doingCoffee = (cb) => {
  setTimeout(() => {
    console.log('Doing......');
    const b = 'Tôi đã có cafe';
    const c = 'Tôi đã có cafe 2';
    cb(b, c);
  }, 1000);
};

console.log('Start');
doingCoffee((item, index) => {
  console.log('Done', item, index);
});

// Tính diện tích hình thang (a + b) * h /2
// Thực hiện phép cộng mất 3000ms
// Thực hiện phép nhân mất 2000ms
// Thực hiện phép chia mất 1000ms
// Trả về kết quả cuối cùng.
// Sử dụng callback để xử lý
