/* ------------------------ */
/* Event delegation         */
/* ------------------------ */

/* 클래스를 사용한 위임 ---------------- */

/* 속성을 사용한 위임 ------------------ */

/* 노드를 사용한 위임 ------------------ */

// ^부모인 container에 이벤트를 적용.
// const container = getNode('.container');

// function handleDelegation(e) {
//   // console.log(this); //container
//   // console.log(e.currentTarget); //이벤트가 걸린 대상 = container

//   let target = e.target;

//   console.log(target.getAttribute('class'));

//   if (target.getAttribute('class')) {
//   }
// }

const container = getNode('.container');
// e : 이벤트 객체.
function handleDelegation(e) {
  // e.target : 가장 먼저 클릭한 대상이 target
  // 이벤트 타겟이 li가 아닌 span button이 될 수 있음
  let target = e.target;
  // 선택한 타겟의 가장 가까운 부모인 li찾기
  let li = target.closest('li');

  // 함수는 읽다가 li가 없으면 나머지 실행하지 않고 return해줘
  // 정확하게 li인 경우에만 체크할 수 있다.
  if (!li) return;

  // 하지만 컨테이너를 클릭하게되면 가까운 부모 중 li가 없기 때문에 null이 됨.
  // li.getAttribute('class') -> null.getAttribute('class')
  let className = attr(li, 'class');
  let dataName = attr(li, 'data-name');

  if (className === 'home') {
    console.log('홈 실행!');
  }
}

container.addEventListener('click', handleDelegation);
