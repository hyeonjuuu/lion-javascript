/* ------------------------ */
/* Event delegation         */
/* ------------------------ */

/* 클래스를 사용한 위임 ---------------- */

/* 속성을 사용한 위임 ------------------ */

/* 노드를 사용한 위임 ------------------ */

// ^부모인 container에 이벤트를 적용.
const container = getNode('.container');

// function handleDelegation(e) {
//   // console.log(this); //container
//   // console.log(e.currentTarget); //이벤트가 걸린 대상 = container

//   let target = e.target;

//   console.log(target.getAttribute('class'));

//   if (target.getAttribute('class')) {
//   }
// }

function handleDelegation(e) {
  let target = e.target;
  //타겟에 클래스를 담아와줘
  let className = attr(target, 'class');

  // let dataName = target.dataset.name;
  let dataName = attr(target, 'data-name');

  if (dataName === 'A') {
    console.log('A버튼 클릭');
  }

  //누른 대상의 속성을 가져옴
  // console.log(target.getAttribute('class'));

  // if (target.getAttribute('class') === 'a') {
  //   console.log('A 버튼 클릭!');
  // }

  // if (target.getAttribute('class') === 'b') {
  //   console.log('B 버튼 클릭!');
  // }

  // if (target.getAttribute('class') === 'c') {
  //   console.log('C 버튼 클릭!');
  // }

  // if (target.getAttribute('class') === 'd') {
  //   console.log('D 버튼 클릭!');
  // }
}
container.addEventListener('click', handleDelegation);
