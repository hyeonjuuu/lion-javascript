/* --------------------------------- */
/* DOM traversal                     */
/* --------------------------------- */

// DOM : Document Object Model
// 문서 자체

/* 모든 노드에서 사용 */
// - parentNode
// - childNodes
// - firstChild
// - lastChild
// - previousSibling
// - nextSibling

/* 요소 노드에서만 사용 가능 */
// - parentElement
// - children
// - firstElementChild
// - lastElementChild
// - previousElementSibling
// - nextElementSibling

/* -------------------------------------------------------------------------- */
/*                                     예제                                     */
/* -------------------------------------------------------------------------- */

getNode('.first');

const first = getNode('.first');
const span = getNodes('span');

console.log(span);

/* 문서 대상 찾기 */
// - getElementById
// 성능적으로 querySelector 보다 이점이 있다. but, 과거의 유물
const message = document.getElementById('message');
console.log(message);
// - getElementsByTagName
// - getElementsByClassName
// - querySelector
// ^css 선택자를 그대로 사용할 수 있다. -> nth-child 등..
// const first = document.querySelector('.first');

console.log(first);
// - querySelectorAll
// const list = document.querySelectorAll('span');
const list = document.querySelectorAll('span');

console.log(list);
// - closest
// 가장 인접한 노드(대상)부모를 찾아줌(위로 올라감..)
console.log(first.closest('h1')); // event delegation

/* 문서 대상 확인 */
// - matches
//  그 값이 맞는지, 일치 여부 확인.
console.log(first.matches('.first'));
// - contains
// 선택자의 자식들 중에 해당 element가 있어?
// console.log(first.contains(''));

//클래스를 포함하고 있어?
// Node.classList.contains();
