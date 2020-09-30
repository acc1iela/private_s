// const button = document.getElementById('addBtn');
// const lists = document.getElementById('lists');

// button.addEventListener('click', async function () {
//   // データのやり取り
//   const res = await fetch('https://jsonplaceholder.typicode.com/users');
//   const users = await res.json();
//   console.log(users);

//   //DOM操作
//   users.forEach(function (user) {
//     const list = document.createElement('li');
//     list.innerText = user.name;
//     lists.appendChild(list);
//   });

//   // 条件分岐
//   // users.forEach(function (user) {
//   //   if (user.id <= 5) {
//   //     const list = document.createElement('li');
//   //     list.innerText = user.name;
//   //     lists.appendChild(list);
//   //   }
//   // });

//   // for文
//   // for (let index = 0; index < users.length; index++) {
//   //   const user = users[index];
//   //   const list = document.createElement('li');
//   //   list.innerText = user.name;
//   //   lists.appendChild(list);
//   // }
// });

// // windowが読み込まれた瞬間に表示
// window.addEventListener('load', async function () {
//   // データのやり取り
//   const res = await fetch('https://jsonplaceholder.typicode.com/users');
//   const users = await res.json();
//   console.log(users);

//   //DOM操作
//   users.forEach(function (user) {
//     const list = document.createElement('li');
//     list.innerText = user.name;
//     lists.appendChild(list);
//   });
// });

// リファクタ
// const button = document.getElementById('addBtn');
// const lists = document.getElementById('lists');

// async function listUsers() {
//   const res = await fetch('https://jsonplaceholder.typicode.com/users');
//   const users = await res.json();

//   users.forEach(function (user) {
//     const list = document.createElement('li');
//     list.innerText = user.name;
//     lists.appendChild(list);
//   });
// }

// button.addEventListener('click', listUsers);
// window.addEventListener('load', listUsers);


// 再リファクタ
// DOM
const button = document.getElementById('addBtn');
const lists = document.getElementById('lists');

// 関数(メソッド)
function addList(user) {
  const list = document.createElement('li');
  list.innerText = user.name;
  lists.appendChild(list);
}

async function getUsers() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await res.json();
  return users;
}

async function listUsers() {
  const users = await getUsers();

  users.forEach(addList);
}

// イベント
window.addEventListener('load', listUsers);
button.addEventListener('click', listUsers);
