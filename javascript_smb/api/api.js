/*
Web API叩く
*/

// 非同期関数
// async / awaitが主流の書き方
async function callApi() {
  // API処理
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await res.json();
  console.log(users);
}

callApi();


// 別の書き方
function callApi2() {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(function (res) {
      return res.json();
    })
    .then(function (users) {
      console.log(users);
    });
}

callApi2();


// 別の書き方2
function callApi3() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
  xhr.responseType = 'json';
  xhr.send();
  xhr.onload = function () {
    console.log(xhr.response);
  };
}

callApi3();
