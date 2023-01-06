// Bài tập. Chuẩn hóa string.
// '  NGuYen ThAc tUnG  ' => 'Nguyen Thac Tung'
let chuanHoa = '  NGuYen ThAc tUnG  ';
let nameConvert = chuanHoa.trim().toLocaleLowerCase();
console.log(nameConvert);
for (let i = 0; i < nameConvert.length; i++) {
  if (i === 0 || nameConvert.charAt(i - 1) === ' ') {
    nameConvert =
      nameConvert.slice(0, i) +
      nameConvert.charAt(i).toUpperCase() +
      nameConvert.slice(i + 1);
  }
}
// '' + 'N' + 'guyen thac tung'
// 'Nguyen ' + 'T' + 'hac tung'
// 'Nguyen Thac ' + 'T' + 'ung',
console.log(nameConvert);
