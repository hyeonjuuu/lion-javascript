/* ------------------------------------ */
/* HTML Attributes vs. DOM Properties   */
/* ------------------------------------ */

/* HTML 속성 ------------------------------------------------------------- */

// 브라우저는 HTML 태그를 해석해 DOM 객체를 만들 때 HTML 표준 속성을 인식하고,
// 이 표준 속성을 사용해 DOM 프로퍼티를 생성합니다. 표준 속성이 아닌 경우,
// 이에 매핑하는 DOM 프로퍼티가 생성되지 않습니다.
// HTML 속성 값은 항상 문자열입니다.

const first = getNode('.first');

// console.log(first);
// console.dir(first);
console.dir(first.className);

/* DOM 프로퍼티 ----------------------------------------------------------- */

// DOM 노드(DOM node)는 JavaScript 객체입니다.
// DOM 프로퍼티와 메서드는 일반 JavaScript 객체처럼 행동하므로 아래와 같은 특징을 보입니다.
// - 어떤 값이든 가질 수 있습니다.
// - 대·소문자를 구분하므로 `elem.nodeType`이 아닌, `elem.NoDeTyPe`는 동작하지 않습니다.
// - DOM 프로퍼티는 HTML 속성과 달리 값이 항상 문자열이 아닙니다.

/* DOM 프로퍼티 검토 ------------------------------------------------------- */

// - elementNode.hasAttribute(name) – 속성 존재 여부 확인
// - elementNode.getAttribute(name) – 속성값을 가져옴
// - elementNode.setAttribute(name, value) – 속성값을 변경함
// - elementNode.removeAttribute(name) – 속성값을 지움
// - elementNode.attributes – 열거 가능한(iterable) 속성 집합을 반환함

// # hasAttribute
// first에 class라는 속성이 있어?
// 가지고 있다면 true 없다면 false
first.hasAttribute('class');
first.hasAttribute('id');
console.log(first.hasAttribute('id'));

// # getAttribute
// first의 class라는 속성을 가져와줘
// 특정 값의 속성값을 가져올 때 사용
console.log(first.getAttribute('class')); //first
console.log(first.getAttribute('id')); //message

// # setAttribute
// 두가지 값이 필요. 속성의 이름과 그 값.
// first라는 속성의 title을 메세지라는 값으로 세팅하겠다.
// first.setAttribute('title', '메세지');
// first.setAttribute('title', ''); // 값을 빈 문자열로 처리하여 제거힘.
// first.setAttribute('class', 'second'); // 기존의 클래스 값을 삭제 새로운 클래스가 들어옴.

// # removeAttribute
first.removeAttribute('title'); //title속성 제거됨.

// # attributes
// 객체 형태
console.log(first.attributes);
for (let value of first.attributes) {
  console.log(value);
}

console.log(first.getAttribute('id')); // message

/* 인수 argument
함수는 무조건 값을 내뱉는다.
값을 내뱉지 않는다면 undefined가 나옴.
함수 실행 -> 함수이름()
() -> arguments
인수는 파라미터로 이동. 함수 안에서 파라미터를 받으면 변수처럼 사용할 수 있다. */

/* 비표준 속성, 프로퍼티 설정 ------------------------------------------------- */

// data-* 속성은 커스텀 데이터를 안전하고 유효하게 전달해줍니다.
// data-* 속성을 사용하면 읽기 쉽고, 수정도 손쉽습니다.

// - elementNode.dataset

// data- : dataset이라는 자료구조 안에 data-라고 적은 것들이 다 객체로 저장됨.
// console.log(first.dataset);
// console.log((first.dataset.animation = 'paused'));
console.log(first.dataset.size); //10

/* -------------------------------------------------------------------------- */
/*                                    함수만들기                                   */
/* -------------------------------------------------------------------------- */

first.getAttribute('id');

// 0. 넘어 온 대상이 문자인지 체크
// 1. 체크 후 element node로 변경해 줘야함.

function getAttr(node, prop) {
  // 변수에 할당이 됨.
  // const node = '.first';
  // const prop = 'id';
  // '.first'.getAttribute('id');

  // node의 값이 문자라면 getNode() 통해 문자를 실제 element로 반환
  if (typeof node === 'string') {
    node = getNode(node);
  }

  return node.getAttribute(prop);
}

getAttr('.first', 'id'); // message

/* 함수에서 전달되는 인수 3개 */

function setAttr(node, prop, value) {
  if (typeof node === 'string') {
    node = getNode(node);
  }

  // 전달받은 prop의 타입이 string이 아니라면 Error!

  if (typeof prop !== 'string') {
    throw new TypeError(
      'setAttr 함수의 두 번째 인수는 문자 타입 이어야 합니다.'
    );
  }

  if (!node[prop] && prop !== 'class' && prop !== 'title') {
    node.dataset[prop] = value;
    return;
  }

  node.setAttribute(prop, value);
}

setAttr('.first', 'title', '인사멘트');
// setAttr('.first', 'value', '인사멘트');
setAttr('.first', 'class', '인사멘트'); // undifined

/* setAttr을 사용하여 class 재정의 */
/* value는 비표준 속성. data- 을 붙여 처리하기 */
// 돔이 가지고 있는 프로퍼티 확인하기 그 값이 없다면 dataset으로 처리하기
// prop의 값이 class가 아닌 경우에 dataset으로 처리

/* ------------------- attr 함수-------------------- */
// 일반함수
function attr(node, prop, value) {
  // if (!value) {
  //   getAttr(node, prop);
  // } else {
  //   setAttr(node, prop, value);
  // }

  return !value ? getAttr(node, prop) : setAttr(node, prop, value);
}

// 화살표 함수로 변환
const arrowAttr = (node, prop, value) =>
  !value ? getAttr(node, prop) : setAttr(node, prop, value);

attr('.first', 'class'); // getter
attr('.first', 'class', 'second'); //setter
