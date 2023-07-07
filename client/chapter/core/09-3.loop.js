/* ------------ */
/* For Loop     */
/* ------------ */

// 2 ~ 10까지의 짝수 출력하기

for (let j = 0; j <= 10; j++) {
  if (j % 2 === 0) {
    // console.log(j);
  }
}

const frontEndDev = 'HTML CSS SVG JavaScript jQuery React Redux'.split(' ');

let i = 0;
let l = frontEndDev.length;

while (i < l) {
  // console.log(frontEndDev[i]);
  i += 1;
}

// while 문 → for 문 (순환)
// - 실행 흐름
// - 순환 중단 또는 이어서 순환
//   - 조건이 맞을 경우, 이어서(continue) 순환
//   - 조건: SVG, jQuery는 출력하지 마세요.

//   - 조건이 맞을 경우, 순환 중단(break)
//   - 조건: JavaScript 까지만 출력하세요.

// ver1 while -> for {#ae1,3}
// for (let i = 0; i < l; i++) {
//   console.log(frontEndDev[i]);
// }

// ver2 SVG, jQuery는 출력하지 마세요.  {#7ff,9}
// for (let i = 0; i < l; i++) {
//   let value = frontEndDev[i];
//   let lower = value.toLowerCase();

//   if (value === 'SVG') continue; //value 값이 'svg'와 일치한다면 반복문 건너뛰기
//   if (value === 'jQuery') continue; //value 값이 'jQuery'와 일치한다면 반복문 건너뛰기

//   console.log(value);
// }

// ver3 조건이 맞을 경우, 순환 중단(break) {#e9a,8}
// for (let i = 0; i < l; i++) {
//   let value = frontEndDev[i];
//   let lower = value.toLowerCase();

//   if(lower.includes('jQuery')) break;

//   console.log(value);
// }

//   - 무한 루프 (브레이크)
//   - for 문 (역순환)

// 역순환 {#b38,7}
// ^ 0부터 시작하지 않아야 함.

let zero = 0;

for (let i = l; zero < i; ) {
  console.log(frontEndDev[--i]); // [--i]감소된 값을 바로 사용
}
// 리턴 후 할당이 되는지, 아닌지.
