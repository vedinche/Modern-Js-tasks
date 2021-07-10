//TODO: На основе строки “i am in the easycode” сделать новую строку где первые буквы каждого слова
//будут в верхнем регистре. Использовать for или while.

let str = 'i am in the easycode';
let newStr = '';
let strArray = str.split(' ');

for (let i = 0; i < strArray.length; i++) {
  strArray[i] = strArray[i].slice(0, 1).toUpperCase() + strArray[i].slice(1);
  newStr = strArray.join(' ');
}

for (let i = 0; i < str.length; i++) {
  if (str[i - 1] === ' ' || i === 0) {
    newStr += str[i].toUpperCase();
  } else {
    newStr += str[i];
  }
}

for (let i = 0; i < str.length; i++) {
  str[i - 1] === ' ' || i === 0
    ? (newStr += str[i].toUpperCase())
    : (newStr += str[i]);
}

console.log(res);

//TODO: Дана строка “tseb eht ma i”. Используя циклы, сделать строку-перевертыш
//(то есть последняя буква становится первой, предпоследняя - второй итд).

let str = 'tseb eht ma i';
let res = '';

for (let i = str.length - 1; i >= 0; i--) {
  res += str[i];
}

console.log(res);

// let str = 'tseb eht ma i';

// let res = '';

// for(let i = str.length; i > 0 ; i--) {

//     res += str[i - 1];

// };

//TODO: Факториал числа - произведение всех натуральных чисел от 1 до n
//включительно: 3! = 3*2*1, 5! = 5*4*3*2*1. С помощью циклов вычислить факториал числа 10. Использовать for.
let result = 1;

for (let i = 1; i <= 10; i++) {
  result *= i;
}

console.log(result);

//TODO: На основе строки “JavaScript is a pretty good language” сделать новую строку,
//где каждое слово начинается с большой буквы, а пробелы удалены. Использовать for.

let str = 'JavaScript is a pratty good language';
let res = '';
let strArray = str.split(' ');

for (let i = 0; i < strArray.length; i++) {
  strArray[i] = strArray[i].slice(0, 1).toUpperCase() + strArray[i].slice(1);
  console.log(strArray[i]);
  res = strArray.join('');
}

console.log(res);

//TODO: Найти все нечетные числа в массиве от 1 до 15 включительно и вывести их в консоль.
//Массив [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15] Использовать for of.

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

let res = [];

for (key of arr) {
  if (key % 2 === 1) {
    res.push(key);
  }
}

console.log(res);

// for(let value of arr) {

// 	if(value % 2)

// 			console.log(value);

// }

//TODO: Дан объект:
// let list = {

// 	name: ‘denis’,

// 	work: ‘easycode’,

// 	age: 29

// 	}
// 	Перебрать объект и если значение в свойстве это строка то переписать ее всю в верхнем регистре. Использовать for in.

let list = {
  name: 'denis',

  work: 'easycode',

  age: 29,
};

for (key in list) {
  if (typeof list[key] === 'string') {
    list[key] = list[key].toUpperCase();
  }
}

console.log(list);
