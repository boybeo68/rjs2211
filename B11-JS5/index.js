const shortid = require('shortid');
const {FormatMoney} = require('format-money-js');
const fs = require('fs');
const fm = new FormatMoney({
  decimals: 2,
});

console.log(shortid.generate());

const products = [
  {
    id: shortid.generate(),
    name: 'iphone',
  },
  {
    id: shortid.generate(),
    name: 'samsung',
  },
];

console.log(fm.from(1200000.56, {symbol: 'vnđ '})); // return string: $12,345.67

fs.readFile('./agenda.txt', function (err, data) {
  if (err) throw err;
  console.log(data.toString());
});
fs.writeFileSync('./test.txt', 'Ghi du lieu vao file test ');
