/* -------------------- */
/* Do While Loop        */
/* -------------------- */

//^ 값이 거짓이지만 최초 실행 한번은 실행한다 -> 값 : 100
// let i = 0;

// do{

//   console.log(i);

//   i++;
// }while(i < 10);

let i = 0;

do {
  if (i === 0) {
    console.log('최초실행');
  } else i++;
} while (i < 10);

// do ~ while 문 (역순환)
// - prompt 창을 띄워 사용자로 하여금 순환 횟수를 요청
// - 사용자로부터 요청된 횟수 만큼 역방향으로 순환 출력
// - 사용자로부터 요청된 횟수가 0보다 작을 경우,
//   '최초 실행된 메시지입니다. 이 메시지는 조건이 거짓이어도 볼 수 있습니다.' 출력
// - 순환 중단

// ^ ver1
// let repeat = prompt('몇번 반복하시겠습니까?',0);

// do{

//   console.log(repeat)

//   repeat--;

// }while(repeat)

// ^ ver2
let repeat = prompt('몇번 반복하시겠습니까?', 0);

do {
  console.log(repeat);

  if (repeat < 0) {
    console.log('최초실행입니다.');
    break;
  }

  repeat--;
} while (repeat);

// do ~ while 문 (순환)
// - 위 do ~ while 문을 순방향으로 순환되도록 설정
