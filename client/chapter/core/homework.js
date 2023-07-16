// Dom에 접근하는 방법
document.querySelector();
const input = document.querySelector('#todo');

console.log(input.value); //input의 값을 가져옴

//콘솔
input.value === 'aaa';

input.classList.add('is-active');
input.classList.remove('is-active');

const value = input.value;

input.addEventListener('input', () => {
  value = input.value;
  console.log(value === 'hello');
});

// 사용자가 이메일을 잘 입력 했는지 확인하는 식 > true, false로
function emailReg(text) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(text).toLowerCase());
}

// 6자 이상 숫자 하나 숫자 하나 들어가야 true
function pwReg(text) {
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
  return re.test(String(text).toLowerCase());
}

// input 이메일
const email = document.querySelector('.email');
const pw = document.querySelector('.pw');
const button = document.querySelector('.button');

email.addEventListener('input', function () {
  console.log(this.value);
  console.log(emailReg(this.value));
});
