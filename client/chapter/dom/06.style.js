/* -------------------- */
/* DOM Styling          */
/* -------------------- */

/* 클래스를 관리할 수 있게 해주는 DOM 프로퍼티 ------------------------------------ */

const first = getNode('.first');
console.log(first.className); //getter
// console.log((first.className = 'box')); //setter // 띄워쓰기 하면 두 개의 클래스가 들어감.
// console.log(first.className = 'box second'); //문자로 나옴

// - className – 클래스 전체를 문자열 형태로 반환해주는 프로퍼티로 클래스 전체를 관리할 때 유용
// - classList – 클래스 하나를 관리할 수 있게 해주는 메서드로 개별 클래스를 조작할 때 유용

// add
// remove
// toggle
// contains

// #add
first.classList.add('hello'); // 클래스 추가

// #remove
first.classList.remove('hello'); // 클래스 제거 (하나만 가능)
// 빈문자 : error, 띄워쓰기 : error
/* 클래스 한번에 제거 */
// first.className = '';
// Attr(first, 'class', '');

// #toggle
first.classList.toggle('is-active'); //boolean 값을 반환

// #contains
// first라는 클래스 리스트에 hello라는 클래스가 있어?
// boolean 값을 반환
console.log(first.classList.contains('hello'));

// @유틸함수
// function addClass(Node, className) {
//   if (typeof node === 'sting') node = getNode(node);

//   if (typeof className !== 'string') {
//     throw new TypeError(
//       'addClass 함수의 두 번째 인수는 문자 타입이어야 합니다.'
//     );
//   }
//   node.classList.add(className);
// }

// addClass('.first', 'hello');
/* 스타일 변경 방법 --------------------------------------------------------- */

// 계산되기 이전 값을 가져오기 때문에 setter은 가능하나 getter은 불가하다.
first.style.backgroundColor = 'orange'; //setter
console.log(first.style.backgroundColor); //getter
// console.log(first.style.backgroundColor); //setter을 선언하지 않고 콘솔 입력 시 빈 문자열 나옴.

// #- style.cssText - "style" 속성 전체에 대응하므로 스타일 전체에 대한 문자열 저장

/* 계산된 스타일 읽기 ------------------------------------------------------- */

// #- getComputedStyle(element, [pseudoElement]) `읽기 전용`

// ^getter의 역할
// console.log(getComputedStyle(first).fontSize);

console.log(getComputedStyle(first).getPropertyValue('font-size')); //명시적 방법

// 객체의 속성에 접근할 때 .표기법은 사용할 수 없다.
// computed property[]

// function setCss(node, prop, value) {
//   if (typeof node === 'string') node = getNode(node);

//   if (!(prop in document.body.style)) {
//     throw new SyntaxError(
//       'setCss 함수의 두 번째 인자인 prop은 유효한 css 속성이 아닙니다.'
//     );
//   }

//   if (!value)
//     throw new SyntaxError('setCss 함수의 세 번째 인수는 필수값 입니다.');

//   node.style[prop] = value;
// }

// setCss('.first', 'color', 'pink');

// function getCss(node, prop) {
//   if (typeof node === 'string') node = getNode(node);

//   if (!(prop in document.body.style)) {
//     throw new SyntaxError(
//       'getCss 함수의 두 번째 인자인 prop은 유효한 css 속성이 아닙니다.'
//     );
//   }

//   return getComputedStyle(node).getPropertyValue(prop);
// }

// ^객체 안에 키 값이 있는지 확인하는 방법
// key in document.body.style;
