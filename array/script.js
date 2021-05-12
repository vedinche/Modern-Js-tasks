//1. Создать ф-цию, которая принимает число n и возвращает массив
// заполненный числами от 1 до n
function getArray(n) {
	let arr = [];

	for (let i = 1; i <= n; i++) {
		arr.push(i);
	}

	return arr
}

console.log(getArray(10));

//2. Создать ф-цию, которая принимает массив, а возвращает новый массив 
// с дублированными элементами входного массива

function doubleArray(arr) {
	let newArr = arr.concat(arr)

	return newArr;
}

console.log(doubleArray([1, 2, 3, 4, 5]));

// 3. Создать ф-цию, которая принимает любое число массивов
// удаляет из каждого массива первый элемент, а возвращает массив из оставшихся значений
//а:
function changeCollection() {
	let newArr = [];

	for (let i = 0; i < arguments.length; i++) {
		if (!Array.isArray(arguments[i])) {
			return;
		} else {
			arguments[i].splice(0, 1);
			newArr = newArr.concat(arguments[i]);
		}
	}

	return newArr;
}

console.log(changeCollection([1, 2, 3], ['a', 'b', 'c']));
//b:
function changeCollection() {
	let newArr = [];

	for (let i = 0; i < arguments.length; i++) {
		if (!Array.isArray(arguments[i])) {
			return;
		} else {
			arguments[i].splice(0, 1);
			newArr.push(arguments[i]);
		}
	}

	return newArr;
}

console.log(changeCollection([1, 2, 3], ['a', 'b', 'c'], [5, 6, 7]));

// 4. Создать ф-цию которая принимает массив пользователей, поле которое хочу проверить и значение 
// на которое хочу проверять указанное поле. Проверять что все аргументы переданы. Если что-то не передано,
// то возвращать объект ошибки return new Error('Error message'). Возвращать новый массив с пользователями,
// соответствующим указанным параметрам.

const users = [{
		"_id": "5e36b779dc76fe3db02adc32",
		"balance": "$1,955.65",
		"picture": "http://placehold.it/32x32",
		"age": 33,
		"name": "Berg Zimmerman",
		"gender": "male"
	},
	{
		"_id": "5e36b779d117774176f90e0b",
		"balance": "$3,776.14",
		"picture": "http://placehold.it/32x32",
		"age": 37,
		"name": "Deann Winters",
		"gender": "female"
	},
	{
		"_id": "5e36b779daf6e455ec54cf45",
		"balance": "$3,424.84",
		"picture": "http://placehold.it/32x32",
		"age": 36,
		"name": "Kari Waters",
		"gender": "female"
	}
]

function filterUsers(arr, key, value) {
	let result = [];

	if (arguments.length < 3) {
		return new Error('Error message');
	}

	for (let i = 0; i < arr.length; i++) {
		if (arr[i][key] === value) {
			result.push(arr[i]);
		}
	}
	return result
}

console.log(filterUsers(users, 'age', 36));