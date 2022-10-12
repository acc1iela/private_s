const coffee1 = { name: 'Cafe late' };
const coffee2 = { name: 'Cafe Latte' };
ok = coffee1 === coffee2;
console.log(ok);

function vegetableColor(vegetable) {
  if (vegetable === 'tomate') {
    console.log('tomato is red!');
  } else if (vegetable === 'pumpkin') {
    console.log('pumpkin is orange!');
  } else if (vegetable === 'onion') {
    console.log('onion is white!');
  }
}

function vegetableColor(vegetable) {
  switch (vegetable) {
    case 'tamato':
      console.log('tomate is red!');
      break;
    case 'pumplink':
      console.log('pumplin is orange');
      break;
  }
}

let pumpkinCount;
for (let pumpkinCount = 0; pumpkinCount < 10; pumpkinCount += 1) {
  console.log(pumpkinCount);
}

const fruits = ['apple', 'banana', 'orange', 'grape', 'mango'];
for (const fruit of fruits) {
  console.log(fruit);
}
