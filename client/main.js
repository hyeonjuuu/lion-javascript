// 모듈 프로그래밍 -> js의 어려운 문법은 X 방법론.

// 모듈로 설정하는 순간 type="moudle" 설정한 자바스크립트가 캡슐화됨.

// getNode 가져오기
// getNode.js에서 가져올 함수의 앞에 export 붙여주기

import { getNode } from './lib1/dom/getNode.js';

const first = getNode('#firstNumber');
const second = getNode('#secondNumber');
const result = getNode('.result');
const clear = getNode('#clear');

// [page-1]
// 1. input value 값 가져오기

// 2. 두 수의 합 더하기

// 3. result 출력 하기

function handleInput() {
  let firstValue = +first.value;
  let secondValue = second.value / 1;
  let total = firstValue + secondValue;

  clearContents('.result');
  insertLast('.result', total);
}

function handleClear() {
  // first.value;
  // second.value;

  clearContents(first);
  clearContents(second);
  clearContents(result);

  result.textContent = '-';
}

// [page-2]
// clear 버튼을 누르면 모든 글자가 초기화 될 수 있도록 만들어주세요

// ^1. clear 버튼을 가져온다.
// getNode('#clear)
// ^2. clear 버튼에 이벤트 핸들러를 연결한다.
// clear.addEventListener('click', handleClick);
// ^3. firstValue값을 지운다.
// clearContents(first);
// ^4. lastValue값을 지운다.
// clearContents(second);
// ^5. result의 값을 지운다.
// clearContents(result);
// ^6. result에 - 값을 넣는다.
// result.textContent = '-';

first.addEventListener('input', handleInput);
second.addEventListener('input', handleInput);
clear.addEventListener('click', handleClear);
