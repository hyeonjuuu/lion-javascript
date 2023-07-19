/* --------------------- */
/* Event Handling        */
/* --------------------- */

/* 이벤트 핸들링 3가지 방법 --------------------------------------------------- */

// 1. HTML 속성 : onclick="handler()"
// 2. DOM 프로퍼티 : element.onclick = handler
// 3. 메서드 : element.addEventListener(event, handler[, phase])

/* 이벤트 추가/제거 --------------------------------------------------------- */

// - addEventListener
// - removeEventListener

// const first = getNode('.first');

function handler() {
  // console.log('HTML 속성에서 이벤트를 실행합니다.');
  console.log('DOM 프로퍼티에서 이벤트를 실행합니다.');
}

// first.onclick = handler;

//^ click, mousemove, mouseover, mouseout, mousedown, mouseup

// function handleClick() {
//   console.log('이벤트 메서드를 호출합니다.');
// }
// // first.addEventListener('mouseover', handleClick);
// bindEvent('.first', 'click', handleClick);

// setTimeout(() => {
//   first.removeEventListener('mouseover', handleClick);
// }, 3000);

// *이벤트 객체(event object)
// 이벤트가 발생하면 브라우저는 이벤트 객체라는 것을 만듭니다.
// 객체에 이벤트에 관한 상세한 정보를 넣고, 핸들러의 인수로 형태를 전달한다.

const ground = getNode('.ground');
const ball = getNode('#ball');

// throttle : 특정 시간마다 함수 실행, debounce : 사용자가 행동을 멈추면 마지막에 한번만 실행됨.

function handleClick(e) {
  let x = e.offsetX;
  let y = e.offsetY;

  ball.style.transform = `translate(${x - ball.offsetWidth / 2}px,${
    y - ball.offsetHeight / 2
  }px)`;
}

ground.addEventListener('click', handleClick);
