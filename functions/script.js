// Создать ф-цию multiply, которая будет принимать любое
// количество чисел и возвращать их произведение, если аргументов нет, вернуть 0

function multiply() {
  let result = 1;

  if (arguments.length === 0) return 0;

  for (let i = 0; i < arguments.length; i++) {
    result *= arguments[i];
  }
  return result;
}

console.log(multiply());

//Создать ф-цию, которая принимает строку и возвращает строку перевёртыш

function reverseString(str) {
  let isStr = String(str);
  let strArr = isStr.split('');
  let arrReverse = strArr.reverse();
  let result = arrReverse.join('');

  return result;
}

console.log(reverseString());

//Создать ф-цию, которая в качестве аргумента может принять строку, числа, null
//или undefined и возвращает строку, где каждый символ разделён пробелом и заменён на
//юникод-значения символа

function getCodeStringFromText(str) {
  let isStr = String(str);
  let strArr = isStr.split('');
  let codeString = [];
  let result;

  if (str === '') {
    result = '';
  }

  for (let key of strArr) {
    codeString.push(key.charCodeAt());
    result = codeString.join(' ');
  }
  return result;
}

console.log(getCodeStringFromText(undefined));

//Создать ф-цию угадай число. Она пинимает число 0-10(сделать проверку на ><)
// Если число не соответствует условию вернуть ошибку return new Error('Please provide number in range 0-10')
// Если не число ошибка new Error('Please provide a valid number');
// Далее ф-ция генерирует рандомное число от 1-10 и сравнивает с заданным числом,
// если они совпали, возвращает строку 'You win!', если нет: 'You are lose, your number is 8, the randon number is 5'
// Если переданно число в виде строки преобразовать к числу

function guessTheNumber(num) {
  let randomNum = Math.floor(Math.random(num) * 10);

  if (num < 0 || num > 10) {
    return new Error('Please provide number is range 0-10');
  } else if (isNaN(num)) {
    return new Error(`Please provide a valid number`);
  }

  if (num === randomNum) {
    console.log(`You win!`);
  } else {
    console.log(`You are lose, your number is ${num}
			the random number is ${randomNum}`);
  }

  console.log(num);
}

guessTheNumber(1);
