/* --------------------- */
/* Type Conversion       */
/* --------------------- */

/* 데이터 → 문자 ----------------------------------------------------------- */

// number
const YEAR = 2023;

console.log(String(YEAR)); //명시적 형 변환
console.log(YEAR + ''); //암시적 형 변환
// undefined, null
let days = null;
console.log(String(null)); // 명시적 형 변환
console.log(null + ''); //암시적 형 변환

let undef = undefined;
console.log(typeof String(undefined));
console.log(undefined + '');

// boolean

let isClicked = true;
console.log(String(isClicked));

/* 데이터 → 숫자 ----------------------------------------------------------- */

// undefined
let friend;
console.log(Number(friend));
// null
let bankbook = null;
console.log(Number(bankbook));
// boolean
let cutie = false;
console.log(Number(cutie));
// ^ true = 1, false = 0
// string
let num = '250';
console.log(num);
console.log(Number(num));
console.log(+num);
console.log(num * 1);
console.log(num / 1);
// numeric string
let width = '105.3px';
console.log(Number(width));

let w = window.parseFloat(width); // 소수점까지만 = 105.3
// let w = window.parseInt(width); // 정수까지만 = 105

console.log(w);

/* 데이터 → 불리언 ---------------------------------------------------------- */

// null, undefined, 0, NaN, ''
// 위에 나열한 것 이외의 것들
// ^명시적 형변환
console.log(Boolean(friend));
console.log(Boolean(bankbook));
console.log(Boolean(0));
console.log(Boolean(NaN));
console.log(Boolean(''));
console.log(Boolean(1));
console.log(Boolean(0));

// ^암시적 형변환
console.log('암시적 형 변환 : ' + !false);
// # != 부정연산 -> true
// # !!= 부정연산 -> false
