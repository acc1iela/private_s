function logger() {
  console.log('My name is Jonas');
}

logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}
const appleJuice = fruitProcessor(4, 5);
console.log(appleJuice);

function calcAge1(birthYear = 1997) {
  const age = 2055 - birthYear;
  return age;
}

console.log(calcAge1());

const calcAge2 = (birthYear = 1997) => {
  return 2037 - birthYear;
};
console.log(calcAge2());

const jonasArray = ['Jonas', 'accio', 2037 - 1991, 'teacher', ['Michael', 'Peter', 'Steven']];

for (let i = 0; i < jonasArray.length; i++) {
  console.log(jonasArray[i]);
}

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];
