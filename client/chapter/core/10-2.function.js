/* ----------------------- */
/* Functions → Expression  */
/* ----------------------- */

function calcTotal(moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
}

const resultX = calcTotal(10000, 8900, 1360, 2100);
const resultY = calcTotal(21500, 3200, 9800, 4700);
const resultZ = calcTotal(9000, -2500, 5000, 11900);

// console.log(resultX);
// console.log(resultY);
// console.log(resultZ);

// 함수 선언 → 일반 함수 (표현)식
/* -------------------------------------------------------------------------- */
/*                           // ^ 해당 변수에 함수를 연결하여 선언                          */
/* let calculateTotal = function (priceA, priceB, priceC, priceD) {
  return priceA + priceB + priceC + priceD;
};

const total = calculateTotal(1000, 500, 200, 6500);

console.log(result);
 */
/* -------------------------------------------------------------------------- */

let calculateTotal = function () {
  // console.log(arguments);

  //!함수 안에서만 접근 가능한 인수들의 집합 객체로서 배열과 유사한 형태를 가지고 있는 이것은 ? : arguments

  //arguments 객체를 사용해 함수의 매개변수 없이 아이템의 총합을 구해보자!

  let total = 0;
  // ^ 1. for문
  // for (let i = 0; i < arguments.length; i++) {
  //   console.log += arguments[i];
  // }

  // ^ 2. for of문
  // for (let key of arguments) {
  //   total += key;
  // }

  // return total;

  // ^ 3. forEach 빌려쓰기
  // 배열의 능력에 접근하기
  // Array.prototype.forEach.call(arguments, function (item) {
  //   total += item;
  // });

  // ^ 4. 배열로 만들기
  // let realArray.prototype.slice.call(arguments);

  // console.log(realArray);

  // realArray.forEach(function(item)){
  //   total += item;
  // }

  //^ 5. Array.from()

  // let realArray = Array.from(arguments);
  // console.log(realArray);

  //^ 6. spread Syntax -> 가장 많이 사용됨. 중요!
  // let realArray = [...arguments];

  // console.log(realArray);

  // ^ 7. Array.reduce
  // return realArray.reduce((acc, item) => {
  //   return acc + item;
  // }, 0);
};

const result = calculateTotal(1000, 500, 200, 6500, 100);
console.log(result);

// 익명(이름이 없는) 함수 (표현)식
let anonymousFunctionExpression = function () {};

// 유명(이름을 가진) 함수 (표현)식
let namedFunctionExpression = function hello() {};

// 콜백 함수 (표현)식
// *정의
let callbackFunctionExpression = function (callback) {};

// *호출
callbackFunctionExpression(function () {
  console.log('콜백 함수 실행');
});

// 함수 선언문 vs. 함수 (표현)식

// 즉시 실행 함수 (표현)식
// Immediately Invoked Function Expression
let IIFE;

const MASTER = (function () {
  var x = 10;

  console.log('즉시 함수 !');
  return '퉤';
})();

console.log(MASTER);
