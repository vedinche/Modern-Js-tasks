//1.На основе массива [1,2,3,5,8,9,10] сформировать новый массив,
//каждый элемент которого будет хранить информацию о числе и его четности:
//[{digit: 1, odd: true}, {digit: 2, odd: false}, {digit: 3, odd: true}...]

let arr = [1, 2, 3, 5, 8, 9, 10];

function checkArr(arr) {
  let newArr = [];

  arr.forEach((item) => {
    if (item % 2 == 0) {
      newArr.push({
        digit: item,
        odd: false,
      });
    } else {
      newArr.push({
        digit: item,
        odd: true,
      });
    }
  });

  return newArr;
}

console.log(checkArr(arr));

let arrNum = [1, 2, 3, 5, 8, 9, 10];

function checkOdd(arr) {
  let newArr = arr.map((item) =>
    item % 2 === 0
      ? {
          digit: item,
          odd: false,
        }
      : {
          digit: item,
          odd: true,
        }
  );

  return newArr;
}

console.log(checkOdd(arrNum));

//2.Проверить, содержит ли массив элементы, равные нулю. Если да - вернуть true.
let arr = [12, 4, 50, 1, 0, 18, 40];
let findZero = arr.some((item) => item === 0);
console.log(findZero);

//3.Проверить, все элементы массива имеют длину более 3х символов ['yes', 'hello', 'no', 'easycode', 'what']. Если да - вернуть true
let arr = ['yes', 'hello', 'no', 'easycode', 'what'];
let checkLength = arr.every((item) => item.length > 3);
console.log(checkLength);

/**
 * Дан массив объектов, где каждый объект содержит информацию о букве и месте её положения в строке {буква: “a”, позиция_в_предложении: 1}:

[{char:"a",index:12}, {char:"w",index:8}, {char:"Y",index:10}, {char:"p",index:3}, {char:"p",index:2},

{char:"N",index:6}, {char:" ",index:5}, {char:"y",index:4}, {char:"r",index:13}, {char:"H",index:0},

{char:"e",index:11}, {char:"a",index:1}, {char:" ",index:9}, {char:"!",index:14}, {char:"e",index:7}]

Напишите функцию, которая из элементов массива соберет и вернёт
строку, основываясь на index каждой буквы. Например:
[{char:"H",index:0}, {char:"i",index: 1}, {char:"!",index:2}] → “Hi!”
 */
