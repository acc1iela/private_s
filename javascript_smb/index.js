'uses-strict';
let worker = {
  list: {
    business: {
      creator: [
        { name: 'acc1io', age: 23, frontendEngineer() { } },
        { name: 'another_acc1io', age: 45, softwareEngineer() { } }
      ],
      teach() { }
    },
    company: {
      type: [{ name: 'Google' }, { name: 'Microsoft' }],
      makeWorld() { }
    }
  },
  plan() { },
  uploaded() { }
};
worker.list.business.creator.name();

// f-2
const foo = document.getElementById('foo');
const fooWidth = foo.offsetWidth;
const fooHeight = foo.offsetHeight;
const fooArea = fooWidth * fooHeight;

/*
constの特徴
再代入できない、再定義できない
*/
const obj = {
  foo: 123
};

console.log(obj.foo);
obj.foo = 456;
console.log(obj.foo);

/*
letの特徴
再代入できる、再定義できない
 */
let letNumber = 100;
letNumber = 200;

console.log('LGTM!');

window.alert();

window.console.log();

window.document.getElementById('');

const fool = {
  // alert: function() {},
  alert() { }, // 短縮記法
};

fool.alert();

function twitterAPI(post) {
  const endAPI = post.slice();
  return endAPI;
}

const endTwitter = post(foodPost);
const startTwitter = post(textPost);


function isTweetable(text) {
  return text.length <= 140;
}

console.log(isTweetable('なんか今日は非常に眠いです'));

function alertTweetable(text) {
  if (text.length <= 140) {
    alert('you can tweet!');
  }
}

alertTweetable('Looks Good to Me!!');
