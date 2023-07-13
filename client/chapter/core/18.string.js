/* ---------------------------------------------------------------------- */
/* String Type                                                            */
/* ---------------------------------------------------------------------- */

let message = 'Less is more.';

// #length 프로퍼티
let stringTotalLength = message.length;
console.log('stringTotalLength : ', stringTotalLength);

// #특정 인덱스의 글자 추출
let extractCharacter = message[10];
console.log('extractCharacter : ', extractCharacter);

// 문자열 중간 글자를 바꾸는 건 불가능
// (기존 문자 변경 대신, 새로운 문자를 생성해야 함)
// ^skip
let immutableChangeCharacter;

// #부분 문자열 추출
//  1번부터 3번까지 문자 추출
// 숫자를 하나만 적으면 해당 숫자부터 끝까지 출력
// 음수를 사용하면 뒤에서부터 숫자를 카운팅.
/* slice([begin[, end]])
end : -1을 지정하면 맨 마지막 스트링 제외 */
let slice = message.slice(1, 3);
console.log('slice : ', slice);

let subString = message.substring(1, 3);
console.log('subString : ', subString);

// 1번 인덱스 부터 뒤에 3개를 더 보여준다
let subStr = message.substr(1, 3);
console.log('subStr : ', subStr);

// #문자열 포함 여부 확인
// 포함되어있다면 해당 인덱스 출력, 아니라면 -1
let indexOf = message.indexOf('o');
console.log('indexOf : ', indexOf);

// 뒤에서부터 찾는다.
let lastIndexOf = message.lastIndexOf('s');
console.log('lastIndexOf : ', lastIndexOf);

// 포함에 대한 여부 확인
let includes = message.includes('less');
console.log('includes : ', includes);

// 해당 문자를 시작으로 하고 있나? -> true/false
let startsWith = message.startsWith('Less');
console.log('startsWith : ', startsWith);

// 해당 문자로 끝나는가? -> true/false
let endsWith = message.endsWith('more.');
console.log('endsWith : ', endsWith);

// #공백 잘라내기
// 문자의 왼쪽 부분의 공백 삭제
let trimLeft = message.trimLeft();

// 문자의 오른쪽 부분의 공백 삭제
let trimRight = message.trimRight();

// 좌우측 모두의 공백 삭제
// let trim = message.trim();

/* -------------------------------------------------------------------------- */
/*                                   trim 예시                                  */
/* -------------------------------------------------------------------------- */
let str = 'a b bdb d f e f dw     ';
let trim = str.trim();

// replace
str.replace(/\s*/g, '');

console.log('trim : ', trim);

// #텍스트 반복
let repeat = message.repeat(3);
console.log('repeat : ', repeat);

// #대소문자 변환
let toLowerCase = message.toLowerCase();
console.log('toLowerCase :', toLowerCase);

let toUpperCase = message.toUpperCase();
console.log('toUpperCase : ', toUpperCase);

// #텍스트 이름 변환 유틸리티 함수
function toCamelCase(string) {
  return string.replace(/(\s|-|_)+./g, ($1) =>
    $1
      .trim()
      .replace(/(-|_)+/, '')
      .toUpperCase()
  );
}

function toPascalCase(string) {
  let name = toCamelCase(string);
  return name[0].toUpperCase() + name.slice(1);
}
