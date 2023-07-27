import { getNode } from '../dom/getNode.js';
import { insertLast } from '../dom/insert.js';
import { xhrPromise } from './xhr.js';

function delay(callback, timeout = 1000) {
  setTimeout(callback, timeout);
}

// const first = getNode('.first');
// const second = getNode('.second');

// delay(() => {
//   console.log(1);
//   first.style.top = '-100px';
//   delay(() => {
//     console.log(2);
//     first.style.transform = 'rotate(360deg)';
//     delay(() => {
//       console.log(3);
//       first.style.top = '0';
//       second.style.top = '0';
//     });
//     second.style.top = '100px';
//     console.log('b');
//   });
// });

// 2. 기본값역할
const defaultOptions = {
  shouldReject: false,
  timeout: 1000,
  data: '성공',
  errorMessage: '알 수 없는 오류가 발생했습니다.',
};

export function delayP(options) {
  // 전개 연산을 통해서 얕은 복사를 하여 값을 config에 담아 쓴다.
  let config = { ...defaultOptions };
  // *옵션의 값이 숫자일 때
  // 만약에 옵션의 값의 타입이 넘버라면 config의 타임아웃 값을 options에서 받은 값으로 덮어씌워주세요.(재할당)
  if (typeof options === 'number') {
    config.timeout = options;
  }

  // 사용하기 위해 구조분해할당하기.
  const { shouldReject, data, errorMessage, timeout } = config;

  // *옵션의 값이 객체일 때
  // 객체가 맞다면 기존의 컨피그 값과 옵션의 값을 덮어씌워주세요
  // 만약에 typeof의 값이 object 객체 형태로 들어왔다면, config에 값을 재할당하는데, default
  // 뒤의 값이 앞의 값을 덮어씌운다.
  if (typeof options === 'object') {
    config = { ...defaultOptions, ...options };
  }

  // console.log(config);

  // !프라미스를 리턴하면 프라미스 객체가 나온다!
  return new Promise((resolve, reject) => {
    //1초 뒤에 실행
    setTimeout(() => {
      // 조건 비교
      if (!shouldReject) {
        resolve(data);
      } else {
        reject({ message: errorMessage });
      }
    }, timeout);
  });
}

// 1. 아무것도 전달하지 않았을 때 기본값 필요
// 파라미터의 값이 객체 또는 숫자일 경우
delayP({ shouldReject: true })
  // if 항목중 하나의 결과가 떨어져야지만 then이 실행됨.
  .then((res) => {
    // console.log(res);
  })
  .catch(({ message }) => {
    console.log(message);
  })
  .finally(() => {
    // console.log('어쨋든 실행됨.');
  });

// ##########################################################################
/* async,await--------------------------------------------------------------------- */

// async : 함수가 promise 객체를 반환하도록, await 사용
// await : 코드의 실행 흐름 제어 (멈춰)
// -result 값 가져오기
async function delayA() {
  return '성공!';
}

// 뒤에 리턴값이 promise 객체라면 await 사용이 가능하다.
// console.log(await delayA());

const data = await delayA();
// console.log(data);

async function getUserData() {
  const data = xhrPromise.get('https://jsonplaceholder.typicode.com/users');
  // console.log(data);

  // ^then 결과 가져오기
  // data.then((res) => {
  //   console.log(res);
  // });

  // ^await 결과 가져오기
  const result = await data;
  console.log(result);
}

// getUserData();

/* 포켓몬--------------------------------------------------------------- */
// !포켓몬 실습
async function getData() {
  const data = xhrPromise.get('https://pokeapi.co/api/v2/pokemon/75');

  // data.then((res)=>{
  //   console.log( res );
  // })

  const pokemon = await data;

  console.log(pokemon.sprites['front_default']);

  insertLast(
    document.body,
    `<img src="${pokemon.sprites['front_default']}" alt="" />`
  );
}

// getData();
