//Создать ф-ции: 1-я принимает массив и callback(одна для всех вызовов)
// 2-я ф-ция(колбэк) обрабатывает каждый элемент массива(для каждого вызова свой callback)
// 1-я ф-ция возвращает строку 'New value:' и результат обработки
//подсказка: secondfunc должна быть ф-цией, которая принимает аргумент(каждый элем. массива)
//и возвращает результат его обработки.about

function firstFunc(arr, fn) {
  let result = [];

  for (let key of arr) {
    result += fn(key);
  }

  return `New value: ${result}`;
}

function handler1(el) {
  return el.slice(0, 1).toUpperCase() + el.slice(1);
}

function handler2(el) {
  return `${el * 10},`;
}

function handler3(el) {
  return `${el.name} is ${el.age}, `;
}

function handler4(el) {
  return el.split('').reverse().join('');
}

firstFunc(['my', 'name', 'is', 'Trinity'], handler1);
firstFunc([10, 20, 30], handler2);
firstFunc(
  [
    {
      age: 45,
      name: 'John',
    },
    {
      age: 20,
      name: 'Aaron',
    },
  ],
  handler3
);
firstFunc(['abc', '123'], handler4);

//Написать анвлог метода every. Создайте ф-цию every
// она должна принимать первым аргументом массив чисел(проверить на массив)
// вторым аргументом callback(проверить, что передана ф-ция). Если один из аргументов
// не удовлетворяет условию ф-ция должна вернуть new Error(с поизвольным сообщением).

// Ф-ция должна возвращать true или false в зависимости от результата вызова callback
// (проверить число больше 5). Callback должен принимать один элемент массива,
// его индекс в массиве и весь массив.

function every(arr, fn) {
  if (!Array.isArray(arr))
    return new Error('The first argument expected as array');
  if (!fn || typeof fn !== 'function')
    return new Error('The second argument expected as function');

  for (let i = 0; i < arr.length; i++) {
    if (!fn(arr[i], i, arr)) {
      return false;
    }
  }

  return true;
}

console.log(
  every([1, 2], function (el) {
    return typeof el === 'number';
  })
);
