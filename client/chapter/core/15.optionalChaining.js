/* ---------------------------------------------------------------------- */
/* Optional Chaining                                                      */
/* ---------------------------------------------------------------------- */

const portableFan = {
  maker: 'fromB',
  brand: 'FD221',
  type: 'neckband',
  photo: {
    static: 'https://bit.ly/3OS50UD',
    animate: 'https://bit.ly/3P8646q',
  },
  getFullName() {
    return `${this.brand}, ${this.maker}`;
  },
};

// 아래 코드는 문제가 있어 런타임 중 오류가 발생합니다.
console.log(portableFan.photos?.animate);

// 오류를 발생시키지 않으려면 아래와 같이 작성해야 합니다.
// if ('photos' in portableFan) {
//   if ('animate' in portableFan.photos) {
//     console.log(portableFan.photos.animate);
//   }
// }

// 위 구문을 논리곱 연산자를 사용한 방식으로 변경해봅니다.

// 위 구문을 옵셔널 체이닝을 사용한 구문으로 변경해봅니다.

// 메서드 사용 시, 옵셔널 체이닝을 사용해봅니다.

// 객체의 프로퍼티 접근 시, 옵셔널 체이닝을 사용해봅니다.

//com set Time out
// !sync 동기 async 비동기

console.log('첫번째 실행');
// 아래 코드는 비동기로 실행되었다.
setTimeout(() => {
  console.log('3초 뒤에 해당 코드가 실행됩니다.');
}, 3000);

console.log('세번째 실행');

/* ------------------------------------------------------------------------------ */

// const timer = setTimeout(() => {
//   const button = /* html */ `
//     <button type="button">clickMe</button>
//   `;

//   document.body.insertAdjacentHTML('beforeend', button);
// }, 3000);

const timer = setTimeout(() => {
  const button = /* html */ `
    <button type="button">clickMe</button>
  `;

  document.body.insertAdjacentHTML('beforeend', button);
}, 5000);

clearTimeout(timer);

/* ----------------------------------------------------------------------------- */

//com set Interval
// 1초마다 한번씩 반복 실행됨.
setInterval(() => {
  console.log('반복 실행');
}, 1000);

// 1초마다 count가 ++됨
let count = 0;
const interval = setInterval(() => {
  console.log(++count);

  if (count > 50) {
    clearInterval(interval);
  }
}, 1000);

/* --------------------------------------------------------------------------------*/
const button = document.querySelector('button');

console.log(button);

button?.addEventListener('click', function () {
  this.style.backgroundColor = 'orange';
});
