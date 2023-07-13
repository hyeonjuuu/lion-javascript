/* --------- */
/* Object    */
/* --------- */

/* Primitives vs. Object --------- */

// !key:value 쌍으로 구성된 엔티티(entity) 데이터 구조
let cssCode = `
  .dialog {
    position: fixed;
    z-index: 10000;
    top: 50%;
    left: 50%;
    width: 60vw;
    max-width: 800px;
    height: 40vh;
    min-height: 280px;
    transform: translate(-50%, -50%);
  }
`;

// !위 CSS 스타일 코드를 JavaScript 객체로 작성해봅니다.
let cssMap;

// !인증 사용자 정보를 객체로 구성해봅니다.
// 인증 사용자(authentication user)
// - 이름
// - 이메일
// - 로그인 여부
// - 유료 사용자 권한

let authUser;

// !점(.) 표기법
// authUser 객체의 프로퍼티에 접근해 Console에 출력해봅니다.

// !대괄호([]) 표기법
// 유료 사용자 권한(paid User Rights) 이름으로 프로퍼티를 재정의하고
// 대괄호 표기법을 사용해 접근 Console에 출력해봅니다.

// !계산된 프로퍼티 (calcurate property)
let calculateProperty = 'phone'; // phone | tel

// !프로퍼티 포함 여부 확인
// ^ket in user1
/* Object/prototype.SIGN = true;

// ^ 자신의 속성을 가지고 있는지 확인
for(let key in user1){
  if(Object.prototype.hasOwnProperty.call(user1, key)){
    console.log(key)
  }
} */

// !프로퍼티 나열
/* // ^ key만 모아놓은 배열 만들기 = Objext.keys()
ley keyArray = Object.keys(authUser);
ley valueArray = Object.values(authUser);

console.log(valueArray); */

//getPtop(object)
/* function getProp(object){
  if(typeof object !== 'object'){
    throw new Error('getProp함수의 매개 변수는 객체 타입이어야 합니다.')
  }
  return object.keys(object)
}

function getP(object) {
  let result = [];

  for(let key in object) {
    if(({}).hasOwnProperty.call(object,key)){
      result.push(key)
    }
  }
  return result;
} */

// !프로퍼티 제거(remove) or 삭제(delete)
// # 제거 = null / 삭제 = 없앰

// *제거 (name을 제거)
/* authUser.name = null;
console.log(authUser); */

// *삭제 (uid를 삭제)
/* delete authUser.uid;
console.log(authUser); */

// remove property {#651,12}
// ^함수 (객체를 넣고 지우고 싶은 property를 넣기)
// authUser.name = null;
// delete authUser.uid
// console.log(authUser);

/* function removeProperty(object,key) {
  object[key] = null;

  return object;
}

removeProperty(authUser, 'name') */

//  {#d1e,15}
/* function removeProperty(object,key) {

  if(key === 'all'){
    for(let key of object.keys(object)){
      object[key] = null
    }

    return object;
  }
  object[key] = null;

  return object;
}

removeProperty(authUser, 'name') */

//  {#d50,9}
// ^authUser에 name을 입력하면 실제 name이 제거되는 delete 함수
// deleteProperty(authUser, 'name')
/* function deleteProperty(object,key){

  delete object[key];

  return object;
} */

function deleteProperty(object, key) {
  delete authUser.key;
}

deleteProperty(authUser, 'name'); // authUser = {}

// !단축 프로퍼티
let name = '선범';
let email = 'seonbeom2@euid.dev';
let authorization = 'Lv. 99';
let isLogin = true;

// * shorthand property

// !프로퍼티 이름 제한
// 예약어: class, if, switch, for, while, ...

// ^객체가 프로퍼티를 포함하는 지 유무를 반환하는 유틸리티 함수 isEmptyObject 작성
function isEmptyObject() {
  return null;
}

/* ------------------------------------------- */
/* 배열 구조 분해 할당  destructuring assignments   */
/* ------------------------------------------- */

let color = ['#ff00', '#2b00ff', '#00ff2b'];
// 배열이 중요하기 때문에 순서 변경 안됨.
let [, , green] = color; // green 값 나옴.

/* -------------------------------------------- */
/* 객체 구조 분해 할당  destructuring assignments    */
/* --------------------------------------------- */
const salaries = {
  권혜미: 50,
  이수연: 3000,
  강예나: 500,
  김태일: 700,
};

const { 권혜미, 이수연, 강예나, 김태일 } = salaries;

console.log(권혜미);
