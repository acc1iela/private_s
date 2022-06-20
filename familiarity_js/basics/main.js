let count = 0;
count = 30;
let newCount = 0;
const daysInWeek = 7;

let additionResult = 2 + 5;
let result = 5;
result += 10;
console.log(result);

let array = ['apple', 'banana', 'grape'];
array = [1, 2, 3];

array = [1, 'apple', true, ['banana']];

const coffee = {
  name: 'Chocolate Mocha',
  size: 350,
  toppings: ['Cinnamon', 'Caramel'],
  nutritions: {
    calories: 430,
    sugars: 53,
  },
};

console.log(coffee.size);

coffee.isHot = false;
coffee.barista = 'Yoshipi';

function add() {
  return num1 + num2;
}

function add2(num1, num2) {
  const value = num1 + num2;
  console.log(value);
  return value;
}

const returnedValue = add(2, 3);
