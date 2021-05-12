//На основе массива [1,2,3,5,8,9,10] сформировать новый массив,
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
