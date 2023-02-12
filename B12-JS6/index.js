// Tìm kết quả của phép toán (a + b) * h * (c / d) + (e - f) /2
// Thực hiện phép cộng mất 3000ms
// Thực hiện phép nhân mất 2000ms
// Thực hiện phép chia mất 1000ms
// Thực hiện phép trừ mất 500ms
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
const tru = (a, b, cb) => {
  console.log('Start tru');
  setTimeout(() => {
    console.log('Tru xong', a - b);
    const kqTru = a - b;
    cb(kqTru);
  }, 500);
};

// ketquaCuaPhepToan(5, 6, 10, 3, 4, 2, 5);
ketquaCuaPhepToan(5, 6, 3, 4, 2, 5, 10);

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

// dienTichHinhThang(5, 6, 10);

const ketquaCuaPhepToan = (a, b, h, c, d, e, f) => {
  tong(a, b, (kqTong) => {
    nhan(kqTong, h, (kqNhan) => {
      chia(c, d, (kqChia) => {
        nhan(kqChia, kqNhan, (kqNhan2) => {
          tru(e, f, (kqTru) => {
            chia(kqTru, 2, (kqChia2) => {
              tong(kqChia2, kqNhan2, (kqCuoi) => {
                console.log('ket qua cuoi', kqCuoi);
              });
            });
          });
        });
      });
    });
  });
};

// => call back hell : rất khó maintain
//   sinh 2 cái để xử lý bất đồng bộ Promise và Async await .

// Promise sẽ có trạng thái resolve, reject. => handle thành công/ lỗi
