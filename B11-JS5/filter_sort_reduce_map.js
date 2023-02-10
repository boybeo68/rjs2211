// Map : biến đổi "tất cả" phần tử của array theo 1 đk cho trước.
const arr = [1, 2, 3, 4, 5];
const arrMap = arr.map((item, index) => {
  return item * 2;
});

const listAnimals = [
  {name: 'Dog', age: 2, weight: 0.5},
  {name: 'Cat', age: 5, weight: 3},
  {name: 'Pig', age: 10, weight: 20},
  {name: 'Elephant', age: 1, weight: 500},
  {name: 'Chicken', age: 7, weight: 2},
];

const getNameAnimal = listAnimals.map((item, index) => {
  return item.name;
});
// console.log(getNameAnimal, listAnimals);
// * Chú ý: map trả về mảng mới.

// Filter: Tìm kiếm theo điều kiện ( true / false). Trả về 1 array các phần tử thỏa mãn
// => Tìm những động vật có cân nặng lớn hơn 100
const listWeightedAnimal = listAnimals.filter((item) => {
  return item.weight > 1000;
});
console.log(listWeightedAnimal);
// Find: Tìm kiếm phần tử đầu tiên thỏa mãn đk và trả về phần tử đó.
const findAnimal = listAnimals.find((item, index) => item.age > 5);
console.log(findAnimal);

// sort: sắp xếp.

const arrSort = [7, 0, 1, 8, 5, 9, 20, 10];

const newSort = arrSort.sort((a, b) => b - a); // a - b : tăng dần, b- a giảm dần
console.log(newSort);

const nameSort = ['Đức', 'Anh', 'Tùng', 'Hoa'];
const newSortName = nameSort.sort((a, b) => a.localeCompare(b));
console.log(newSortName);

// reduce:
const arrReduce = [3, 5, 13, 5, 12];
const sum = arrReduce.reduce((a, b) => {
  return a + b;
}, 50);
// a = 0; b = 3 => 0 + 3 = 3;
// a = 3; b = 5 => 8
// a = 8; b = 13 => 21
// a =21; b = 5 => 26
// a = 26; b = 12 => 38

console.log(sum);

// tính tổng số cân nặng của list động vật.

const sumWeightAnimal = listAnimals.reduce((a, b) => {
  return a + b.weight;
}, 0);
console.log(sumWeightAnimal);
