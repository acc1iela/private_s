// 非同期処理
let a = 0;
console.log(a);

new Promise((resolve, reject) => {
  setTimeout(() => {
    a = 1;
    resolve();
  }, 2000);
})
  .then((b) => {
    console.log(b);
    return b;
  })
  .catch((c) => {
    console.log('catchが実行', c);
  });
