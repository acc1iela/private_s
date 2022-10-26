const h1Element = document.querySelector('h1');

console.log(h1Element);
h1Element.textContent = '書き換えちゃったぜ！';

const btnEl = document.querySelector('button');
const helloFn = (e) => {
  console.dir(e.target.textContent);
  console.log('hello');
};

btnEl.addEventListener('click', helloFn);
