/* --------------- */
/* While Loop      */
/* --------------- */

// let repeat = 0;
// while(repeat < 10) {

//   console.log(repeat);

//   repeat++;
// }

const frontEndDev = [
  'HTML',
  'CSS',
  'SVG',
  'JavaScript',
  'jQuery',
  'React',
  'Redux',
];

/* 프론트엔드 개발 집합 항목 출력 ---------------------------------------------- */

// console.log(frontEndDev[0]);
// console.log(frontEndDev[1]);
// console.log(frontEndDev[2]);
// console.log(frontEndDev[3]);
// console.log(frontEndDev[4]);
// console.log(frontEndDev[5]);
// console.log(frontEndDev[6]);

/* 프론트엔드 개발 집합을 순환해서 각 아이템을 Console 패널에 출력 -------------------- */

// while 문 (순환 : 순방향)

let i = 0;

while (i < frontEndDev.length) {
  let value = frontEndDev[i];

  console.log(value);

  i++;
}

// while 문 (역순환 : 역방향)

// ^ ver1
// let l = frontEndDev.length - 1;
// while(l >= 0){

//   let value = frontEndDev[l];
//   console.log(value);
//   --l;
// }

// ^ ver2 -> 배열 파괴, 원본 파괴
// while(frontEndDev.length){

//   console.log(frontEndDev.pop());
// }

// ^ ver3 -> ver2의 보완. 배열의 깊은 복사 (slice-배열을 전부 복사) -> old
// let copyArray = frontEndDev.slice();

// while(frontEndDev.length){

//   console.log(frontEndDev.pop());
// }

// ^ ver4 -> spread syntax -> new
let copyArray = [...frontEndDev];

while (frontEndDev.length) {
  // console.log(frontEndDev.pop());  //pop 사용
  console.log(frontEndDev.shift()); //shirft 사용
}

// 성능 진단 : 순환 vs. 역순환
