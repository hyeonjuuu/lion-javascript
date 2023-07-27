/* gloabl gsap */

import {
  tiger,
  insertLast,
  getNode as $,
  renderUserCard,
  changeColor,
  delayP,
  renderSpinner,
  renderEmptyCard,
  getNode,
  attr,
  clearContents,
} from './lib/index.js';

// [phase-1]
// 1. tiger 함수를 사용해서 user을 가져와주세요.
// 2. 함수 안으로 넣기
// 3. 유저 데이터 렌더링
// -html template를 만든다.
// -유저의 data를 넘겨주기.
// -insertLast 사용해서 유저 정보를 렌더링
// 4. 함수 분리하기

// [phase-2]
// 1. 에러가 발생했을 때
// 2. 함수 분리
// 3.

const userCardInner = $('.user-card-inner'); // div.user-card-inner

async function renderUserList() {
  renderSpinner(userCardInner);
  try {
    await delayP({ timout: 2000 }); //1초 기다린 후 렌더링 되도록

    // ^DOM은 사라지지 않고 투명도를 제어하여 사라지는 것 처럼 제어
    gsap.to('.loadingSpinner', {
      opacity: 0,
      onComplite() {
        $('.loadingSpinner').remove();
      },
    });

    // ^ DOM 자체를 제거
    // $('.loadingSpinner').remove(); // await delayP(); 후에 로딩 아이콘 사라지도록 제어

    const response = await tiger.get('http://localhost:3000/users');

    const userData = response.data;

    // 위에서 받아진 데이터로 forEach
    // 화살표 함수로 생략하여 한줄로 만들기
    userData.forEach((item) => renderUserCard(userCardInner, item));
    changeColor('.user-card');

    gsap.to('.user-card', {
      x: 0, // tramslate X를 원래 위치로
      opacity: 1, // 투명도 1로
      stagger: 0.2, //순차적으로 나오게
    });
  } catch (err) {
    console.log(err);
    renderEmptyCard(userCardInner);
  }
}

renderUserList();

// #삭제
// 버튼을 클릭 했을 때 해당 article의 id값을 가져옴.
// - 이벤트 위임
// - button 선택하기 -> 클릭한 대상의 가장 가까운 ... method
// - attr(), dataset으로 값 가져오기

// 1-1. 이벤트 위임

function handleDelete(e) {
  const button = e.target.closest('button');

  // article 가져오기
  const article = e.target.closest('article');

  // 아티클이 아닌 정확히 버튼을 클릭했을 때 삭제될 수 있도록 조건처리
  if (!article || !button) return; // article, button이 아니라면 함수 실행 중지

  // dataset 이용
  // console.log(article.dataset.index);
  // attr() 이용
  const id = attr(article, 'data-index').slice(5); // 숫자만 출력

  // fetch로 이루어져있는 tiger유틸함수로 delete통신을 통해 유저 목록 중에 ${id} 제거해줘! 요청
  tiger.delete(`http://localhost:3000/users/${id}`).then(() => {
    //컨텐츠 항목 전체 지우기
    clearContents(userCardInner); // 삭제 클릭시 화면에서 모든 항목이 사라짐.
    renderUserList(); // 삭제 클릭한 부분만 화면에서 사라지고 다시 렌더하여 나머지 항목 화면에 띄움
  });
}
userCardInner.addEventListener('click', handleDelete);
