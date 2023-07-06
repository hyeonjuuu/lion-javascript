/* ---------------- */
/* Condition        */
/* ---------------- */

// if ('') {
//   console.log('이 조건은 항상 실행됩니다.');
// } else {
//   console.log('조건에 부합하지 않습니다.');
// }

// #사용자가 받는 모든 값을 소문자 처리 = toLowerCase()
// let result = prompt('자바스크립트의 공식 이름은 무엇일까요?');
// if (result === 'ECMAScript') {
//   console.log('정답입니다.');
// } else {
//   console.log('모르셨나요? 정답은 ECMAScript입니다.');
// }

// ^ 아래 구문에서 0 = 콘솔에 입력되어진 기본값 = placeholder역할
// let value = prompt('숫자를 입력하세요.', 0);

// if (value > 0) {
//   console.log(1);
// } else if (value < 0) {
//   console.log(-1);
// } else {
//   console.log(0);
// }

// let result = (a + b < 4) ? '미만' : '이상';

// 그 영화 봤니?
//     ↓
// Yes | No
//     | 영화 볼거니?
//           ↓
//       Yes | No

// 영화 봤니?
// let didWatchMovie = 'yes';

// // 영화 볼거니?
// let goingToWatchMovie = 'no';

// // if 문(statement)
// if(didWatchMovie === 'yes'){
//   console.log('무슨 영화 봤어?');

// }else if (goingToWatchMovie === 'yes'){
//   console.log('영화 보러 갈래?');
// }
// else{
//   console.log('그래...');
// }

// ^ 중첩 조건
// 영화 봤니?
let didWatchMovie = confirm('너 엘리멘탈 봤니?','');

// 영화 볼거니?
let goingToWatchMovie = 'yes';

if(didWatchMovie){
  console.log('안봤어');
}else{
  let alone = confirm('혼자 봤니?');

  if(alone){
    let didCry = confirm('너 울었니..?');

    if(didCry){
      console.log('ㅋㅋㅋㅋㅋ');
    }else{
      console.log('너T야?')
    }
  }
}


// else 절(caluse)

// else if 복수 조건 처리

// 조건부 연산자

// 멀티 조건부 연산자 식
