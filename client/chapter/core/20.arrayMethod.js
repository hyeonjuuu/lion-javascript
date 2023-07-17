/* ------------------------------ */
/* Array's Methods                */
/* ------------------------------ */

// #Array.isArray
// 배열인지 아닌지 확인 가능.

// array
const isArray = (data) =>
  Object.prototype.toString.call(data).slice(8, -1).toLowerCase() === 'array';
function nomalIsArray(data) {
  return (
    Object.prototype.toString.call(data).slice(8, -1).toLowerCase() === 'array'
  );
}
// null
const isNull = (data) =>
  Object.prototype.toString.call(data).slice(8, -1).toLowerCase() === 'null';

function normalIsNull(data) {
  return (
    Object.prototype.toString.call(data).slice(8, -1).toLowerCase() === 'null'
  );
}

// !!여기서부터 중요!!

const arr = [10, 100, 1000, 10000];

const people = [
  {
    id: 0,
    name: '김다연',
    profession: '프론트엔드 개발자',
    age: 25,
    imageSrc: 'MAksd23',
  },
  {
    id: 1,
    name: '이현주',
    profession: '수영선수',
    age: 40,
    imageSrc: 'afdfakA',
  },
  {
    id: 2,
    name: '김희소',
    profession: '물음표살인마',
    age: 30,
    imageSrc: 'fAKqi321',
  },
  {
    id: 3,
    name: '김규민',
    profession: '래퍼',
    age: 52,
    imageSrc: 'AFGq3d23',
  },
  {
    id: 4,
    name: '전진승',
    profession: '드라마평론가',
    age: 18,
    imageSrc: 'fQa15f3',
  },
];
/* 요소 순환 ---------------------------- */

// forEach : 값을 반환하지 않음.
arr.forEach((item, index) => {
  console.log(item);
});

// ^객체이기 때문에 .연산 사용 가능.
people.forEach((item) => {
  // console.log(item);
  console.log(item.name);
});

const span = document.querySelectorAll('span');
// 이벤트 처리 할 때 이 방식이 제일 좋은가요 ? no
// 이벤트 위임 event delegation
span.forEach((item, index) => {
  item.addEventListener('click', function () {
    console.log(this, index);
  });
});
/* 원형 파괴 ----------------------------- */

// #push
// #pop
// #unshift
// #shift
// #reverse
// 기존의 배열 순서를 뒤집음 -> 원본 훼손
// arr.reverse()
// #splice
// 원하는 항목을 추가, 제거가 가능 -> 원본 훼손
arr.splice(1, 0, 5, 13);
console.log(arr);

// #sort
// ^보다 정교하게 정렬 -> compare function
// 반환 값 < 0 : a가 b보다 앞에 있어야 한다
// 반환 값 == 0 : a와 b의 순서를 바꾸지 않는다.
// 반환 값 > 0 : b가 a 보다 앞에 있어야 한다.

// arr.sort();
arr.sort((a, b) => {
  return a - b;
});
console.log(arr);

/* 새로운 배열 반환 ------------------------ */
const user = ['선범', '효윤', '준석'];

// #concat
// 원본을 파괴하지 않고 새로운 배열 생성
// const newArray = arr.concat(user);
const newArray = [...arr, ...user, 'javascript', 'css'];
console.log(newArray);

// #slice
// 2번부터 5번 전까지 배열 출력 -> [2,3,4]
const slice = arr.slice(2, 5);
console.log(slice);

// #toSorted
const toSorted = arr.toSorted((a, b) => {
  return b - a;
});
console.log(toSorted);
// #toReversed
const toReversed = arr.toReversed();
console.log(toReversed);

// #toSpliced
// 2 : 시작 0 : 제거될 갯수 , 그 사이에 'javascript', 'css', 'react' 아이템 추가
const toSpliced = arr.toSpliced(2, 0, 'javascript', 'css', 'react');
console.log(toSpliced);

//imp
// ! map
// ^배열을 만들고 배열의 반복문을 돌아 콤마를 없애서 하나씩 출력되게

//nope
// const job = people.map((item, index) => {
//   // return item.profession;
//   return `<div>${item.profession}</div>`;
// });

// job.forEach((item) => {
//   document.body.insertAdjacentHTML('beforeend', item);
// });

// document.body.insertAdjacentHTML('beforeend', job);

const job = people.map((item, index) => {
  return /* html */ `
    <div class="userCard">
      <div class="imageField">
        <img src="${item.imageSrc}" alt="" />
      </div>
      <span>이름:${item.name}</span>
      <span>직업:${item.profession}</span>
      <span>나이:${item.age}</span>
    </div>
  `;
});

job.forEach((item) => {
  document.body.insertAdjacentHTML('beforeend', item);
});

console.log(job);

/* 요소 포함 여부 확인 ---------------------- */

// #indexOf
console.log(arr.indexOf(10));
// #lastIndexOf
console.log(arr.lastIndexOf(10));
// #includes
console.log(arr.includes(1000));

/* 요소 찾기 ------------------------------ */

// #find
// 대상중에 특정 아이템의 유무를 확인하고 있다면 해당 아이템을 반환
const find = people.find((item) => {
  // id의 값이 1과 일치한다면 id 값이 1인 대상을 리턴
  return item.id > 1;
});

console.log(find);

// #findIndex
const findIndex = people.findIndex((item) => {
  return item.id === 3;
});

console.log(findIndex);

/* 요소 걸러내기 --------------------------- */

//imp
// !filter
// 필터링을 거쳐 나온 모든 아이템을 배열로 반환

const filter = people.filter((item) => {
  return item.id > 2;
});

console.log(filter);

/* 요소별 리듀서(reducer) 실행 -------------- */

//imp
// #reduce
/*  */
const totalAge = people.reduce((acc, cur) => {
  return acc + cur.age;
}, 0);

console.log(totalAge);

//nope
const template = people.reduce(
  (htmlCode, cur) => htmlCode + `<div>${cur.name}</div>`,
  ''
);

// document.body.insertAdjacentHTML('beforeend', template);

// #reduceRight

/* string ←→ array 변환 ------------------ */

const str = '봉석 윤진 예나 시연 진만 정아';

// #split
// ^ 문자 -> 배열
const stringToArray = str.split(' ');
console.log(stringToArray);

// #join
// ^ 배열 -> 문자
const arrayToString = stringToArray.join('/');
console.log(arrayToString);
