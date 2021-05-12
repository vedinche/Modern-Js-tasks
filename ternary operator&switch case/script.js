//Записать в виде switch case следующее условие:

// if (a === ‘block’) {

//    console.log(‘block’)

// } else if (a === ‘none’) {

//    console.log(‘none’)

// } else if (a === ‘inline’) {

//    console.log(‘inline’)

// } else {

//    console.log(‘other’)

// }

let a;

switch (a) {
  case 'block':
    console.log('block');
    break;
  case 'none':
    console.log('none');
    break;
  case 'inline':
    console.log('inline');
    break;
  default:
    console.log('other');
    break;
}

// Записать данное условие в виде тернарного оператора

// let b = 'hidden';

// if (b === 'hidden') {

//   b = 'visible';

// } else {

//   b = 'hidden';

// }

let b = 'hidden';

b = b === 'hidden' ? 'visible' : 'hidden';
