import { jujeobData } from './data/data.js';
import { copy } from './lib/utils/copy.js';
import { isNumericString } from './lib/utils/typeOf.js';
import {
  shake,
  addClass,
  clearContents,
  getNode,
  getRandom,
  insertLast,
  removeClass,
  showAlert,
} from './lib/index.js';

// [pharse-1]
// 1. 주접 떨기 버튼을 클릭할 수 있는 핸들러를 연결.
// 2. nameField에 있는 값 가져오기.
// 3. jujeob 데이터 가져오기
// 4. jujeobData에서 랜덤한 주접 한개를 가져와야 함.
// 5. pick 항목을 result에 렌더링.

// [pharse-2]
// 1. 아무 값도 입력 받지 못했을 때 예외처리
// 2. 공백 문자를 받았을 때 예외처리 replace => regEXP
// 3. 숫자형 문자를 받았을 때 (e.g 123, 기안84)

// [pharse-3]
// 1. 잘못된 정보를 입력 받으면 사용자에게 알려주세요.
// is-active가 있었다가 일정 시간 후 사라지게
// 2. 재사용 가능한 함수 (showAlert)
// 3. gsap을 사용하여 shake 기능 구현
// 4. animation 모듈화

// [pharse-4]
// 1. result 클릭 이벤트 바인딩

const submit = getNode('#submit');
const nameField = getNode('#nameField');
const resultArea = getNode('.result');

function handleSubmit(e) {
  e.preventDefault();

  let name = nameField.value;
  const list = jujeobData(name);
  const pick = list[getRandom(list.length)];

  // 정규 표현식 : 모든 spacing 공간을 빈문자로 만든다. === 실제 빈문자''와 일치 여부 확인하여 빈문자 거르기.
  if (!name || name.replace(/\s*/g, '') === '') {
    // alert-error라는 클래스를 가진 요소에 is-active 클래스를 추가한다.
    /*     addClass('.alert-error', 'is-active');
    setTimeout(() => {
      removeClass('.alert-error', 'is-active');
    }, 2000); */

    // ^유틸함수로 사용
    showAlert('.alert-error', '이름을 입력해주세요!!', 2000);

    /* global gsap */
    // gsap.to('form', {
    //   duration: 0.1,
    //   x: -10,
    //   repeat: 5,
    //   yoyo: true,
    //   // x좌표 초기화
    //   clearprop: 'x',
    // });
    shake.restart();

    return;
  }

  // 내가 NaN이야? NaN아니야? -> NaN 체크
  // console.log(isNaN(Number(name)));

  if (!isNumericString(name)) {
    // console.log('숫자 타입 입니다.');
    showAlert('.alert-error', '제대로된 이름을 입력 해주세요!', 2000);
    return;
  }

  // 리스트라는 배열의 length -1개까지 랜덤을 돌기
  // 그 값을 list의 n번째로 지정
  // console.log(list[getRandom(list.length-1)]);

  clearContents(resultArea);
  insertLast(resultArea, pick);
}

/* 이름을 제대로 입력 했을 때 클립보드에 복사가 될 수 있도록 해보기.
const state = false;

state = true;

if(state){  ...logic } */

function handleCopy() {
  const text = resultArea.textContent;

  // navigator.clipboard.writeText(text);
  // 성공 얼럿 등장
  // showAlert('.alert-success', '클립보드 복사 완료!');

  // ^유틸함수 사용
  copy(text).then(() => {
    showAlert('.alert-success', '클립보드 복사 완료!');
  });
}

submit.addEventListener('click', handleSubmit);
resultArea.addEventListener('click', handleCopy);
