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



// 関数式
// 匿名関数 / 無名関数
const isTweetabl2 = function (text) {
  return text.length <= 140;
};
console.log(isTweetable2('foo-!'));


// 高階関数を使った処理
function washed(fn) {

}



// 実践やで
function unFollow() {
  console.log('フォローを外しました');
}

function cancelTweet() {
  console.log('ツイートをキャンセルしました');
}

const cancelTweet2 = function () {
  console.log('ツイートをキャンセルしました');
}

function confirmed(fn) {
  if (window.confirm('実行しますか？')) {
    fn();
  }
}

confirmed(unFollow);



function confirmed2(fn) {
  const input = window.prompt('実行しますか？');
  if (input === '実行') {
    fn();
  }
}

confirmed2(function () {
  console.log('リポジトリを削除');
});

function confirmed(fn) {
  const input2 = window.prompt('実行しますか？');
  fn(input);
}

confirmed(function (input) {
  if (input === '実行') {
    console.log('リポジトリを削除');
  }
});



const btn = document.getElementById('button');
btn.addEventListener('click', function () {
  console.log('フォロー解除');
});

const foods = ['にんじん', 'じゃがいも', '玉ねぎ'];

foods.forEach(function (food) {
  console.log(food);
});
