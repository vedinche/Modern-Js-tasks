// Создать объект, который описывает ширину и высоту
// прямоугольника, а так же может посчитать площадь фигуры
function getSquare(b, a) {
  b = this.width;
  a = this.height;
  return b * a;
}

let rectangle = {
  width: 10,
  height: 20,
  getSquare,
};

console.log(rectangle.getSquare());

// Создать объект у которого будет цена товара и его скидка,
// а также два метода: для получения цены и для расчёта цены
// с учётом скидки
function getPrice() {
  return this.price;
}

function getPriceWithDiscount() {
  let isNumDiscount = parseInt(this.discount);
  let amountDiscount = (this.price / 100) * isNumDiscount;
  return this.price - amountDiscount;
}

let price = {
  price: 10,
  discount: '15%',
  getPrice,
  getPriceWithDiscount,
};

console.log(price.getPrice());
console.log(price.getPriceWithDiscount());

// Создать объект, у которого будет поле высота и метод “увеличить
// высоту на один”. Метод должен возвращать новую высоту
function getNewHeight() {
  let newHeight = this.height + 1;
  return (this.height = newHeight);
}

let figure = {
  height: 10,
  getNewHeight,
};

console.log(figure.getNewHeight());
console.log(figure);

// Создать объект “вычислитель”, у которого есть числовое свойство
// “значение” и методы “удвоить”, “прибавить один”, “отнять один”.
// Методы можно вызывать через точку, образуя цепочку методов
let numerator = {
  value: 1,
  double: function () {
    this.value += this.value;
    return this;
  },
  plusOne: function () {
    this.value = this.value + 1;
    return this;
  },
  minusOne: function () {
    this.value = this.value - 1;
    return this;
  },
};

console.log(numerator.double().plusOne().plusOne().minusOne());

// Создать объект с розничной ценой и количеством продуктов.
// Этот объект должен содержать метод для получения общей стоимости
// всех товаров (цена * количество продуктов)
function getAmount() {
  let amount = parseFloat(this.price) * this.quantity;
  return amount;
}

let priceList = {
  price: '5$',
  quantity: 10,
  getAmount,
};

console.log(priceList.getAmount());

// Создать объект из предыдущей задачи. Создать второй объект, который описывает
// количество деталей и цену за одну деталь. Для второго объекта нужно узнать
// общую стоимость всех деталей, но нельзя создавать новые функции и методы.
// Для этого “позаимствуйте” метод из предыдущего объекта.
let specification = {
  price: '12,5$',
  quantity: 100,
  getAmount,
};

console.log(specification.getAmount());

// Даны объект и функция:
// let sizes = {width: 5, height: 10},
// getSquare = function () {return this.width * this.height};
// Не изменяя функцию или объект, получить результат функции getSquare для объекта sizes
let sizes = {
    width: 5,
    height: 10,
  },
  getSquare = function () {
    return this.width * this.height;
  };

let result = getSquare.call(sizes);

console.log(result);

// let element = {
// 	height: 25,
// 	getHeight: function () {return this.height;}
// 	};
// 	let getElementHeight = element.getHeight;
// 	getElementHeight(); // undefined
// 	Измените функцию getElementHeight таким образом, чтобы можно было вызвать getElementHeight() и получить 25.
let element = {
  height: 25,
  getHeight: function () {
    return this.height;
  },
};
let getElementHeight = element.getHeight.bind(element);
console.log(getElementHeight());
