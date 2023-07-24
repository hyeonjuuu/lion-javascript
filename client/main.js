import {
  diceAnimation,
  getNode,
  getNodes,
  attr,
  insertLast,
  endScroll,
} from './lib/index.js';

// #[pharse-1] 주사위굴리기
// 1. dice animation 불러오기
// 2. 주사위 굴리기 버튼을 클릭하면 diceAnimation 실행될 수 있도록
// - 주사위 굴리기 버튼을 가져온다.
// - 이벤트 핸들러를 연결한다.
// - 애니메이션 코드를 작성한다.
// 3. 애니메이션 토글 제어
// 변수를 만들어 true, false에 따라 조건 처리하기
// 4. 클로저 + IIFE를 사용한 변수 보호

// [pharse-2] 레코드 리스트 control / view
// 1. 주사위가 멈추면 기록/초기화 버튼 활성화
// 2. hidden 속성 제어하기
// - 기록 버튼 이벤트 바인딩
// - hidden 속성 false 만들기
// - 초기화 버튼 이벤트 바인딩
// - hidden 속성 true 만들기

/* ------------------------------------------------------------------------ */
// const button = getNodes('.buttonGroup > button');
// console.log(button); // 배열 출력

// 배열 구조 분해 할당
/* const [startButton, recordButton, resetButtton] = getNodes(
  '.buttonGroup > button'
);

let isClicked = false;
let stopAnimation;

function handleRollingDice(e) {
  //  ^setInterval호출할 때 마다 diceAnimation 호출해주세요
  // setInterval(diceAnimation, 100);

  // 블록스코프에 영향을 받지 않고 변수를 사용하기 위해

  if (!isClicked) {
    // setInterval은 실행하면 고유한 id 반환 -> 이벤트 제거로 사용할 수 있음.
    // 실행 아이디 stopAnimaiton에 할당.
    stopAnimation = setInterval(diceAnimation, 100);
    // console.log('첫 번째 클릭');
  } else {
    console.log('두 번째 클릭');
    // 이벤트가 걸린 대상의 아이디 값을 ()안에 적용해야 함.
    // but, 아이디가 없음.
    clearInterval(stopAnimation);
  }

  // isClicked 반전
  isClicked = !isClicked;
}

startButton.addEventListener('click', handleRollingDice); */

/* ------------------------------------------------------------------ */

const [startButton, recordButton, resetButton] = getNodes(
  '.buttonGroup > button'
);
const recordListWrapper = getNode('.recordListWrapper');
const tbody = getNode('.recordList tbody');

// #함수 내부에 선언
/* function handleRollingDice(e) {
  let isClicked = false;
  let stopAnimation;

  return () => {
    if (!isClicked) {
      stopAnimation = setInterval(diceAnimation, 100);
    } else {
      clearInterval(stopAnimation);
    }

    isClicked = !isClicked;
  };
}

startButton.addEventListener('click', handleRollingDice()); */

// #즉시 실행 함수
/* const handleRollingDice = (function handleRollingDice(e) {
  let isClicked = false;

  
  let stopAnimation; //undefined

  return () => {
    if (!isClicked) {
      stopAnimation = setInterval(diceAnimation, 100);
    } else {
      clearInterval(stopAnimation);
    }

    isClicked = !isClicked;
  };
})();

startButton.addEventListener('click', handleRollingDice); */

// ^진짜진짜 쉬운 과제
// disableElement(node)
// enableElement(node)
// isDisableState(node) -> true, false
// isVisibleState(node) -> true, false
// visibleElement(node)
// invisibleElement(node)

// #화살표함수
const handleRollingDice = ((e) => {
  let isClicked = false;
  let stopAnimation;

  return () => {
    if (!isClicked) {
      //주사위 play
      stopAnimation = setInterval(diceAnimation, 100);
      // disable = true 버튼 활성화
      recordButton.disabled = true;
      resetButton.disabled = true;
    } else {
      //주사위 stop
      clearInterval(stopAnimation);
      // disable = flase 버튼 비활성화
      recordButton.disabled = false;
      resetButton.disabled = false;
    }

    isClicked = !isClicked;
  };
})();

// 회차가 늘어날 수 있도록
// diceValue 들어갈 수 있도록
// total값이 나올 수 있도록

let count = 0;
let total = 0;

function createItem(value) {
  // 뿌려줄 템플릿 만들기
  return /* html */ `
    <tr>
      <td>${++count}</td>
      <td>${value}</td>
      <td>${(total += value)}</td>
    </tr>
  `;
}

function renderRecordItem() {
  // 큐브의 data-dice 값 가져오기
  const diceValue = +attr('#cube', 'data-dice');

  // 뿌려줄 템플릿 만들기
  // const template = /* html */ `
  //   <tr>
  //     <td>${++count}</td>
  //     <td>${diceValue}</td>
  //     <td>${(total += diceValue)}</td>
  //   </tr>
  // `;

  // insertLast('.recordList tbody', template);

  insertLast(tbody, createItem(diceValue));

  endScroll(recordListWrapper);
}

// ^레코드 리스트 보여짐.
function handleRecord() {
  recordListWrapper.hidden = false;

  // 큐브의 data-dice 값 가져오기
  const diceValue = +attr('#cube', 'data-dice');

  // 뿌려줄 템플릿 만들기
  const template = /* html */ `
  <tr>
  <td>${++count}</td>
  <td>${diceValue}</td>
  <td>${(total += diceValue)}</td>
  </tr>
  `;

  insertLast('.recordList tbody', template);

  renderRecordItem();

  console.log(diceValue);
}

// 레코드 리스트 안보여짐.
function handleReset() {
  recordListWrapper.hidden = true;
  // 초기화 버튼을 누르면 다시 기록, 초기화 버튼 비활성화 되도록.
  recordButton.disabled = true;
  resetButton.disabled = true;
}

startButton.addEventListener('click', handleRollingDice);
// 기록 버튼 클릭하면 리스트래퍼 보여짐.
recordButton.addEventListener('click', handleRecord);
resetButton.addEventListener('click', handleReset);

/* -------------------------------------------------------------------------- */
/*                              randerRecordItem                              */
/* -------------------------------------------------------------------------- */

// function renderRecordItem(){

//   // 큐브의 data-dice 값 가져오기
//   const diceValue = +attr('#cube','data-dice');

//   // 뿌려줄 템플릿 만들기
//   const template = /* html */`
//     <tr>
//       <td>${++count}</td>
//       <td>${diceValue}</td>
//       <td>${total += diceValue}</td>
//     </tr>
//   `

//   insertLast('.recordList tbody',template);

// }
