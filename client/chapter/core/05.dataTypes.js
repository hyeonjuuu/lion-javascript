/* ------------------------ */
/* Data Types               */
/* ------------------------ */

/* ECMAScript의 8가지 데이터 타입 -------------------------------------------- */

// 1. 존재하지 않는(nothing) 값 / 비어있는(empty) 값 / 알 수 없는(unknown) 값

const empty = null;
console.log(typeof empty);

// 2. 값이 할당되지 않은 상태
// ^값을 비우고자 할때 = null

let unknown;
console.log(typeof unknown);

// 3. 따옴표를 사용해 묶은 텍스트(큰", 작은', 역`)

const hi = new String('hello'); //문자 생성자

const double = 'hello'; //문자 리터럴
const single = 'hello';
const backtick = `hello ${1 + 3}`;

console.log(typeof double);

// 4. 정수, 부동 소수점 숫자(길이 제약)

const number = new Number(123);
const integer = 123;
const floatingPointNumber = 10.45;

console.log(typeof number);

// 5. 길이에 제약이 없는 정수(예: 암호 관련 작업에서 사용)

const bigInteger = 123n;

// 6. 참(true, yes) 또는 거짓(false, no)

const bool = true;
console.log(typeof bool);

// 7. 데이터 컬렉션(collection) 또는 복잡한 엔티티(entity)

const obj = new Object({});
// const obj = {};

console.log(obj);

// 8. 고유한 식별자(unique identifier)

const unique = Symbol('uid');

console.log(unique);

/* typeof 연산자의 2가지 사용법 ---------------------------------------------- */

// 1) 연산자 typeof

console.log(typeof 1 + 2);

// 2) 함수 typeof()

console.log(typeof (1 + 2));

// 언어 상, 오류

// Object

const user = {
  name: 'tiger',
  age: 28,
  sayHi: function () {
    console.log('hello~');
  },

  alert1: function () {
    //normal fuction
  },
  akert2() {
    //consise method (축약)
  },
  alert3: () => {
    //arrow function
  },
};

// Array

const arr = [10, 100, 1000, 1, 2, 3];

console.log(arr[3]);
// ^원하는 배열을 선택할 때 [] 안에 해당 순서 번호 넣기 (배열은 1번이 0)

// function

function 붕아빵틀(재료) {
  // ^console.log('붕어빵빵');
  return 재료 = '맛 붕어빵';
}
const 팥붕어빵 = 붕어빵틀('팥');
const 슈크림붕어빵 = 붕어빵틀('슈크림');
const 와사비붕어빵 = 붕어빵틀('와사비');

// ^붕어빵틀()
console.log(와사비붕어빵);

// this
