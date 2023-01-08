// Object => đối tượng.
const people = {
  name: 'Tung',
  age: 20,
  job: 'teacher',
};

// CRUD: tương tác với object (thêm phần tử, sửa phần tử, xóa phần tử)

people.sex = 'male';
people.age = 28;
// delete people.job;
// check phần tử có tồn tại hay không.
// console.log(people.hasOwnProperty('test'));

// C2 để truy cập vào giá trị của object.
people['test'] = 'test 123'; // dùng cho trường hợp properties động.
console.log(people);

const array1 = ['tung', 'trung'];
const obj1 = {
  tung: {
    name: 'Tung',
    age: 20,
  },
  trung: {
    name: 'Trung',
    age: 30,
  },
};

for (let index = 0; index < array1.length; index++) {
  const element = array1[index];
  console.log(obj1[element]);
}

console.log(Object.keys(people));
console.log(Object.values(people));
