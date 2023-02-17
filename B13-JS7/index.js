// Tìm kết quả của phép toán (a + b) * h /2
// Thực hiện phép cộng mất 3000ms
// Thực hiện phép nhân mất 2000ms
// Thực hiện phép chia mất 1000ms
// Thực hiện phép trừ mất 500ms
// Trả về kết quả cuối cùng.
// Sử dụng promise (lời hứa) để xử lý: thành công, thất bại.
// 1 function gọi là promise khi nó return ra 1 Promise.
// promise nhận vào 1 function callback

const tong = (a, b) => {
  return new Promise((resolve, reject) => {
    console.log('Start Cong');
    setTimeout(() => {
      const sum = a + b;
      if (typeof a === 'number' && typeof b === 'number') {
        console.log('Cong done', sum);
        resolve(sum);
      } else {
        reject('Bạn phải nhập số để thực hiện phép cộng');
      }
    }, 3000);
  });
};
const nhan = (a, b) => {
  return new Promise((resolve, reject) => {
    console.log('Start Nhan');
    setTimeout(() => {
      const result = a * b;
      if (typeof a === 'number' && typeof b === 'number') {
        console.log('Nhan done', result);
        resolve(result);
      } else {
        reject('Bạn phải nhập số để thực hiện phép nhan');
      }
    }, 2000);
  });
};
const chia = (a, b) => {
  return new Promise((resolve, reject) => {
    console.log('Start Chia');
    setTimeout(() => {
      const result = a / b;
      if (typeof a === 'number' && typeof b === 'number' && b !== 0) {
        console.log('Chia done', result);
        resolve(result);
      } else {
        reject('Bạn phải nhập số để thực hiện phép chia và b != 0');
      }
    }, 1000);
  });
};

const ketqua = (a, b, h) => {
  tong(a, b)
    .then((result) =>
      nhan(result, h).then((dataNhan) => {
        chia(dataNhan, 2).then((ketquaCuoi) => {
          console.log('kết quả cuối', ketquaCuoi);
        });
      }),
    )
    .catch((err) => {
      console.log(err);
    });
};

ketqua(5, 'tung', 2);
