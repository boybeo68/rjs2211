// Tính diện tích hình thang (a + b) * h * (c, d) + (e, f) /2
// Thực hiện phép cộng mất 3000ms
// Thực hiện phép nhân mất 2000ms
// Thực hiện phép chia mất 1000ms
// Trả về kết quả cuối cùng.
// Sử dụng callback để xử lý

const tong = (a, b, cb) => {
  console.log('Start cộng');
  setTimeout(() => {
    console.log('Cộng xong', a + b);
    const sum = a + b;
    cb(sum);
  }, 3000);
};
const nhan = (a, b, cb) => {
  console.log('Start nhan');
  setTimeout(() => {
    console.log('Nhan xong', a * b);
    const mul = a * b;
    cb(mul);
  }, 2000);
};
const chia = (a, b, cb) => {
  console.log('Start chia');
  setTimeout(() => {
    console.log('Chia xong', a / b);
    const div = a / b;
    cb(div);
  }, 1000);
};

// const dataTong = tong(5, 6);
// const dataNhan = nhan(dataTong, 10);
// const dataChia = chia(dataNhan, 2);
// console.log('Kết quả cuối', dataChia);

const dienTichHinhThang = (a, b, h) => {
  tong(a, b, (kqSum) => {
    nhan(kqSum, h, (kqMul) => {
      chia(kqMul, 2, (kqDiv) => {
        console.log(kqDiv);
      });
    });
  });
};

dienTichHinhThang(5, 6, 10);
