/* 
import { xhr } from './xhr';

[readystate]

0: uninitalized
1: loading
2: loaded
3: interactive
4: complete

*/

import { refError } from '../error/refError.js';

/* export function xhr({
  method = 'GET',
  url = '',
  onSuccess = null,
  onFail = null,
  body = null,
  headers = {
    'Content-Type': 'application.json',
    'Access-Control-Allow-Origin': '*',
  },
} = {}) {
  const xhr = new XMLHttpRequest();
  xhr.open(method, url);

  Object.entries(headers).forEach(([key, value]) => {
    xhr.setRequestHeader(key, value);
  });

  xhr.addEventListener('readystatechange', () => {
    const { status, readyState, response } = xhr;
    if (readyState === 4) {
      if (status >= 200 && status < 400) {
        onSuccess(JSON.parse(response));
      } else {
        onFail('실패');
      }
    }
  });

  xhr.send(JSON.stringify(body));
} */

// xhr({
//   url:'https://jsonplaceholder.typicode.com/users',
//   onSuccess:()=>{},
//   onFail:()=>{},
//   body:{
//     name:'tiger'
//   }
// });

// 1. 자바스크립트의 함수는 본래는 객체다.
// 2. 사용자(협업 개발자)입장 : 쉽게쓰자 // 매번 메서드를 정의하는게 아니라 xhr.get, xhr.post로 사용하자
// 3. 설계자가 함수 안에 메서드를 넣어버리자.

/**
 *
 * @param {string} url  서버와 통신할 주소
 * @param {function} onSuccess  서버와 통신 성공시 실행될 콜백 함수
 * @param {function} onFail 서버와의 통신 실패시 실행될 콜백 함수
 * @return server data
 */

/* xhr.get = (url, onSuccess, onFail) => {
  xhr({
    url,
    onSuccess,
    onFail,
  });
};

xhr.post = (url, body, onSuccess, onFail) => {
  xhr({
    method: 'POST',
    url,
    body,
    onSuccess,
    onFail,
  });
};

xhr.put = (url, body, onSuccess, onFail) => {
  xhr({
    method: 'PUT',
    url,
    body,
    onSuccess,
    onFail,
  });
};

xhr.delete = (url, onSuccess, onFail) => {
  xhr({
    method: 'DELETE',
    url,
    onSuccess,
    onFail,
  });
}; */

/* PROMISE API ------------------------------------------------------------ */

// 재사용이 가능한 객체
const defaultOptions = {
  method: 'GET',
  url: '',
  body: null,
  errorMessage: '서버와의 통신이 원활하지 않습니다.',

  // headers: 서버와의 통신을 할 때 서버에 어떤 데이터를 보내고 있다는 설명서, 가이드와 같은 역할.
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
};

// option 객체가 들어감
export function xhrPromise(options) {
  //*mixin
  const { method, url, body, errorMessage, headers } = Object.assign(
    {},
    defaultOptions,
    options
  );

  if (!url) refError('서버와 통신할 url은 필수 값 입니다.');

  const xhr = new XMLHttpRequest();

  xhr.open(method, url);

  Object.entries(headers).forEach(([key, value]) => {
    xhr.setRequestHeader(key, value);
  });

  xhr.send(JSON.stringify(body));

  return new Promise((resolve, reject) => {
    xhr.addEventListener('readystatechange', () => {
      if (xhr.readyState === 4) {
        if (xhr.status >= 200 && xhr.status < 400) {
          resolve(JSON.parse(xhr.response));
        } else {
          reject({ message: '서버와의 통신이 원활하지 않습니다.' });
        }
      }
    });
  });
}

// xhrPromise({
//   url: 'https://jsonplaceholder.typicode.com/users',
// }).then((res) => {
//   // console.log(res); // 객체가 나옴
//   res.forEach((item) => {
//     console.log(item);
//   });
// });

xhrPromise.get = (url) => {
  return xhrPromise({ url });
};

// #POST
xhrPromise.post = (url, body) => {
  return xhrPromise({
    url,
    body,
    method: 'POST',
  });
};

// #DELETE
xhrPromise.delete = (url) => {
  return xhrPromise({
    url,
    method: 'DELETE',
  });
};

// #PUT
xhrPromise.put = (url, body) => {
  return xhrPromise({
    url,
    body,
    method: 'PUT',
  });
};
// xhrPromise.get('https://jsonplaceholder.typicode.com/users').then((res) => {
//   console.log(res);
// }); //*Promise 객체 출력
