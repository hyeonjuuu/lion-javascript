/* ---------------------------------------------------------------------- */
/* Operators                                                              */
/* ---------------------------------------------------------------------- */

// 연산자(演算子): 연산을 표시하기 위한 기호
// 피연산자(被演算子): 처리 대상

let a = '10';
let b = '30';

// 단항 연산자
let unary = +a;

// 이항 연산자
let binary = a+b

// 삼항 연산자
let ternary = a === 10 ? true : false;
// ^ a가 10과 같다면 true를 반환하고, 같지 않다면 false를 반환한다. 반환된 값은 ternary에 반환된다.
// ^ 피 연산자가 3개일 때 사용

elt ternary = Math.randome() > 0.5 ? 'big' : 'small';
// ^ randome으로 나온 값이 0.5보다 크다면 'big'을 반환하고, 같지 않다면 'small'을 반환하여 ternary에 반환된다.

// 산술 연산자: 덧셈
let addition = 1 + 2;

// 산술 연산자: 뺄셈
let subtraction = 10 - 2;

// 산술 연산자: 곱셈
let multiplication = 30 * 2;

// 산술 연산자: 나눗셈
let division = 14 / 2;

// 산술 연산자: 나머지
let remainder = 10 % 3;

console.log(remainder);
// ^ 홀수 짝수 분류할 때 주로 사용

if (a % 2 === 0) {
  console.log('짝수');
}
// 산술 연산자: 거듭 제곱
let power = 2 ** 53 -1;
let power = Math.pow(2,53) -1
// ^ 2의 53승 -1

// JavaScript 연산자는 피연산자를 적절한 타입(유형)으로 강제 변환합니다.
let coercionTypeConversion = '9' * '3';

// 대부분의 연산자는 기본 값으로만 작동합니다.
let onlyWorkDefaultValues = [1, 2, 3] + [4, 5, 6];
// ^ 배열 + 배열 = 문자(String)

// #배열끼리 더하기
let firstArray = [1,2,3];
let secondArray = [4,5,6];

// ^ old한 방식
const newArray = firstArray.concat(secondArray);

console.log(newArray) //# =[1, 2, 3, 4, 5, 6]

// ^ new 방식 = spread syntax
console.log( ...firstArray, ...secondArray ); //# 숫자 1 2 3 4 5 6
console.log( [...firstArray, ...secondArray] ); //# 배열 [1, 2, 3, 4, 5, 6]

// 연산자 우선 순위
// 단항(+,-) > 거듭제곱(**) > 곱셈(*) > 나눗셈(/) > 덧셈(+) > 뺄셈(-) > 할당(=)

// 선,후 증감 연산자
// ++, --

let counter = 0;
counter++ // 0
counter // 1

// 아래 코드를 읽기 쉽도록 변경합니다.
// 그리고 연산자 우선 순위에 따라 연산 과정을 유추해보세요.

let count = 10;
let total = (count % 4) * (count /= 2) + count ** 3; // ?

// 읽기 쉬운 코드로 변환
let total = count % 4;
count = count / 2;
let pow = count * 3;

total = total * count + pow;

console.log(total);